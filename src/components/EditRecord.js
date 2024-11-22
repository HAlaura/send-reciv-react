// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './EditRecord.css';


// const EditRecord = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     priority: '',
//     sender: '',
//     subject: '',
//     notes: '',
//     number: '',
//     date: '',
//     file: null,
//   });

//   useEffect(() => {
//     const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
//     const selectedRecord = storedRecords[id];
//     setFormData(selectedRecord);
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
    
//     reader.onloadend = () => {
//       setFormData({ ...formData, file: reader.result }); // تخزين Data URL
//     };
    
//     if (file) {
//       reader.readAsDataURL(file); // قراءة الملف كـ Data URL
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
//     storedRecords[id] = formData; // تحديث السجل
//     localStorage.setItem('records', JSON.stringify(storedRecords));
//     navigate(`/record/${id}`); // إعادة التوجيه إلى تفاصيل السجل
//   };

//   return (
//     <form onSubmit={handleSubmit} className="create-record-form">
//       <label>الأولوية:</label>
//       <input type="text" name="priority" value={formData.priority} onChange={handleChange} required />

//       <label>جهة الارسال:</label>
//       <input type="text" name="sender" value={formData.sender} onChange={handleChange} required />

//       <label>الموضوع:</label>
//       <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />

//       <label>الملاحظات:</label>
//       <textarea name="notes" value={formData.notes} onChange={handleChange}></textarea>

//       <label>العدد:</label>
//       <input type="number" name="number" value={formData.number} onChange={handleChange} required />

//       <label>التاريخ:</label>
//       <input type="date" name="date" value={formData.date} onChange={handleChange} required />

//       <label>رفع ملف:</label>
//       <input type="file" onChange={handleFileChange} />

//       <button type="submit">تحديث</button>
//     </form>
//   );
// };

// export default EditRecord;
//swager

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditRecord.css';

const EditRecord = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    sender: '',
    notes: '',
    urgency: '',
    number: '',
    date: '',
    file: null,
  });

  useEffect(() => {
    const fetchRecord = async () => {
      try {
        const response = await axios.get(`https://mary.pythonanywhere.com/outgoings/${id}/`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching record:', error);
      }
    };

    fetchRecord();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setFormData({ ...formData, file }); // تخزين الملف
    };
    
    if (file) {
      reader.readAsDataURL(file); // قراءة الملف كـ Data URL
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

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('sender', formData.sender);
    formDataToSend.append('notes', formData.notes);
    // formDataToSend.append('urgency', formData.urgency);
    formDataToSend.append('urgency', translateUrgency(formData.urgency)); // Translate urgency to English
 
    formDataToSend.append('number', formData.number);
    formDataToSend.append('date', formData.date);
      formDataToSend.append('file', formData.file);
    

    try {
      await axios.put(`https://mary.pythonanywhere.com/outgoings/${id}/`, formDataToSend, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate(`/record/${id}`); // إعادة التوجيه إلى تفاصيل السجل
    } catch (error) {
      console.error('Error updating record:', error);
    }
  };
  
  

  return (
    <form onSubmit={handleSubmit} className="create-record-form">
      <label>الأولوية:</label>
            <label>الأولوية:</label>
          <select name="urgency" value={formData.urgency} onChange={handleChange} required>
            <option value="">اختر الأولوية</option>
            <option value="عاجل جدا">عاجل جدا</option>
            <option value="عاجل">عاجل</option>
            <option value="عادي">عادي</option>
            <option value="سري">سري</option>
          </select>
      <label>جهة الإرسال:</label>
      <input type="text" name="sender" value={formData.sender} onChange={handleChange} required />

      <label>الموضوع:</label>
      <input type="text" name="title" value={formData.title} onChange={handleChange} required />

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
