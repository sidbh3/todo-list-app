import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
import TodoStats from "./TodoStats";

function App() {
  const [todos, setTodos] = useState([]);

  // useEffect hook to load todos from local storage when the component mounts
  useEffect(() => {
    // Retrieve saved todos from local storage
    const localData = localStorage.getItem("localTodos");
    if (localData) {
      const data = JSON.parse(localData); // Parse the JSON data from local storage
      setTodos(data);
    }
  }, []);

  // useEffect hook to update local storage when todos change
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("localTodos", JSON.stringify(todos)); // Save todos to local storage
    } else {
      localStorage.removeItem("localTodos"); // Remove localTodos if todos array is empty
    }
  }, [todos]);

  // Function to add a new todo
  const addTodo = (newTodo) => {
    setTodos((prevState) => [...prevState, newTodo]);
  };

  // Function to remove a todo by its id
  const removeTodo = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  // Function to toggle the completed status of a todo by its id
  const toggleCompleted = (id) => {
    setTodos((prevState) => {
      // Map over todos and toggle completed status of the specified todo
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  return (
    <div className="container">
      <h1 className="main-title">Todo List</h1>
      {/* Component to display */}
      <TodoStats todos={todos} />
      <TodoForm addTodo={addTodo} />
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
