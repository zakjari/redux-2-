import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, toggleComplete, deleteTask, setFilter } from "./tasksSlice";
import { applyMiddleware } from "@reduxjs/toolkit";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const dispatch = useDispatch();

  // Accéder à l'état via useSelector
  const tasks = useSelector((state) => state.tasks.list);
  const filter = useSelector((state) => state.tasks.filter);

  // Ajouter une nouvelle tâche
  const handleAddTask = () => {
    if (taskInput) {
      dispatch(addTask(taskInput));
      setTaskInput("");
    }
  };

  // Filtrer les tâches
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div>
      <h1>Liste des tâches</h1>

      {/* Formulaire pour ajouter une tâche */}
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Ajouter une tâche"
      />
      <button onClick={handleAddTask}>Ajouter</button>

      {/* Filtrage des tâches */}
      <div>
        <button onClick={() => dispatch(setFilter("all"))}>Toutes</button>
        <button onClick={() => dispatch(setFilter("completed"))}>
          Complétées
        </button>
        <button onClick={() => dispatch(setFilter("pending"))}>À faire</button>
      </div>

      {/* Liste des tâches filtrées */}
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
              onClick={() => dispatch(toggleComplete(task.id))}
            >
              {task.text}
            </span>
            <button onClick={() => dispatch(deleteTask(task.id))}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
