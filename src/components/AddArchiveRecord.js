import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddArchiveRecord = () => {
  const [title, setTitle] = useState('');
  const [sender, setSender] = useState('');
  const [notes, setNotes] = useState('');
  const [urgency, setUrgency] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://mary.pythonanywhere.com/archive/', {
        title,
        sender,
        notes,
        urgency,
        number,
      });
      alert('تم إضافة السجل إلى الأرشيف بنجاح!');
      navigate('/archive'); // إعادة التوجيه إلى صفحة الأرشيف بعد الإضافة
    } catch (error) {
      console.error('Error adding record:', error);
      setError('فشل في إضافة السجل. يرجى المحاولة مرة أخرى.');
    }
  };

  return (
    <div>
      <h2>إضافة سجل إلى الأرشيف</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>العنوان:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>جهة الإرسال:</label>
          <input type="text" value={sender} onChange={(e) => setSender(e.target.value)} required />
        </div>
        <div>
          <label>الملاحظات:</label>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} required></textarea>
        </div>
        <div>
          <label>الأولوية:</label>
          <input type="text" value={urgency} onChange={(e) => setUrgency(e.target.value)} required />
        </div>
        <div>
          <label>العدد:</label>
          <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} required />
        </div>
        <button type="submit">إضافة السجل</button>
      </form>
    </div>
  );
};

export default AddArchiveRecord;
