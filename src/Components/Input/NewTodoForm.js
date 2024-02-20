import { useState } from "react";
import "./style.css";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
function NewTodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Yeni yapılacak ekle"
        className="todo-input"
      />
      <button type="submit" className="add-btn">
        Ekle
      </button>
    </form>
  );
}
export default NewTodoForm;
