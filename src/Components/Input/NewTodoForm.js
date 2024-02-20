import { useState } from "react";
import "./style.css";

function NewTodoForm({ onAdd }) {
  const [formData, setFormData] = useState({
    text: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
  });

  const { text, startDate, startTime, endDate, endTime } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() || !startDate || !startTime || !endDate || !endTime) {
      alert("Lütfen tüm alanları doldurun");
      return;
    }
    const startDatetime = ` ${startTime}  ,  ${startDate} `;
    const endDatetime = `${endTime}  ,  ${endDate} `;
    onAdd({ text, startDatetime, endDatetime });
    setFormData({
      text: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
    });
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <textarea
        name="text"
        value={text}
        onChange={handleChange}
        placeholder="Yeni yapılacak ekle"
        className="todo-input"
      />
      <div className="datetime-container">
        <div className="datetime-label">Başlangıç:</div>
        <div className="datetime-inputs">
          <input
            type="date"
            name="startDate"
            value={startDate}
            onChange={handleChange}
            className="datetime-input"
          />
          <input
            type="time"
            name="startTime"
            value={startTime}
            onChange={handleChange}
            className="datetime-input"
          />
        </div>
      </div>
      <div className="datetime-container">
        <div className="datetime-label">Bitiş:</div>
        <div className="datetime-inputs">
          <input
            type="date"
            name="endDate"
            value={endDate}
            onChange={handleChange}
            className="datetime-input"
          />
          <input
            type="time"
            name="endTime"
            value={endTime}
            onChange={handleChange}
            className="datetime-input"
          />
        </div>
      </div>
      <button type="submit" className="add-btn">
        Ekle
      </button>
    </form>
  );
}

export default NewTodoForm;
