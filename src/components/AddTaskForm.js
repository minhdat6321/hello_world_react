import React from "react";

function AddTaskForm({ handleSubmit, newTask, handleInputChange }) {
  return (
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
  );
}

export default AddTaskForm;
