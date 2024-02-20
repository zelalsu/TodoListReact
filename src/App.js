import React, { useState } from "react";
import "./App.css"; // Stil dosyası
import NewTodoForm from "./Components/Input/NewTodoForm";
import TodoList from "./Components/List/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (formData) => {
    // Yeni bir todo oluşturup todos state'ine ekleme yapılır.
    const newTodo = {
      id: Math.random(),
      text: formData.text,
      startDatetime: formData.startDatetime,
      endDatetime: formData.endDatetime,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <h1 className="app-title">Yapılacaklar Listesi</h1>
      <NewTodoForm onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
