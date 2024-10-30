import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './CreateRecord.css';

const EditAndArchive = () => {
  const location = useLocation();
  const { record} = location.state; // استرجاع السجل والفهرس من الحالة
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ ...record });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDelete = () => {
    if (window.confirm('هل تريد حذف هذا السجل؟')) {
      // هنا يمكنك إضافة منطق لحذف السجل
      alert('تم حذف السجل!');
      navigate('/tabwared'); // العودة إلى صفحة البيانات
    }
  };

  const handleArchive = () => {
    // تخزين السجل في localStorage
    const archivedRecords = JSON.parse(localStorage.getItem('archivedRecords')) || [];
    archivedRecords.push(formData);
    localStorage.setItem('archivedRecords', JSON.stringify(archivedRecords));
    
    alert('تم أرشفة السجل بنجاح!');
    navigate('/waredarchive'); // العودة إلى صفحة الأرشيف
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة منطق لتحديث السجل
    alert('تم تعديل السجل بنجاح!');
    navigate('/tabwared'); // العودة إلى صفحة البيانات
  };

  return (
    <div className="edit-archive">
      <h2>تعديل وأرشفة السجل</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>جهة الارسال:</label>
          <input type="text" name="sender" value={formData.sender} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>الموضوع:</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>العدد:</label>
          <input type="number" name="number" value={formData.number} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>التاريخ:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
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
        <button type="submit">تعديل</button>
        <button type="button" onClick={handleDelete}>حذف</button>
        <button type="button" onClick={handleArchive}>أرشفة</button>
      </form>
    </div>
  );
};

export default EditAndArchive;
