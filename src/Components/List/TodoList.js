import React from "react";
import "./style.css"; // Stil dosyası

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <input
            style={{ height: 20, width: 20 }}
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <span
            style={{
              maxWidth: 300,
              wordWrap: "break-word",
            }}
            className={todo.completed ? "todo-text completed" : "todo-text"}
            onClick={() => onToggle(todo.id)}
          >
            {todo.text}
          </span>

          <button className="delete-btn" onClick={() => onDelete(todo.id)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
