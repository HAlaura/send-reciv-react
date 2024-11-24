// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AddArchiveRecord = () => {
//   const [title, setTitle] = useState('');
//   const [sender, setSender] = useState('');
//   const [notes, setNotes] = useState('');
//   const [urgency, setUrgency] = useState('');
//   const [number, setNumber] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('https://mary.pythonanywhere.com/archive/', {
//         title,
//         sender,
//         notes,
//         urgency,
//         number,
//       });
//       alert('تم إضافة السجل إلى الأرشيف بنجاح!');
//       navigate('/archive'); // إعادة التوجيه إلى صفحة الأرشيف بعد الإضافة
//     } catch (error) {
//       console.error('Error adding record:', error);
//       setError('فشل في إضافة السجل. يرجى المحاولة مرة أخرى.');
//     }
//   };

//   return (
//     <div>
//       <h2>إضافة سجل إلى الأرشيف</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>العنوان:</label>
//           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
//         </div>
//         <div>
//           <label>جهة الإرسال:</label>
//           <input type="text" value={sender} onChange={(e) => setSender(e.target.value)} required />
//         </div>
//         <div>
//           <label>الملاحظات:</label>
//           <textarea value={notes} onChange={(e) => setNotes(e.target.value)} required></textarea>
//         </div>
//         <div>
//           <label>الأولوية:</label>
//           <input type="text" value={urgency} onChange={(e) => setUrgency(e.target.value)} required />
//         </div>
//         <div>
//           <label>العدد:</label>
//           <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} required />
//         </div>
//         <button type="submit">إضافة السجل</button>
//       </form>
//     </div>
//   );
// };

// export default AddArchiveRecord;
//

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateRecord.css';

const AddArchiveRecord = () => {
  const [formData, setFormData] = useState({
    title: '',
    sender: '',
    notes: '',
    urgency: '',
    number: '',
    date: '',
    file: null,
  });
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, file: file });
    }
  };

  // Translate urgency from Arabic to English
  const translateUrgency = (urgency) => {
    switch (urgency) {
      case 'عاجل جدا':
        return 'very urgent';
      case 'عاجل':
        return 'urgent';
      case 'عادي':
        return 'normal';
      case 'سري':
        return 'secret';
      default:
        return urgency;  // If urgency is unknown, return as is
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.file) {
      setMessage('الرجاء رفع الملف.');
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('sender', formData.sender);
    formDataToSend.append('notes', formData.notes);
    formDataToSend.append('urgency', translateUrgency(formData.urgency)); // Translate urgency to English
    formDataToSend.append('number', formData.number);
    formDataToSend.append('date', formData.date);
    formDataToSend.append('file', formData.file);

    try {
      const response = await axios.post('https://mary.pythonanywhere.com/archive/', formDataToSend, {
        headers: {
          'accept': 'application/json',
        },
      });
      
      if (response.status === 200) {
        setMessage('تم حفظ البيانات بنجاح!');
        setFormData({
          title: '',
          sender: '',
          notes: '',
          urgency: '',
          number: '',
          date: '',
          file: null,
        });
        alert('تم إضافة السجل إلى الأرشيف بنجاح!');
        navigate('/archive'); // Redirect to the archive page after submission
      }
    } catch (error) {
      console.error('Error adding record:', error);
      setError('فشل في إضافة السجل. يرجى المحاولة مرة أخرى.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-record">
      {message && <div className="success-message">{message}</div>}
      {error && <div className="error-message">{error}</div>} {/* Display error message */}
      
      <h2>الصادر</h2>
      
      <div className="form-row">
        <div className="form-group">
          <label>جهة الإرسال:</label>
          <input type="text" name="sender" value={formData.sender} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>العنوان:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
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
          <select name="urgency" value={formData.urgency} onChange={handleChange} required>
            <option value="">اختر الأولوية</option>
            <option value="عاجل جدا">عاجل جدا</option>
            <option value="عاجل">عاجل</option>
            <option value="عادي">عادي</option>
            <option value="سري">سري</option>
          </select>
        </div>
        <div className="form-group">
          <label>الملاحظات:</label>
          <textarea name="notes" value={formData.notes} onChange={handleChange}></textarea>
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group-file">
          <label>رفع ملف:</label>
          <input type="file" onChange={handleFileChange} required />
        </div>
        <button type="submit">إنشاء</button>
      </div>
    </form>
  );
};

export default AddArchiveRecord;
