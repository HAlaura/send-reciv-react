// import React, { useState } from 'react';
// import './CreateRecord.css';

// const CreateRecord = () => {
//   const [formData, setFormData] = useState({
//     priority: '',
//     sender: '',
//     subject: '',
//     notes: '',
//     number: '',
//     date: '',
//     file: null,
//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   const handleFileChange = (e) => {
//     setFormData({ ...formData, file: e.target.files[0] });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // هنا يمكن أن تضيف الكود لإرسال البيانات إلى السيرفر أو تخزينها محليًا
//     console.log(formData);
//   };
//   return (
//     <form onSubmit={handleSubmit} className="create-record-form">
//       <label>الأولوية:</label>
//       <input type="text" name="priority" onChange={handleChange} required />
//       <label>جهة الصادر:</label>
//       <input type="text" name="sender" onChange={handleChange} required />

//       <label>الموضوع:</label>
//       <input type="text" name="subject" onChange={handleChange} required />

//       <label>الملاحظات:</label>
//       <textarea name="notes" onChange={handleChange}></textarea>

//       <label>العدد:</label>
//       <input type="number" name="number" onChange={handleChange} required />

//       <label>التاريخ:</label>
//       <input type="date" name="date" onChange={handleChange} required />

//       <label>رفع ملف:</label>
//       <input type="file" onChange={handleFileChange} required />

//       <button type="submit">إضافة</button>
//     </form>
//   );
// };

// export default CreateRecord;

// import React, { useState } from 'react';
// import './CreateRecord.css';

// const CreateRecord = () => {
//   const [formData, setFormData] = useState({
//     priority: '',
//     sender: '',
//     subject: '',
//     notes: '',
//     number: '',
//     date: '',
//     file: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, file: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // تخزين البيانات محليًا
//     const existingRecords = JSON.parse(localStorage.getItem('records')) || [];
//     existingRecords.push(formData);
//     localStorage.setItem('records', JSON.stringify(existingRecords));
    
//     // إعادة تعيين النموذج
//     setFormData({
//       priority: '',
//       sender: '',
//       subject: '',
//       notes: '',
//       number: '',
//       date: '',
//       file: null,
//     });
    
//     console.log('Record added:', formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="create-record-form">
//       <label>الأولوية:</label>
//       <input type="text" name="priority" value={formData.priority} onChange={handleChange} required />

//       <label>جهة الصادر:</label>
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
//       <input type="file" onChange={handleFileChange} required />
//       <button type="submit">إضافة</button>
//     </form>
//   );
// };
// export default CreateRecord;
// 3
// import React, { useState } from 'react';
// import './CreateRecord.css';
// const CreateRecord = () => {
//   const [formData, setFormData] = useState({
//     priority: '',
//     sender: '',
//     subject: '',
//     notes: '',
//     number: '',
//     date: '',
//     file: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, file: e.target.files[0] });
//   }; 
//   const existingRecords = JSON.parse(localStorage.getItem('records')) || [];
//     existingRecords.push(formData);
//       localStorage.setItem('records', JSON.stringify(existingRecords));

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // هنا يمكن أن تضيف الكود لإرسال البيانات إلى السيرفر أو تخزينها محليًا
    
//     console.log(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="create-record">
//       <div className="form-row">

//         <div className="form-group">
//           <label>جهة الارسال:</label>
//           <input type="text" name="sender" onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>الموضوع:</label>
//           <input type="text" name="subject" onChange={handleChange} required />
//         </div>
//         </div>
//         <div className="form-row">
//         <div className="form-group">
//           <label>العدد:</label>
//           <input type="text" name="number" onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>التاريخ:</label>
//           <input type="date" name="date" onChange={handleChange} required />
//         </div>
//         </div>
        
      
//         <div className="form-row">
//       <div className="form-group" >
//   <label >الأولوية:</label>
//   <select name="priority" onChange={handleChange} required width="50px">
//     <option value="">اختر الأولوية</option>
//     <option value="عاجل">عاجل</option>
//     <option value="سري">سري</option>
//     <option value="عاجل جدا">عاجل جدا</option>
//     <option value="عادي">عادي</option>
//   </select>
//   </div>
//         <div className="form-group">
//           <label>الملاحظات:</label>
//           <textarea name="notes" onChange={handleChange}></textarea>
//         </div>
      
//       </div>
//       <div className="form-row">
//       <div className="form-group">
//         <label>رفع ملف:</label>
//         <input type="file" onChange={handleFileChange} required />
//       </div>
//       <button type="submit">إنشاء</button>
//       </div>
      
//     </form>
//   );
// };

// export default CreateRecord;
//8
// import React, { useState } from 'react';
// import './CreateRecord.css';

// const CreateRecord = () => {
//   const [formData, setFormData] = useState({
//     id: '', // إضافة معرف
//     priority: '',
//     sender: '',
//     subject: '',
//     notes: '',
//     number: '',
//     date: '',
//     file: null,
//   });

//   const [message, setMessage] = useState(''); // حالة الرسالة

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, file: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // إضافة معرف فريد
//     const uniqueId = Date.now();
//     const newRecord = { ...formData, id: uniqueId };

//     // حفظ البيانات في localStorage
//     const existingRecords = JSON.parse(localStorage.getItem('records')) || [];
//     existingRecords.push(newRecord);
//     localStorage.setItem('records', JSON.stringify(existingRecords));

//     // عرض رسالة نجاح
//     setMessage('تم حفظ البيانات بنجاح!');

//     // تفريغ الحقول
//     setFormData({
//       id: '',
//       priority: '',
//       sender: '',
//       subject: '',
//       notes: '',
//       number: '',
//       date: '',
//       file: null,
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="create-record">

import React, { useState } from 'react';
import './CreateRecord.css';

const CreateRecord = () => {
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

    // استخدام FileReader لتحويل الملف إلى Base64
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, file: reader.result }); // تخزين البيانات في حالة النموذج
    };
    if (file) {
      reader.readAsDataURL(file); // تحويل الملف إلى Base64
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const uniqueId = Date.now();
    const newRecord = { ...formData, id: uniqueId };

    // منع تكرار السجلات
    const existingRecords = JSON.parse(localStorage.getItem('records')) || [];
    const isDuplicate = existingRecords.some(record => 
      record.date === formData.date && record.number === formData.number
    );

    if (isDuplicate) {
      setMessage('يوجد سجل بنفس التاريخ والعدد!');
      return;
    }

    existingRecords.push(newRecord);
    localStorage.setItem('records', JSON.stringify(existingRecords));
    
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
      
 
      {message && <div className="success-message">{message}</div>} {/* عرض الرسالة عند وجودها */}
      <h2 >الصادر</h2>
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

export default CreateRecord;
