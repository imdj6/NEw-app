import React from "react";

export default function NavBar() {
  return (
    <div>
      <div className="container text-center ">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid ">
            <a className="navbar-brand" href="/">
              <strong>Todo List</strong>
            </a>
          </div>
        </nav>
      </div>
      <div className="container text-center mt-1">
        <strong>Developed by Danish with ❤ Using React Js</strong>
      </div>
    </div>
  );
}
