import React from "react";
import "./style.css"; // Stil dosyası

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`todo-card ${todo.completed ? "completed" : ""}`}
        >
          <div className="todo-content">
            <div className="todo-content-desc">
              <input
                style={{ height: 20, width: 20 }}
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <span
                className={
                  todo.completed ? "todo-text completed" : "todo-text-date"
                }
                onClick={() => onToggle(todo.id)}
              >
                {todo.text}
              </span>
            </div>

            <div className="todo-details">
              <div className="todo-detail">
                <span className="todo-detail-title">Başlangıç:</span>
                <span
                  className={
                    todo.completed ? "todo-text completed" : "todo-text-value"
                  }
                  onClick={() => onToggle(todo.id)}
                >
                  {todo.startDatetime}
                </span>
              </div>
              <div className="todo-detail">
                <span className="todo-detail-title">Bitiş:</span>
                <span
                  className={
                    todo.completed ? "todo-text completed" : "todo-text-value"
                  }
                  onClick={() => onToggle(todo.id)}
                >
                  {todo.endDatetime}
                </span>
              </div>
            </div>
          </div>
          <button className="delete-btn" onClick={() => onDelete(todo.id)}>
            SİL
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
