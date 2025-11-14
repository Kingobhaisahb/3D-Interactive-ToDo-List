import React, { useState } from "react";
import "./TextSection.css";

function TextSection() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [input, setInput] = useState("");

  // Add new task
  const handleAddTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  // Mark task as complete
  const handleCompleteTask = (task) => {
    setCompletedTasks([...completedTasks, task]);
    setTasks(tasks.filter((t) => t !== task));
  };

  // Delete task
  const handleDeleteTask = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  return (
    <div className="content">
      {/* My Task Section */}
      <section id="mytask" className="section">
        <h1>My Task</h1>
        {tasks.length === 0 ? (
          <p>No tasks added yet.</p>
        ) : (
          <ul className="task-list">
            {tasks.map((task, index) => (
              <li key={index} className="task-item">
                {task}
                <div className="buttons">
                  <button onClick={() => handleCompleteTask(task)}>✔</button>
                  <button onClick={() => handleDeleteTask(task)}>✖</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Completed Task Section */}
      <section id="completed" className="section">
        <h1>Completed Task</h1>
        {completedTasks.length === 0 ? (
          <p>No tasks completed yet.</p>
        ) : (
          <ul className="task-list completed">
            {completedTasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        )}
      </section>

      {/* Add Task Section */}
      <section id="addtask" className="section">
        <h1>Add Task</h1>
        <div className="add-task-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your task..."
          />
          <button onClick={handleAddTask}>Add</button>
        </div>
      </section>
    </div>
  );
}

export default TextSection;

