// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import './WaredRecDetail.css';
// import PdfViewer from './PdfViewer';


// const WaredRecDetail = () => {
//   const location = useLocation();
//   const { record } = location.state || {}; // استرجاع السجل من الحالة
//   const navigate = useNavigate();


//   if (!record) {
//     return <p>لا توجد بيانات لعرضها.</p>;
//   }
  

//   // const [formData, setFormData] = useState({ ...record });

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData((prevData) => ({
//   //     ...prevData,
//   //     [name]: value,
//   //   }));
//   // };
//   // const handleFileChange = (e) => {
//   //   const file = e.target.files[0];

//   //   // استخدام FileReader لتحويل الملف إلى Base64
//   //   const reader = new FileReader();
//   //   reader.onloadend = () => {
//   //     setFormData({ ...formData, file: reader.result }); // تخزين البيانات في حالة النموذج
//   //   };
//   //   if (file) {
//   //     reader.readAsDataURL(file); // تحويل الملف إلى Base64
//   //   }
//   // };
// //   const PdfViewer = ({ pdfUrl }) => {
// //     return (
// //         <div>
           
// //             <iframe
// //                 src={pdfUrl}
// //                 style={{ width: '370px', height: '400px' }}
// //                 title="PDF Viewer"
// //                 frameBorder="0"
// //             />
// //         </div>
// //     );
// // };

//   const handleDelete = () => {
//     if (window.confirm('هل تريد حذف هذا السجل؟')) {
//       // هنا يمكنك إضافة منطق لحذف السجل
//       alert('تم حذف السجل!');
//       navigate('/tabwared'); // العودة إلى صفحة البيانات
//     }
//   };

//   const handleArchive = () => {
//     // هنا يمكنك إضافة منطق للأرشفة
//     alert('تم أرشفة السجل بنجاح!');
//     navigate('/tabwared'); // العودة إلى صفحة البيانات
//   };

//   const handleEdit = (e) => {
//     e.preventDefault();
//     // هنا يمكنك إضافة منطق لتحديث السجل
//     alert('تم تعديل السجل بنجاح!');
//     navigate('/tabwared'); // العودة إلى صفحة البيانات
//   };

//   const handleBackClick = () => {
//     navigate(-1);
//   };

//   return (
//     <div className="record-detail" style={{ direction: 'rtl' }}>
//       <div className="row">
//         <h2>الصادر</h2>
//         <div className="record-detail-buttons">
//           <button onClick={handleEdit}>تعديل</button>
//           <button onClick={handleDelete}>حذف</button>
//           <button onClick={handleArchive}>أرشفة</button>
//         </div>
//       </div>

//       <div className="record-details">
//         <div className="record-info">
//           <p><strong>الأولوية:</strong> <span className="record-value1">{record.priority}</span></p>
//           <p><strong>جهة الإرسال:</strong> <span className="record-value2">{record.sender}</span></p>
//           <p><strong>الموضوع:</strong> <span className="record-value3">{record.subject}</span></p>
//           <p><strong>الملاحظات:</strong> <span className="record-value4">{record.notes}</span></p>
//           <p><strong>العدد:</strong> <span className="record-value5">{record.number}</span></p>
//           <p><strong>التاريخ:</strong> <span className="record-value6">{record.date}</span></p>
//           <button className="back-button" onClick={handleBackClick}>الــــرجوع </button>
//         </div>

      
//         <div className="pdf-viewer">
//           {/* استخدم record.file هنا لعرض PDF */}
//           {record.file && <PdfViewer pdfUrl={record.file} />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WaredRecDetail;


//
import { useNavigate, useLocation } from 'react-router-dom';
import './WaredRecDetail.css';
import PdfViewer from './PdfViewer';

const WaredRecDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { record } = location.state || {};

  if (!record) {
    return <p>لا توجد بيانات لعرضها.</p>;
  }

  const handleDelete = () => {
    if (window.confirm('هل تريد حذف هذا السجل؟')) {
      // منطق حذف السجل هنا
      alert('تم حذف السجل!'); 
      navigate('/tabwared'); // العودة إلى صفحة البيانات
    }
  };

  const handleArchive = () => {
    // منطق الأرشفة هنا
    alert('تم أرشفة السجل بنجاح!'); 
    navigate('/tabwared'); // العودة إلى صفحة البيانات
  };

  const handleEdit = (e) => {
    e.preventDefault();
    // منطق تعديل السجل هنا
    alert('تم تعديل السجل بنجاح!'); 
    navigate('/tabwared'); // العودة إلى صفحة البيانات
  };

  return (
    <div className="record-detail" style={{ direction: 'rtl' }}>
      <div className="row">
        <h2>تفاصيل السجل</h2>
        <div className="record-detail-buttons">
          <button onClick={handleEdit}>تعديل</button>
          <button onClick={handleDelete}>حذف</button>
          <button onClick={handleArchive}>أرشفة</button>
        </div>
      </div>

      <div className="record-details">
        <div className="record-info">
          <p><strong>الأولوية:</strong> {record.priority}</p>
          <p><strong>جهة الإرسال:</strong> {record.sender}</p>
          <p><strong>الموضوع:</strong> {record.subject}</p>
          <p><strong>الملاحظات:</strong> {record.notes}</p>
          <p><strong>العدد:</strong> {record.number}</p>
          <p><strong>التاريخ:</strong> {record.date}</p>
          <button className="back-button" onClick={() => navigate(-1)}>الــــرجوع</button>
        </div>

        <div className="pdf-viewer">
          {record.file && <PdfViewer pdfUrl={record.file} />}
        </div>
      </div>
    </div>
  );
};

export default WaredRecDetail;
