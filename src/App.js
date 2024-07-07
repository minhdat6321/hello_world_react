// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [tasks, setTasks] = useState([
//     {
//       title: `Learn uchihcih JS`,
//       status: 0,
//       id: `task_1`,
//     },
//     { title: `Code a Todo List kakakaka`, status: 0, id: `task_2` },
//   ]);

//   const [showIncomplete, setShowIncomplete] = useState(false);

//   const [newTask, setNewTask] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (newTask) {
//       const task = {
//         id: Date.now(), //trick lord de tao ID
//         title: newTask,
//         status: 0,
//       };
//       setTasks([...tasks, task]);
//       setNewTask("");
//     }
//   };
//   const handleInputChange = (e) => {
//     setNewTask(e.target.value);
//   };
//   const setTaskStatus = (taskId, status) => {
//     setTasks(
//       tasks.map((task) => {
//         if (task.id === taskId) {
//           return { ...task, status: status ? 1 : 0 };
//         }
//         return task;
//       })
//     );
//   };
//   const removeTask = (taskId) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   return (
//     <div className="container">
//       <h1 className="title">Todo List</h1>
//       <span>Get one item done at a time.</span>
//       <ul className="task-list">
//         {tasks
//           .filter((task) => (showIncomplete ? task.status !== 1 : true))
//           .map((task) => (
//             <li key={task.id} className={task.status === 1 ? `done` : ``}>
//               <span className="label">{task.title}</span>
//               <div className="actions">
//                 <input
//                   type="checkbox"
//                   checked={Boolean(task.status)}
//                   className="btn-actions btn-action-done"
//                   onChange={(e) => setTaskStatus(task.id, e.target.checked)}
//                 />
//                 <button
//                   onClick={() => removeTask(task.id)}
//                   className="btn-action btn-action-delete"
//                 >
//                   ✖
//                 </button>
//               </div>
//             </li>
//           ))}
//       </ul>
//       <div className="filter-wrapper">
//         <label htmlFor="filter" className="filter-label">
//           Show incompleted task only
//         </label>
//         <input
//           type="checkbox"
//           id="filter"
//           checked={showIncomplete}
//           onChange={(e) => setShowIncomplete(e.target.checked)}
//         />
//       </div>
//       <form onSubmit={handleSubmit} className="form">
//         <label htmlFor="newitem">Add to the todo list</label>
//         <input
//           type="text"
//           id="newitem"
//           value={newTask}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Add Item</button>
//       </form>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";

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

  //Chưa hiểu mục đích của cái này:
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
      <h1 className="title">Todo List</h1>
      <span>Get one item done at a time.</span>
      <ul className="task-list">
        {tasks
          .filter((task) => (showIncomplete ? task.status !== 1 : true)) //Phần filter xem lại
          .map((task) => (
            <li key={task.id} className={task.status === 1 ? `done` : ``}>
              <span className="label">{task.title}</span>
              <div className="actions">
                <input
                  type="checkbox"
                  className="btn-actions btn-action-done"
                  checked={Boolean(task.status)} // xem lại
                  onChange={(e) => setTaskStatus(task.id, e.target.checked)} //xem kĩ setTaskStatus
                />
                <button
                  onClick={() => removeTask(task.id)}
                  className="btn-action btn-action-delete"
                >
                  ✖
                </button>
              </div>
            </li>
          ))}
      </ul>

      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Show incompleted task only
        </label>
        <input
          type="checkbox"
          id="filter"
          checked={showIncomplete}
          onChange={(e) => setShowIncomplete(e.target.checked)}
        />
      </div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="newitem">Add to the todo list</label>
        <input
          value={newTask}
          type="text"
          id="newitem"
          onChange={handleInputChange}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default App;
