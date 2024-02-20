import React, { useState } from "react";
import "./App.css"; // Stil dosyası
import NewTodoForm from "./Components/Input/NewTodoForm";
import TodoList from "./Components/List/TodoList";

function App() {
  // State tanımı: todos, yapılacakların listesini tutar.
  const [todos, setTodos] = useState([]);

  // Yeni bir todo eklemek için kullanılan fonksiyon.
  const handleAddTodo = (formData) => {
    const newTodo = {
      id: Math.random(),
      text: formData.text,
      startDatetime: formData.startDatetime,
      endDatetime: formData.endDatetime,
      completed: false,
    };
    // Yeni todo, mevcut todo listesine eklenir ve state güncellenir.
    setTodos([...todos, newTodo]);
  };
  // Bir todo'nun tamamlanma durumunu değiştirmek için kullanılan fonksiyon.
  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Bir todo'yu silmek için kullanılan fonksiyon.
  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <h1 className="app-title">Yapılacaklar Listesi</h1>
      {/* Yeni bir todo eklemek için form bileşeni */}
      <NewTodoForm onAdd={handleAddTodo} />
      {/* Todo listesi gösterimi için liste bileşeni */}
      <TodoList
        todos={todos} // Todo listesi
        onToggle={handleToggleTodo} // Todo tamamlanma durumu değiştirme işlevi
        onDelete={handleDeleteTodo} // Todo silme işlevi
      />
    </div>
  );
}

export default App;
