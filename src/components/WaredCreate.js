

// import React, { useState } from 'react';

// const WaredCreate = ({ addRecord }) => {
//   const [formData, setFormData] = useState({
//     id: '1',
//     priority: 'سري',
//     sender: 'وزارة الصحة',
//     subject: 'لقاح',
//     notes: 'منطقة الكرخ',
//     number: '345',
//     date: '10/30/2024',
//     file: null,
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       setFormData({ ...formData, file: reader.result });
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newRecord = { ...formData, id: Date.now() }; 

//     if (typeof addRecord === 'function') {
//       addRecord(newRecord);
//     } else {
//       console.error('addRecord is not a function');
//     }

//     // إعادة تعيين النموذج
//     setFormData({
//       id: '1',
//       priority: 'سري',
//       sender: 'وزارة الصحة',
//       subject: 'لقاح',
//       notes: 'منطقة الكرخ',
//       number: '345',
//       date: '10/30/2024',
//       file: null,
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="create-record">
//       <h2>إنشاء سجل وارد</h2>
//       <div className="form-row">
//         <div className="form-group">
//           <label>جهة الارسال:</label>
//           <input type="text" name="sender" value={formData.sender} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>الموضوع:</label>
//           <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
//         </div>
//       </div>
//       <div className="form-row">
//         <div className="form-group">
//           <label>العدد:</label>
//           <input type="text" name="number" value={formData.number} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>التاريخ:</label>
//           <input type="date" name="date" value={formData.date} onChange={handleChange} required />
//         </div>
//       </div>
//       <div className="form-row">
//         <div className="form-group">
//           <label>الأولوية:</label>
//           <select name="priority" value={formData.priority} onChange={handleChange} required>
//             <option value="عاجل">عاجل</option>
//             <option value="سري">سري</option>
//             <option value="عاجل جدا">عاجل جدا</option>
//             <option value="عادي">عادي</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>الملاحظات:</label>
//           <textarea name="notes" value={formData.notes} onChange={handleChange}></textarea>
//         </div>
//       </div>
//       <div className="form-row">
//       <div className="form-group-file">
//           <label>رفع ملف:</label>
//           <input type="file" onChange={handleFileChange} />
//         </div>
//         <button type="submit">إنشاء</button>
//       </div>
//     </form>
//   );
// };

// export default WaredCreate;
// 24/11/2024
import React, { useState } from 'react';

const WaredCreate = ({ addRecord }) => {
  const [formData, setFormData] = useState({
    id: '1',
    priority: 'سري',
    sender: 'وزارة الصحة',
    subject: 'لقاح',
    notes: 'منطقة الكرخ',
    number: '345',
    date: '10/30/2024',
    file: null,
  });

  // التعامل مع التغييرات في الحقول
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // التعامل مع رفع الملف
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

  // التعامل مع تقديم النموذج
  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...formData, id: Date.now() }; // استخدام timestamp كمعرف فريد

    // إضافة السجل إلى localStorage
    const records = JSON.parse(localStorage.getItem('records')) || []; // الحصول على السجلات الحالية أو تعيين مصفوفة فارغة
    records.push(newRecord); // إضافة السجل الجديد
    localStorage.setItem('records', JSON.stringify(records)); // تخزين السجلات في localStorage

    // إضافة السجل باستخدام الدالة addRecord إذا كانت موجودة
    if (typeof addRecord === 'function') {
      addRecord(newRecord);
    } else {
      console.error('addRecord is not a function');
    }

    // مسح البيانات في النموذج بعد تقديمه
    setFormData({
      id: '1',
      priority: 'سري',
      sender: 'وزارة الصحة',
      subject: 'لقاح',
      notes: 'منطقة الكرخ',
      number: '345',
      date: '10/30/2024',
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
        <div className="form-group-file">
          <label>رفع ملف:</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <button type="submit">إنشاء</button>
      </div>
    </form>
  );
};

export default WaredCreate;
