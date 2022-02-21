import { react ,useEffect, useState } from "react";
import db from "./firebase";
import NavBar from "./NavBar";
import Todo from "./Todo";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    //this code fires when app.js loaded
    db.collection('todos').orderBy("timestamp", "desc").onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data().todo))
      // console.log(snapshot.docs.map(doc => doc.data()))
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })}, [])
  

  const addTodo = (Event) => {
    Event.preventDefault();
    // setTodos([...todos,input]);
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div>
      <NavBar />
      <div className="container mt-3">
        <form action="">
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              value={input}
              onChange={(Event) => setInput(Event.target.value)}
              placeholder="Write your Todos"
              id="floatingTextarea"
              style={{ height: "71px", color: "black" }}
            ></textarea>
            <label htmlFor="floatingTextarea"> ✅Write your Todos here!!</label>
          </div>
          <div className="container">
            <button
              disabled={!input}
              type="submit"
              onClick={addTodo}
              className="btn btn-dark"
            >
              ADD TODO
            </button>
          </div>
        </form>
      </div>
      <div className="container mt-5">
        <h3>Your Todos:</h3>
      </div>
      <div className="container mt-3">
        <div className="row row-cols-4">
          {todos.map((todo, key) => {
            return <Todo todo={todo} key={key} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
