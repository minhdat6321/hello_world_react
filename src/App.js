import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  const [tasks, setTasks] = useState([
    {
      title: `learn JSS`,
      id: `task_1`,
      status: 0,
    },
    { title: `Code a Todo List Web`, id: `task_2`, status: 0 },
  ]);

  const [showIncomplete, setShowIncomplete] = useState(false);

  const [newTask, setNewTask] = useState(``);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        title: newTask,
        id: Date.now(),
        status: 0,
      };
      setTasks([...tasks, task]);
      setNewTask(``);
    }
  };

  const setTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: status ? 1 : 0 };
        }
        return task;
      })
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <Header title="Todo List" subTitle="Get things done" />

      <TasksList
        tasks={tasks}
        showIncomplete={showIncomplete}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
        setShowIncomplete={setShowIncomplete}
      />

      <AddTaskForm
        handleSubmit={handleSubmit}
        newTask={newTask}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}

export default App;
