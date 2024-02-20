import { useState } from "react";
import "./style.css";

function NewTodoForm({ onAdd }) {
  // Form verilerini tutmak için state kullanılıyor
  const [formData, setFormData] = useState({
    text: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
  });

  const { text, startDate, startTime, endDate, endTime } = formData;

  // Input değişikliklerini takip eden fonksiyon
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form gönderimini işleyen fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault();
    // Formun eksik alanlarını kontrol etme
    if (!text.trim() || !startDate || !startTime || !endDate || !endTime) {
      alert("Lütfen tüm alanları doldurun");
      return;
    }
    // Başlangıç ve bitiş tarihlerini ve saatlerini birleştirme
    const startDatetime = `${startTime}  ,  ${startDate}`;
    const endDatetime = `${endTime}  ,  ${endDate}`;
    // Ana bileşene yeni görevi ileterek formu sıfırlama
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
      {/* Yapılacak metnini girmek için metin alanı */}
      <textarea
        name="text"
        value={text}
        onChange={handleChange}
        placeholder="Yeni yapılacak ekle"
        className="todo-input"
      />
      {/* Başlangıç ve bitiş tarih-saat giriş alanları */}
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
      {/* Gönderme butonu */}
      <button type="submit" className="add-btn">
        Ekle
      </button>
    </form>
  );
}

export default NewTodoForm;
