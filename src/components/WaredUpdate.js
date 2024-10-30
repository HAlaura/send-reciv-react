import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const WaredUpdate = () => {
  const { state } = useLocation();
  const record = state.records[state.index];
  const [formData, setFormData] = useState(record);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة منطق لتحديث السجل
    alert('تم تحديث السجل بنجاح!');
    navigate('/datawared'); // العودة إلى صفحة بيانات الوارد
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>تحديث السجل</h2>
      <input type="text" name="sender" value={formData.sender} onChange={handleChange} required />
      <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
      {/* أضف باقي الحقول حسب الحاجة */}
      <button type="submit">تحديث</button>
    </form>
  );
};

export default WaredUpdate;
