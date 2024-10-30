// import React from 'react';
// import { useParams } from 'react-router-dom';
// import './RecordDetail.css';

// const RecordDetail = () => {
//   const { id } = useParams();
//   // هنا يجب استرجاع البيانات باستخدام المعرف id

//   return (
//     <div className="record-detail">
//       <h2>تفاصيل القيد: {id}</h2>
//       {/* هنا يجب عرض البيانات المفصلة مع ملف PDF */}
//     </div>
//   );
// };

// export default RecordDetail;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom'; // استيراد useParams
// import './RecordDetail.css';

// const RecordDetail = () => {
//   const { id } = useParams(); // الحصول على المعرف من URL
//   const [record, setRecord] = useState(null);

//   useEffect(() => {
//     const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
//     const selectedRecord = storedRecords[id]; // استرجاع القيد بناءً على المعرف
//     setRecord(selectedRecord);
//   }, [id]);

//   if (!record) return <div>تحميل البيانات...</div>; // عرض رسالة تحميل حتى يتم استرجاع البيانات

//   return (
//     <div className="record-detail-container">
//       <h2>تفاصيل القيد</h2>
//       <p><strong>الأولوية:</strong> {record.priority}</p>
//       <p><strong>جهة الصادر:</strong> {record.sender}</p>
//       <p><strong>الموضوع:</strong> {record.subject}</p>
//       <p><strong>الملاحظات:</strong> {record.notes}</p>
//       <p><strong>العدد:</strong> {record.number}</p>
//       <p><strong>التاريخ:</strong> {record.date}</p>
//       {/* عرض الملف إذا كان موجوداً */}
//       {record.file && (
//         <div>
//           <strong>الملف:</strong> <a href={URL.createObjectURL(record.file)} target="_blank" rel="noopener noreferrer">فتح الملف</a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RecordDetail;

// // 3
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './RecordDetail.css';

// const RecordDetail = () => {
//   const { id } = useParams();
//   const [record, setRecord] = useState(null);

//   useEffect(() => {
//     const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
//     const selectedRecord = storedRecords[id];
//     setRecord(selectedRecord);
//   }, [id]);

//   if (!record) return <div>تحميل البيانات...</div>;

//   return (
//     <div className="record-detail-container">
//       <h2>تفاصيل القيد</h2>
//       <p><strong>الأولوية:</strong> {record.priority}</p>
//       <p><strong>جهة الصادر:</strong> {record.sender}</p>
//       <p><strong>الموضوع:</strong> {record.subject}</p>
//       <p><strong>الملاحظات:</strong> {record.notes}</p>
//       <p><strong>العدد:</strong> {record.number}</p>
//       <p><strong>التاريخ:</strong> {record.date}</p>
//       {record.file && (
//         <div>
//           <strong>الملف:</strong> <a href={record.file} target="_blank" rel="noopener noreferrer">فتح الملف</a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RecordDetail;
// //4

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './RecordDetail.css';

// const RecordDetail = () => {
//   const { id } = useParams();
//   const [record, setRecord] = useState(null);

//   useEffect(() => {
//     const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
//     const selectedRecord = storedRecords[id];
//     setRecord(selectedRecord);
//   }, [id]);

//   if (!record) return <div>تحميل البيانات...</div>;

//   return (
//     <div className="record-detail-container">
//       <h2>تفاصيل القيد</h2>
//       <p><strong>الأولوية:</strong> {record.priority}</p>
//       <p><strong>جهة الصادر:</strong> {record.sender}</p>
//       <p><strong>الموضوع:</strong> {record.subject}</p>
//       <p><strong>الملاحظات:</strong> {record.notes}</p>
//       <p><strong>العدد:</strong> {record.number}</p>
//       <p><strong>التاريخ:</strong> {record.date}</p>

//       {record.file && (
//         <div>
//           <strong>الملف:</strong>
//           <iframe
//             src={record.file}
//             title="PDF Viewer"
//             width="100%"
//             height="600px"
//             style={{ border: 'none' }}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default RecordDetail;
//5
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import PdfViewer from './PdfViewer';
// import './RecordDetail.css';

// const RecordDetail = () => {
//   const { id } = useParams();
//   const [record, setRecord] = useState(null);

//   useEffect(() => {
//     const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
//     const selectedRecord = storedRecords[id];
//     setRecord(selectedRecord);
//   }, [id]);

//   if (!record) return <div>تحميل البيانات...</div>;

//   return (
//     <div className="record-detail-container">
//       <h2>تفاصيل القيد</h2>
//       <p><strong>الأولوية:</strong> {record.priority}</p>
//       <p><strong>جهة الصادر:</strong> {record.sender}</p>
//       <p><strong>الموضوع:</strong> {record.subject}</p>
//       <p><strong>الملاحظات:</strong> {record.notes}</p>
//       <p><strong>العدد:</strong> {record.number}</p>
//       <p><strong>التاريخ:</strong> {record.date}</p>

//       {record.file && (
//         <PdfViewer pdfUrl={record.file} /> 
//       )}
//     </div>
//   );
// };

// export default RecordDetail;

//6
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import PdfViewer from './PdfViewer';
// import './RecordDetail.css';

// const RecordDetail = () => {
//   const { id } = useParams();
//   const [record, setRecord] = useState(null);
//   const navigate = useNavigate(); // لاستخدام التنقل بين الصفحات

//   useEffect(() => {
//     const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
//     const selectedRecord = storedRecords[id];
//     setRecord(selectedRecord);
//   }, [id]);

//   const handleDelete = () => {
//     const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
//     storedRecords.splice(id, 1); // حذف السجل بناءً على المعرف
//     localStorage.setItem('records', JSON.stringify(storedRecords));
//     navigate('/datatablee'); // إعادة التوجيه إلى صفحة البيانات
//   };

//   const handleEdit = () => {
//     navigate(`/edit/${id}`); // التوجيه إلى صفحة التعديل (افترض أنك ستقوم بإنشائها)
//   };

//   const handleArchive = () => {
//     navigate(`/archive/${id}`); // التوجيه إلى صفحة الأرشيف
//   };

//   if (!record) return <div>تحميل البيانات...</div>;

//   return (
//     <div className="record-detail-container">
//       <h2>تفاصيل القيد</h2>
//       <p><strong>الأولوية:</strong> {record.priority}</p>
//       <p><strong>جهة الصادر:</strong> {record.sender}</p>
//       <p><strong>الموضوع:</strong> {record.subject}</p>
//       <p><strong>الملاحظات:</strong> {record.notes}</p>
//       <p><strong>العدد:</strong> {record.number}</p>
//       <p><strong>التاريخ:</strong> {record.date}</p>

//       {record.file && <PdfViewer pdfUrl={record.file} />}

//       <div className="record-detail-buttons">
//         <button onClick={handleEdit}>تعديل</button>
//         <button onClick={handleDelete}>حذف</button>
//         <button onClick={handleArchive}>أرشفة</button>
//       </div>
//     </div>
//   );
// };

// export default RecordDetail;

//7
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import PdfViewer from './PdfViewer';
// import './RecordDetail.css';

// const RecordDetail = () => {
//   const { id } = useParams();
//   const [record, setRecord] = useState(null);
//   const navigate = useNavigate(); // لاستخدام التنقل بين الصفحات

//   useEffect(() => {
//     const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
//     const selectedRecord = storedRecords[id];
//     setRecord(selectedRecord);
//   }, [id]);

//   const handleDelete = () => {
//     const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
//     storedRecords.splice(id, 1); // حذف السجل بناءً على المعرف
//     localStorage.setItem('records', JSON.stringify(storedRecords));
//     navigate('/datatablee'); // إعادة التوجيه إلى صفحة البيانات
//   };

//   const handleEdit = () => {
//     navigate(`/edit/${id}`); // التوجيه إلى صفحة التعديل
//   };

//   const handleArchive = () => {
//     const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
//     const archivedRecords = JSON.parse(localStorage.getItem('archivedRecords')) || [];

//     // إضافة السجل إلى الأرشيف
//     archivedRecords.push(storedRecords[id]);
//     localStorage.setItem('archivedRecords', JSON.stringify(archivedRecords));

//     // حذف السجل من السجلات الأساسية بعد الأرشفة
//     storedRecords.splice(id, 1);
//     localStorage.setItem('records', JSON.stringify(storedRecords));

//     alert('تم أرشفة السجل بنجاح!');
//     navigate('/archive'); // الانتقال إلى صفحة الأرشيف
//   };

//   if (!record) return <div>تحميل البيانات...</div>;

//   return (
//     <div className="record-detail-container">
//       <h2>تفاصيل القيد</h2>
//       <div>
//       <p><strong>الأولوية:</strong> {record.priority}</p>
//       <p><strong>جهة الصادر:</strong> {record.sender}</p>
//       <p><strong>الموضوع:</strong> {record.subject}</p>
//       <p><strong>الملاحظات:</strong> {record.notes}</p>
//       <p><strong>العدد:</strong> {record.number}</p>
//       <p><strong>التاريخ:</strong> {record.date}</p>
//       </div>
//       <div className="record-detail-buttons">
//         <button onClick={handleEdit}>تعديل</button>
//         <button onClick={handleDelete}>حذف</button>
//         <button onClick={handleArchive}>أرشفة</button>
//       </div>
//       <div>{record.file && <PdfViewer pdfUrl={record.file} />}
//       </div>

      
      
//     </div>
//   );
// };

// export default RecordDetail;
//9
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PdfViewer from './PdfViewer';
import './RecordDetail.css';

const RecordDetail = () => {
  const { id } = useParams();
  const [record, setRecord] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
    const selectedRecord = storedRecords[id];
    setRecord(selectedRecord);
  }, [id]);
  

  const handleDelete = () => {
    const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
    storedRecords.splice(id, 1);
    localStorage.setItem('records', JSON.stringify(storedRecords));
    navigate('/datatable');
  };

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleArchive = () => {
    const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
    const archivedRecords = JSON.parse(localStorage.getItem('archivedRecords')) || [];
    
    archivedRecords.push(storedRecords[id]);
    localStorage.setItem('archivedRecords', JSON.stringify(archivedRecords));

    storedRecords.splice(id, 1);
    localStorage.setItem('records', JSON.stringify(storedRecords));

    alert('تم أرشفة السجل بنجاح!');
    navigate('/archive');
  };
  const handleBackClick= ()=>{
    navigate(-1);
  }

  if (!record) return <div>تحميل البيانات...</div>;

  return (
    <div className="record-detail-container" style={{ direction: 'rtl' }}>
      <div className ="row">
      <h2>الصادر</h2>
      <div className="record-detail-buttons">
            <button onClick={handleEdit}>تعديل</button>
            <button onClick={handleDelete}>حذف</button>
            <button onClick={handleArchive}>أرشفة</button>
          </div>
          </div>

      <div className="record-details">
        <div className="record-info">
          
          <p><strong>الأولوية:</strong> <span className="record-value1">{record.priority}</span></p>
          <p><strong>جهة الإرسال:</strong> <span className="record-value2">{record.sender}</span></p>
          <p><strong>الموضوع:</strong> <span className="record-value3">{record.subject}</span></p>
          <p><strong>الملاحظات:</strong> <span className="record-value4">{record.notes}</span></p>
          <p><strong>العدد:</strong> <span className="record-value5">{record.number}</span></p>
          <p><strong>التاريخ:</strong> <span className="record-value6">{record.date}</span></p>
          
            <button className="back-button" onClick={handleBackClick}>الــــرجوع </button>
         
        </div>
       
        <div className="pdf-viewer">
        
          {record.file && <PdfViewer pdfUrl={record.file} />}
        </div>
      </div>
    </div>
  );
};

export default RecordDetail;


