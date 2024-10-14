import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]); // State to activities
  const [task, setTask] = useState(''); // State to new activity

  // Function to add new activity
  const addTask = (e) => {
    if (e.key === 'Enter' && task.trim()) {
      setTasks([...tasks, task]); // Add activity
      setTask(''); // Clean input
    }
  };

  // Function to delete activity
  const deleteTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove)); // Filter and delete activity
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} // Value of activity
        onKeyDown={addTask} // Press enter
        placeholder="Añadir tarea"
      />
      <ul>
        {tasks.length === 0 ? (
          <li className="no-tasks">No hay tareas, añadir tareas</li>
        ) : (
          tasks.map((task, index) => (
            <li key={index} className="task">
              {task}
              <span className="delete" onClick={() => deleteTask(index)}>🗑</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoList;
