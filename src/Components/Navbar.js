import React from "react";
import "./Nav.css";

function Nav(){
    return(
        <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">ToDo List</h1>
      </div>
      <div className="navbar-right">
        <ul>
          <li>My Task</li>
          <li>Completed Task</li>
          <li>Incomplete Task</li>
          <li>Add Task</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;