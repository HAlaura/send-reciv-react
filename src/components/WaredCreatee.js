import React, { useState } from 'react';
import './CreateRecord.css';

const WaredCreate = ({ addRecord }) => {
  const [formData, setFormData] = useState({
    id: '',
    priority: '',
    sender: '',
    subject: '',
    notes: '',
    number: '',
    date: '',
    file: null,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, file: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const uniqueId = Date.now();
    const newRecord = { ...formData, id: uniqueId };

    // إضافة السجل إلى الحالة في المكون الأب
    addRecord(newRecord);

    setMessage('تم حفظ البيانات بنجاح!');

    setFormData({
      id: '',
      priority: '',
      sender: '',
      subject: '',
      notes: '',
      number: '',
      date: '',
      file: null,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="create-record">
      {message && <div className="success-message">{message}</div>}
      <h2>الصادر</h2>
      <div className="form-row">
        <div className="form-group">
          <label>جهة الارسال:</label>
          <input type="text" name="sender" value={formData.sender} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>الموضوع:</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>العدد:</label>
          <input type="text" name="number" value={formData.number} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>التاريخ:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>الأولوية:</label>
          <select name="priority" value={formData.priority} onChange={handleChange} required>
            <option value="">اختر الأولوية</option>
            <option value="عاجل">عاجل</option>
            <option value="سري">سري</option>
            <option value="عاجل جدا">عاجل جدا</option>
            <option value="عادي">عادي</option>
          </select>
        </div>
        <div className="form-group">
          <label>الملاحظات:</label>
          <textarea name="notes" value={formData.notes} onChange={handleChange}></textarea>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>رفع ملف:</label>
          <input type="file" onChange={handleFileChange} required />
        </div>
        <button type="submit">إنشاء</button>
      </div>
    </form>
  );
};

export default WaredCreate;
