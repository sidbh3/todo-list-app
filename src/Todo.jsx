import React from "react";
import { ImCross } from "react-icons/im"; 
// Importing the cross icon from react-icons

// Functional component for a single todo item
function Todo({ id, completed, title, toggleCompleted, removeTodo }) {
    return (
        <div className="todo">
            <div className="todo-title">
                {/* Checkbox to mark the todo which tell either it is completed or not */}
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => {
                        toggleCompleted(id); 
                    }}
                />
              
                <p className={`${completed ? "completed" : ""}`}>{title}</p>
            </div>
            {/* Button to remove the todo */}
            <div className="cross-btn" onClick={() => removeTodo(id)}>
                <ImCross /> 
            </div>
        </div>
    );
}

export default Todo;
