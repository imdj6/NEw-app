import React from "react";
import db from "./firebase";

export default function Todo(props) {
  return (
    <div>
      <div className="card mt-3">
        <h5 className="card-header">Uploaded Task🐱‍🏍</h5>
        <div className="card-body">
          <p className="card-text">{props.todo}</p>
          <button type="button" className="btn btn-primary mx-2"
            onClick={(Event)=>db.collection('todos').doc(props.timestamp).delete()}
          >
            {" "}
            ❌DELETE
          </button>
          <button type="button" className="btn btn-primary mx-2">
            {" "}
            EDIT 🖌
          </button>
        </div>
      </div>
    </div>
  );
}
