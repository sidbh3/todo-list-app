import { useState } from "react";
import { v4 as uuid } from "uuid";

// Functional component for the form to add a new todo
function TodoForm({ addTodo }) {
  // useState hook to manage the state of the input field
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    // Function to handle the form submission
    e.preventDefault();
    if (title.trim().length === 0) {
      alert("Please enter a task"); // Show an alert if the input is empty
      return;
    }
    // Create a new todo object
    const newTodo = {
      title: title,
      completed: false,
      id: uuid(),
    };
    addTodo(newTodo);
    setTitle("");
  }
  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <input
        className="todoForm__input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="todoForm__btn">
        Add
      </button>
    </form>
  );
}
export default TodoForm;