import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete React Assignment", category: "Study" },
    { id: 2, title: "Attend Programming Lecture", category: "Classes" },
    { id: 3, title: "Submit Project Report", category: "Project" }
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;

    setTasks([
      ...tasks,
      { id: Date.now(), title: newTask, category: "General" }
    ]);
    setNewTask("");
  };

  useEffect(() => {
    console.log("Task list updated!");
    console.log("Total number of tasks:", tasks.length);
  }, [tasks]);

  return (
    <div className="app">
      <div className="container">

        <header>
          <div className="logo">M</div>
          <div>
            <p>ADVANCE WEB ENGINEERING</p>
            <h1>Campus Task Board</h1>
            <span>Artist by passion • Engineer by profession</span>
          </div>
          <b>5TH<br />SEM</b>
        </header>

        <section className="student">
          <span><small>STUDENT</small>MEHREEN</span>
          <span><small>ROLL NO.</small>24FA-048-CT</span>
          <span><small>SECTION</small>CET</span>
          <span><small>INSTRUCTOR</small>MISS FIZA</span>
        </section>

        <div className="intro">
          Where creativity meets technology ✦
        </div>

        <section className="add">
          <h2>Add a New Task</h2>

          <div>
            <input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Write your next task..."
            />
            <button onClick={addTask}>+ Add Task</button>
          </div>
        </section>

        <section>
          <h2>My Tasks <small>{tasks.length} tasks</small></h2>

          <div className="tasks">
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </section>

        <footer>
          ART • CODE • TRAVEL • NATURE
        </footer>

      </div>
    </div>
  );
}

export default App;