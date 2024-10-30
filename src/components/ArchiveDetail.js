// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './ArchiveDetail.css'; // تأكد من إضافة ملف CSS للتنسيق
// import PdfViewer from './PdfViewer';
// const ArchiveDetail = () => {
//   const { id } = useParams(); // الحصول على معرف السجل
//   const [record, setRecord] = useState(null);

//   useEffect(() => {
//     const archivedRecords = JSON.parse(localStorage.getItem('archivedRecords')) || [];
//     const selectedRecord = archivedRecords[id]; // استرجاع السجل بناءً على المعرف
//     setRecord(selectedRecord);
//   }, [id]);

//   if (!record) return <div>تحميل البيانات...</div>;

//   return (
//     <div className="archive-detail-container">
//       <h2>تفاصيل السجل المؤرشف</h2>
//       <p><strong>الأولوية:</strong> {record.priority}</p>
//       <p><strong>جهة الصادر:</strong> {record.sender}</p>
//       <p><strong>الموضوع:</strong> {record.subject}</p>
//       <p><strong>الملاحظات:</strong> {record.notes}</p>
//       <p><strong>العدد:</strong> {record.number}</p>
//       <p><strong>التاريخ:</strong> {record.date}</p>
      
//       {record.file && <PdfViewer pdfUrl={record.file} />}
//     </div>
//   );
// };

// export default ArchiveDetail;
//2

import React, { useEffect, useState } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import './ArchiveDetail.css'; // تأكد من إضافة ملف CSS للتنسيق
import PdfViewer from './PdfViewer';

const ArchiveDetail = () => {
  const { id } = useParams(); // الحصول على معرف السجل
  const [record, setRecord] = useState(null);
  const navigate = useNavigate();

 
  useEffect(() => {
    const archivedRecords = JSON.parse(localStorage.getItem('archivedRecords')) || [];
    const selectedRecord = archivedRecords[id]; // استرجاع السجل بناءً على المعرف
    setRecord(selectedRecord);
  }, [id]);
  const handleBackClick= ()=>{
    navigate(-1);
  }
  if (!record) return <div>تحميل البيانات...</div>;

  return (
    <div className="archive-detail-container">
      
      <div className="record-details">
        <div className="record-info">
      
      <h2>تفاصيل السجل المؤرشف</h2>
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

export default ArchiveDetail;
