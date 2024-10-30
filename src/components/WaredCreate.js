

import React, { useState } from 'react';

const WaredCreate = ({ addRecord }) => {
  const [formData, setFormData] = useState({
    priority: 'سري',
    sender: '',
    subject: '',
    notes: '',
    number: '',
    date: '',
    file: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    if (typeof addRecord === 'function') {
      addRecord(formData);
    } else {
      console.error('addRecord is not a function');
    }

    // إعادة تعيين النموذج
    setFormData({
      priority: 'سري',
      sender: 'وزارة الصحة',
      subject: 'لقاح',
      notes: 'منطقة الكرخ',
      number: '345',
      date: '2024-10-28',
      file: null,
    });
  };


  return (
    <form onSubmit={handleSubmit} className="create-record">
      <h2>إنشاء سجل وارد</h2>
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
          <input type="number" name="number" value={formData.number} onChange={handleChange} required />
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
          <input type="file" onChange={handleFileChange} />
        </div>
        <button type="submit">إنشاء</button>
      </div>
    </form>
  );
};

export default WaredCreate;
