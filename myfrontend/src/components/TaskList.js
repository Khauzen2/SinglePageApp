import React, { useEffect, useState } from "react";
import { fetchTasks, createTask } from "../services/apiServices";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetchTasks().then((response) => setTasks(response.data));
  }, []);

  const handleAddTask = () => {
    const task = { title: newTask, completed: false };
    createTask(task).then((response) => {
      setTasks([...tasks, response.data]);
      setNewTask("");
    });
  };

  return (
    <div>
      <h1>Task List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
