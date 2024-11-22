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

// import React, { useEffect, useState } from 'react';
// import { useParams ,useNavigate} from 'react-router-dom';
// import './ArchiveDetail.css'; // تأكد من إضافة ملف CSS للتنسيق
// import PdfViewer from './PdfViewer';

// const ArchiveDetail = () => {
//   const { id } = useParams(); // الحصول على معرف السجل
//   const [record, setRecord] = useState(null);
//   const navigate = useNavigate();

 
//   useEffect(() => {
//     const archivedRecords = JSON.parse(localStorage.getItem('archivedRecords')) || [];
//     const selectedRecord = archivedRecords[id]; // استرجاع السجل بناءً على المعرف
//     setRecord(selectedRecord);
//   }, [id]);
//   const handleBackClick= ()=>{
//     navigate(-1);
//   }
//   if (!record) return <div>تحميل البيانات...</div>;

//   return (
//     <div className="archive-detail-container">
      
//       <div className="record-details">
//         <div className="record-info">
      
//       <h2>تفاصيل السجل المؤرشف</h2>
//       <p><strong>الأولوية:</strong> <span className="record-value1">{record.priority}</span></p>
//           <p><strong>جهة الإرسال:</strong> <span className="record-value2">{record.sender}</span></p>
//           <p><strong>الموضوع:</strong> <span className="record-value3">{record.subject}</span></p>
//           <p><strong>الملاحظات:</strong> <span className="record-value4">{record.notes}</span></p>
//           <p><strong>العدد:</strong> <span className="record-value5">{record.number}</span></p>
//           <p><strong>التاريخ:</strong> <span className="record-value6">{record.date}</span></p>
          
//           <button className="back-button" onClick={handleBackClick}>الــــرجوع </button>
      
    
     
//       </div>
//       <div className="pdf-viewer">
//       {record.file && <PdfViewer pdfUrl={record.file} />}
//       </div>
//     </div>
//     </div>
    
//   );
// };

// export default ArchiveDetail;
//swager

// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './ArchiveDetail.css'; // تأكد من إضافة ملف CSS للتنسيق
// import PdfViewer from './PdfViewer';

// const ArchiveDetail = () => {
//   const { id } = useParams(); // الحصول على معرف السجل
//   const [record, setRecord] = useState(null);
//   const [loading, setLoading] = useState(true); // حالة تحميل
//   const navigate = useNavigate();

//   useEffect(() => {
//     const archivedRecords = JSON.parse(localStorage.getItem('archivedRecords')) || [];
//     if (archivedRecords[id]) {
//       setRecord(archivedRecords[id]); // استرجاع السجل بناءً على المعرف
//     } else {
//       alert('لم يتم العثور على السجل.');
//     }
//     setLoading(false); // تغيير حالة التحميل
//   }, [id]);

//   const handleBackClick = () => {
//     navigate(-1);
//   };

//   if (loading) return <div>تحميل البيانات...</div>;
//   if (!record) return <div>لا توجد بيانات لعرضها.</div>;

//   return (
//     <div className="archive-detail-container">
//       <h2>تفاصيل السجل المؤرشف</h2>
//       <div className="record-details">
//         <div className="record-info">
//           <p><strong>الأولوية:</strong> <span className="record-value1">{record.priority}</span></p>
//           <p><strong>جهة الإرسال:</strong> <span className="record-value2">{record.sender}</span></p>
//           <p><strong>الموضوع:</strong> <span className="record-value3">{record.subject}</span></p>
//           <p><strong>الملاحظات:</strong> <span className="record-value4">{record.notes}</span></p>
//           <p><strong>العدد:</strong> <span className="record-value5">{record.number}</span></p>
//           <p><strong>التاريخ:</strong> <span className="record-value6">{record.date}</span></p>
//           <button className="back-button" onClick={handleBackClick}>الــــرجوع</button>
//         </div>
//         <div className="pdf-viewer">
//           {record.file && <PdfViewer pdfUrl={record.file} />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArchiveDetail;

//
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios'; // إضافة axios
// import './ArchiveDetail.css'; // تأكد من إضافة ملف CSS للتنسيق
// import PdfViewer from './PdfViewer';

// const ArchiveDetail = () => {
//   const { id } = useParams(); // الحصول على معرف السجل
//   const [record, setRecord] = useState(null);
//   const [loading, setLoading] = useState(true); // حالة تحميل
//   const [error, setError] = useState(null); // حالة الخطأ
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchRecord = async () => {
//       try {
//         const response = await axios.get(`https://mary.pythonanywhere.com/archive/${id}/`,{ // استرجاع السجل من API
//         headers: {
//           accept: 'application/json',
//         },
//       });
//         setRecord(response.data); // تعيين السجل المسترجع
        
//       } catch (error) {
//         console.error('Error fetching record:', error);
//         setError('لم يتم العثور على السجل.'); // تعيين رسالة الخطأ
//       } finally {
//         setLoading(false); // تغيير حالة التحميل
//       }
//     };

  


//     fetchRecord();
//   }, [id]);

//   const handleBackClick = () => {
//     navigate(-1);
//   };

//   if (loading) return <div>تحميل البيانات...</div>;
//   if (error) return <div>{error}</div>; // عرض رسالة الخطأ
//   if (!record) return <div>لا توجد بيانات لعرضها.</div>;

//   return (
//     <div className="archive-detail-container">
//       <h2>تفاصيل السجل المؤرشف</h2>
//       <div className="record-details">
//         <div className="record-info">
//           <p><strong>الأولوية:</strong> <span className="record-value1">{record.priority}</span></p>
//           <p><strong>جهة الإرسال:</strong> <span className="record-value2">{record.sender}</span></p>
//           <p><strong>الموضوع:</strong> <span className="record-value3">{record.subject}</span></p>
//           <p><strong>الملاحظات:</strong> <span className="record-value4">{record.notes}</span></p>
//           <p><strong>العدد:</strong> <span className="record-value5">{record.number}</span></p>
//           <p><strong>التاريخ:</strong> <span className="record-value6">{record.date}</span></p>
//           <button className="back-button" onClick={handleBackClick}>الــــرجوع</button>
//         </div>
//         <div className="pdf-viewer">
//           {record.file && <PdfViewer pdfUrl={record.file} />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArchiveDetail;
//

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ArchiveDetail.css';
import PdfViewer from './PdfViewer';

const ArchiveDetail = () => {
  const { id } = useParams(); // استرجاع المعرف من الرابط
  const [record, setRecord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecord = async () => {
      if (!id) {
        setError('معرف السجل غير متوفر.');
        setLoading(false);
        return;
      }
    
      try {
        const response = await axios.get(`https://mary.pythonanywhere.com/archive/${id}/`, {
          headers: {
            accept: 'application/json',
          },
        });
        setRecord(response.data);
      } catch (error) {
        console.error('Error fetching record:', error);
        setError('حدث خطأ أثناء تحميل البيانات.');
      } finally {
        setLoading(false);
      }
    };
    

    fetchRecord();
  }, [id]);

  const handleBackClick = () => {
    navigate(-1);
  };

  if (loading) return <div>تحميل البيانات...</div>;
  if (error) return <div>{error}</div>; 
  if (!record) return <div>لا توجد بيانات لعرضها.</div>;

  return (
    <div className="archive-detail-container">
      <h2>تفاصيل السجل المؤرشف</h2>
      <div className="record-details">
        <div className="record-info">
          <p><strong>الأولوية:</strong> <span className="record-value1">{record.urgency}</span></p>
          <p><strong>جهة الإرسال:</strong> <span className="record-value2">{record.sender}</span></p>
          <p><strong>الموضوع:</strong> <span className="record-value3">{record.title}</span></p>
          <p><strong>الملاحظات:</strong> <span className="record-value4">{record.notes}</span></p>
          <p><strong>العدد:</strong> <span className="record-value5">{record.number}</span></p>
          <p><strong>التاريخ:</strong> <span className="record-value6">{record.date}</span></p>
          <button className="back-button" onClick={handleBackClick}>الــــرجوع</button>
        </div>
        <div className="pdf-viewer">
          {record.file && <PdfViewer pdfUrl={record.file} />}
        </div>
      </div>
    </div>
  );
};

export default ArchiveDetail;
