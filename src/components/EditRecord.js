import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditRecord.css';


const EditRecord = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    priority: '',
    sender: '',
    subject: '',
    notes: '',
    number: '',
    date: '',
    file: null,
  });

  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
    const selectedRecord = storedRecords[id];
    setFormData(selectedRecord);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setFormData({ ...formData, file: reader.result }); // تخزين Data URL
    };
    
    if (file) {
      reader.readAsDataURL(file); // قراءة الملف كـ Data URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
    storedRecords[id] = formData; // تحديث السجل
    localStorage.setItem('records', JSON.stringify(storedRecords));
    navigate(`/record/${id}`); // إعادة التوجيه إلى تفاصيل السجل
  };

  return (
    <form onSubmit={handleSubmit} className="create-record-form">
      <label>الأولوية:</label>
      <input type="text" name="priority" value={formData.priority} onChange={handleChange} required />

      <label>جهة الارسال:</label>
      <input type="text" name="sender" value={formData.sender} onChange={handleChange} required />

      <label>الموضوع:</label>
      <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />

      <label>الملاحظات:</label>
      <textarea name="notes" value={formData.notes} onChange={handleChange}></textarea>

      <label>العدد:</label>
      <input type="number" name="number" value={formData.number} onChange={handleChange} required />

      <label>التاريخ:</label>
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />

      <label>رفع ملف:</label>
      <input type="file" onChange={handleFileChange} />

      <button type="submit">تحديث</button>
    </form>
  );
};

export default EditRecord;
