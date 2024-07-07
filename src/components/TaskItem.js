import React from "react";

function TaskItem({ task, setTaskStatus, removeTask }) {
  return (
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
  );
}

export default TaskItem;
