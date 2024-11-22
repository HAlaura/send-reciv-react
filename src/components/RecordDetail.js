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
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import PdfViewer from './PdfViewer';
// import './RecordDetail.css';

// const RecordDetail = () => {
//   const { id } = useParams();
//   const [record, setRecord] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
//     const selectedRecord = storedRecords[id];
//     setRecord(selectedRecord);
//   }, [id]);
  

//   const handleDelete = () => {
//     const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
//     storedRecords.splice(id, 1);
//     localStorage.setItem('records', JSON.stringify(storedRecords));
//     navigate('/datatable');
//   };

//   const handleEdit = () => {
//     navigate(`/edit/${id}`);
//   };

//   const handleArchive = () => {
//     const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
//     const archivedRecords = JSON.parse(localStorage.getItem('archivedRecords')) || [];
    
//     archivedRecords.push(storedRecords[id]);
//     localStorage.setItem('archivedRecords', JSON.stringify(archivedRecords));

//     storedRecords.splice(id, 1);
//     localStorage.setItem('records', JSON.stringify(storedRecords));

//     alert('تم أرشفة السجل بنجاح!');
//     navigate('/archive');
//   };
//   const handleBackClick= ()=>{
//     navigate(-1);
//   }

//   if (!record) return <div>تحميل البيانات...</div>;

//   return (
//     <div className="record-detail-container" style={{ direction: 'rtl' }}>
//       <div className ="row">
//       <h2>الصادر</h2>
//       <div className="record-detail-buttons">
//             <button onClick={handleEdit}>تعديل</button>
//             <button onClick={handleDelete}>حذف</button>
//             <button onClick={handleArchive}>أرشفة</button>
//           </div>
//           </div>

//       <div className="record-details">
//         <div className="record-info">
          
//           <p><strong>الأولوية:</strong> <span className="record-value1">{record.priority}</span></p>
//           <p><strong>جهة الإرسال:</strong> <span className="record-value2">{record.sender}</span></p>
//           <p><strong>الموضوع:</strong> <span className="record-value3">{record.subject}</span></p>
//           <p><strong>الملاحظات:</strong> <span className="record-value4">{record.notes}</span></p>
//           <p><strong>العدد:</strong> <span className="record-value5">{record.number}</span></p>
//           <p><strong>التاريخ:</strong> <span className="record-value6">{record.date}</span></p>
          
//             <button className="back-button" onClick={handleBackClick}>الــــرجوع </button>
         
//         </div>
       
//         <div className="pdf-viewer">
        
//           {record.file && <PdfViewer pdfUrl={record.file} />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecordDetail;


//swager
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import PdfViewer from './PdfViewer';
// import './RecordDetail.css';

// const RecordDetail = () => {
//   const { id } = useParams();
//   const [record, setRecord] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchRecord = async () => {
//       try {
//         const response = await axios.get(`https://mary.pythonanywhere.com/incomings/${id}/`, {
//           headers: {
//             accept: 'application/json'
//           }
//         });
//         setRecord(response.data);
//       } catch (error) {
//         console.error('Error fetching record:', error);
//       }
//     };

//     fetchRecord();
//   }, [id]);

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`https://mary.pythonanywhere.com/incomings/${id}/`);
//       navigate('/datatable');
//     } catch (error) {
//       console.error('Error deleting record:', error);
//     }
//   };

//   const handleEdit = () => {
//     navigate(`/edit/${id}`);
//   };

  // const handleArchive = async () => {
  //   try {
  //     // افترض أن هناك API للأرشفة
  //     await axios.post(`https://mary.pythonanywhere.com/archive/`, { id });
  //     alert('تم أرشفة السجل بنجاح!');
  //     navigate('/archive');
  //   } catch (error) {
  //     console.error('Error archiving record:', error);
  //   }
  // };

//   const handleBackClick = () => {
//     navigate(-1);
//   };

//   if (!record) return <div>تحميل البيانات...</div>;

//   return (
//     <div className="record-detail-container" style={{ direction: 'rtl' }}>
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
//           <p><strong>الأولوية:</strong> <span className="record-value1">{record.urgency}</span></p>
//           <p><strong>جهة الإرسال:</strong> <span className="record-value2">{record.sender}</span></p>
//           <p><strong>الموضوع:</strong> <span className="record-value3">{record.title}</span></p>
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

// // export default RecordDetail;
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import PdfViewer from './PdfViewer';
// import './RecordDetail.css';

// const RecordDetail = () => {
//   const { id } = useParams();
//   const [record, setRecord] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [updatedRecord, setUpdatedRecord] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchRecord = async () => {
//       try {
//         const response = await axios.get(`https://mary.pythonanywhere.com/incomings/${id}/`, {
//           headers: {
//             accept: 'application/json'
//           }
//         });
//         setRecord(response.data);
//         setUpdatedRecord(response.data); // إعداد بيانات السجل للتحديث
//       } catch (error) {
//         console.error('Error fetching record:', error);
//       }
//     };

//     fetchRecord();
//   }, [id]);

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`https://mary.pythonanywhere.com/incomings/${id}/`);
//       navigate('/datatable');
//     } catch (error) {
//       console.error('Error deleting record:', error);
//     }
//   };

//   const handleEdit = () => {
//     setIsEditing(true); // تفعيل وضع التعديل
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedRecord({ ...updatedRecord, [name]: value }); // تحديث بيانات السجل المعدلة
//   };

//   const handleUpdate = async () => {
//     try {
//       await axios.put(`https://mary.pythonanywhere.com/incomings/${id}/`, updatedRecord);
//       alert('تم تحديث السجل بنجاح!');
//       setIsEditing(false); // إيقاف وضع التعديل
//     } catch (error) {
//       console.error('Error updating record:', error);
//     }
//   };

  // const handleArchive = async () => {
  //   try {
  //     await axios.post(`https://mary.pythonanywhere.com/archive/`, { id });
  //     alert('تم أرشفة السجل بنجاح!');
  //     navigate('/archive');
  //   } catch (error) {
  //     console.error('Error archiving record:', error);
  //   }
  // };

//   const handleBackClick = () => {
//     navigate(-1);
//   };

//   if (!record) return <div>تحميل البيانات...</div>;

//   return (
//     <div className="record-detail-container" style={{ direction: 'rtl' }}>
//       <div className="row">
//         <h2>الصادر</h2>
//         <div className="record-detail-buttons">
//           {isEditing ? (
//             <>
//               <button onClick={handleUpdate}>حفظ التعديلات</button>
//               <button onClick={() => setIsEditing(false)}>إلغاء</button>
//             </>
//           ) : (
//             <>
//               <button onClick={handleEdit}>تعديل</button>
//               <button onClick={handleDelete}>حذف</button>
//               <button onClick={handleArchive}>أرشفة</button>
//             </>
//           )}
//         </div>
//       </div>

//       <div className="record-details">
//         <div className="record-info">
//           {isEditing ? (
//             <>
//               <input
//                 type="text"
//                 name="urgency"
//                 value={updatedRecord.urgency}
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="sender"
//                 value={updatedRecord.sender}
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="title"
//                 value={updatedRecord.title}
//                 onChange={handleInputChange}
//               />
//               <textarea
//                 name="notes"
//                 value={updatedRecord.notes}
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="number"
//                 value={updatedRecord.number}
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="date"
//                 name="date"
//                 value={updatedRecord.date}
//                 onChange={handleInputChange}
//               />
//             </>
//           ) : (
//             <>
//               <p><strong>الأولوية:</strong> <span className="record-value1">{record.urgency}</span></p>
//               <p><strong>جهة الإرسال:</strong> <span className="record-value2">{record.sender}</span></p>
//               <p><strong>الموضوع:</strong> <span className="record-value3">{record.title}</span></p>
//               <p><strong>الملاحظات:</strong> <span className="record-value4">{record.notes}</span></p>
//               <p><strong>العدد:</strong> <span className="record-value5">{record.number}</span></p>
//               <p><strong>التاريخ:</strong> <span className="record-value6">{record.date}</span></p>
//             </>
//           )}
          
//           <button className="back-button" onClick={handleBackClick}>الــــرجوع</button>
//         </div>

//         <div className="pdf-viewer">
//           {record.file && <PdfViewer pdfUrl={record.file} />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecordDetail;
// archive
// maching

// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import PdfViewer from './PdfViewer';
// import './RecordDetail.css';

// const RecordDetail = () => {
  
//   const { id } = useParams();
//   const [record, setRecord] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [updatedRecord, setUpdatedRecord] = useState({});
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();
//   // const [error, setError] = useState(''); // تأكد من تعريف setError هنا


//   useEffect(() => {
//     const fetchRecord = async () => {
//       try {
//         const response = await axios.get(`https://mary.pythonanywhere.com/outgoings/${id}/`, {
//           headers: {
//             accept: 'application/json',
//           },
//         });
//         setRecord(response.data);
//         setUpdatedRecord(response.data);
//       } catch (error) {
//         console.error('Error fetching record:', error);
//         setMessage('حدث خطأ أثناء تحميل البيانات.');
//       }
//     };

//     fetchRecord();
//   }, [id]);

//   const handleDelete = async () => {
//     if (window.confirm('هل تريد حذف هذا السجل؟')) {
//       try {
//         await axios.delete(`https://mary.pythonanywhere.com/outgoings/${id}/`, {
//           headers: {
//             'accept': '*/*',
//           },
//         });
//         setMessage('تم حذف السجل بنجاح!');
//         navigate('/datatable'); // إعادة التوجيه إلى صفحة البيانات
//       } catch (error) {
//         console.error('Error deleting record:', error);
//         setMessage('حدث خطأ أثناء حذف السجل.');
//       }
//     }
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//     navigate(`/edit/${id}`);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedRecord({ ...updatedRecord, [name]: value });
//   };

//   const handleUpdate = async () => {
//     try {
//       await axios.put(`https://mary.pythonanywhere.com/outgoings/${id}/`, updatedRecord);
//       setMessage('تم تحديث السجل بنجاح!');
//       setIsEditing(false);
//     } catch (error) {
//       console.error('Error updating record:', error);
//       setMessage('حدث خطأ أثناء تحديث السجل.');
//     }
//   };

  
//   const handleArchive = async () => {
//     try {
//       const response = await axios.post(`https://mary.pythonanywhere.com/archive/${outgoingId}/`, { id });

  
//       console.log('Response:', response); // طباعة الاستجابة لتفاصيل أكثر
//       if (response.status === 201) {
//         alert('تم أرشفة السجل بنجاح!');
//         navigate('/archive');
//       } else {
//         setMessage('فشل في أرشفة السجل. حاول مرة أخرى.');
//       }
//     } catch (error) {
//       console.error('Error archiving record:', error);
//       if (error.response) {
//         // إذا كانت هناك استجابة من الخادم
//         setMessage(`حدث خطأ: ${error.response.status} - ${error.response.data}`);
//       } else {
//         setMessage('حدث خطأ أثناء أرشفة السجل.');
//       }
//     }
//   };
  
//   const handleBackClick = () => {
//     navigate(-1);
//   };
  
//   if (!record) return <div>تحميل البيانات...</div>;

//   return (
//     <div className="record-detail-container" style={{ direction: 'rtl' }}>
//       <div className="row">
//         <h2>الصادر</h2>
        
//         <div className="record-detail-buttons">
//           {isEditing ? (
//             <>
//               <button onClick={handleUpdate}>حفظ التعديلات</button>
//               <button onClick={() => setIsEditing(false)}>إلغاء</button>
//             </>
//           ) : (
//             <>
//               <button onClick={handleEdit}>تعديل</button>
//               <button onClick={handleDelete}>حذف</button>
//               <button onClick={handleArchive}>أرشفة</button>
              
//             </>
//           )}
//         </div>
//       </div>

//       {message && <div className="message">{message}</div>}

//       <div className="record-details">
//         <div className="record-info">
//           {isEditing ? (
//             <>
//               <input
//                 type="text"
//                 name="urgency"
//                 value={updatedRecord.urgency}
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="sender"
//                 value={updatedRecord.sender}
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="title"
//                 value={updatedRecord.title}
//                 onChange={handleInputChange}
//               />
//               <textarea
//                 name="notes"
//                 value={updatedRecord.notes}
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="number"
//                 value={updatedRecord.number}
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="date"
//                 name="date"
//                 value={updatedRecord.date}
//                 onChange={handleInputChange}
//               />
//             </>
//           ) : (
//             <>
//               <p><strong>الأولوية:</strong> <span className="record-value1">{record.urgency}</span></p>
//               <p><strong>جهة الإرسال:</strong> <span className="record-value2">{record.sender}</span></p>
//               <p><strong>الموضوع:</strong> <span className="record-value3">{record.title}</span></p>
//               <p><strong>الملاحظات:</strong> <span className="record-value4">{record.notes}</span></p>
//               <p><strong>العدد:</strong> <span className="record-value5">{record.number}</span></p>
//               <p><strong>التاريخ:</strong> <span className="record-value6">{record.date}</span></p>
//             </>
//           )}
          
//           <button className="back-button" onClick={handleBackClick}>الــــرجوع</button>
//         </div>

//         <div className="pdf-viewer">
//           {record.file && <PdfViewer pdfUrl={record.file} />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecordDetail;
// gouingid
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PdfViewer from './PdfViewer';
import './RecordDetail.css';

const RecordDetail = () => {
  const { id } = useParams(); // هذا هو id الخاص بالسجل
  const [record, setRecord] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedRecord, setUpdatedRecord] = useState({});
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // تعيين outgoingId باستخدام id
  const outgoingId = id;

  useEffect(() => {
    const fetchRecord = async () => {
      try {
        const response = await axios.get(`https://mary.pythonanywhere.com/outgoings/${id}/`, {
          headers: {
            accept: 'application/json',
          },
        });
        setRecord(response.data);
        setUpdatedRecord(response.data);
      } catch (error) {
        console.error('Error fetching record:', error);
        setMessage('حدث خطأ أثناء تحميل البيانات.');
      }
    };

    fetchRecord();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('هل تريد حذف هذا السجل؟')) {
      try {
        await axios.delete(`https://mary.pythonanywhere.com/outgoings/${id}/`, {
          headers: {
            'accept': '*/*',
          },
        });
        setMessage('تم حذف السجل بنجاح!');
        navigate('/datatable'); // إعادة التوجيه إلى صفحة البيانات
      } catch (error) {
        console.error('Error deleting record:', error);
        setMessage('حدث خطأ أثناء حذف السجل.');
      }
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    navigate(`/edit/${id}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRecord({ ...updatedRecord, [name]: value });
  };
  function translateUrgency(urgency) {
    switch(urgency) {
      case 'very urgent':
        return 'عاجل جدا';
        case 'urgent':
          return 'عاجل';
          case 'normal':
        return 'عادي';
        case 'secret':
        return 'سري';

      default:
        return urgency;  // إذا كانت القيمة غير معروفة أو غير محددة
    }
  }
  const handleUpdate = async () => {
    try {
      await axios.put(`https://mary.pythonanywhere.com/outgoings/${id}/`, updatedRecord);
      setMessage('تم تحديث السجل بنجاح!');
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating record:', error);
      setMessage('حدث خطأ أثناء تحديث السجل.');
    }
  };

  // const handleArchive = async () => {
  //   try {
  //     const response = await axios.post(`https://mary.pythonanywhere.com/archive/${outgoingId}/`, { id });
  //     console.log('Response:', response); // طباعة الاستجابة لتفاصيل أكثر
  //     if (response.status === 201) {
  //       alert('تم أرشفة السجل بنجاح!');
  //       navigate('/archive');
  //     } 
  //   } catch (error) {
  //     console.error('Error archiving record:', error);
  //     if (error.response) {
  //       // إذا كانت هناك استجابة من الخادم
  //       setMessage(`حدث خطأ: ${error.response.status} - ${error.response.data}`);
  //     } else {
  //       setMessage('حدث خطأ أثناء أرشفة السجل.');
  //     }
  //   }
  // };
  const handleArchive = async () => {
    try {
      const response = await axios.post(`https://mary.pythonanywhere.com/archive/${outgoingId}/`, {
        id: record.id,  // تأكد من إرسال id
        title: record.title,
        sender: record.sender,
        notes: record.notes,
        urgency: record.urgency,
        number: record.number,
        date: record.date,  // تأكد من إرسال التاريخ الحالي
        file: record.file,  // إذا كان هناك ملف مرتبط
      });
  
      console.log('Response:', response); // طباعة الاستجابة لتفاصيل أكثر
  
      if (response.status === 201) {
        alert('تم أرشفة السجل بنجاح!');
        navigate('/archive');
      }
    } catch (error) {
      console.error('Error archiving record:', error);
      if (error.response) {
        // إذا كانت هناك استجابة من الخادم
        setMessage(`حدث خطأ: ${error.response.status} - ${error.response.data}`);
      } else {
        setMessage('حدث خطأ أثناء أرشفة السجل.');
      }
    }
  };
  
  const handleBackClick = () => {
    navigate(-1);
  };

  if (!record) return <div>تحميل البيانات...</div>;

  
  return (
    <div className="record-detail-container" style={{ direction: 'rtl' }}>
      <div className="row">
        <h2>الصادر</h2>
        
        <div className="record-detail-buttons">
          {isEditing ? (
            <>
              <button onClick={handleUpdate}>حفظ التعديلات</button>
              <button onClick={() => setIsEditing(false)}>إلغاء</button>
            </>
          ) : (
            <>
              <button onClick={handleEdit}>تعديل</button>
              <button onClick={handleDelete}>حذف</button>
              <button onClick={handleArchive}>أرشفة</button>
            </>
          )}
        </div>
      </div>

      {message && <div className="message">{message}</div>}

      <div className="record-details">
        <div className="record-info">
          {isEditing ? (
            <>
              <input
                type="text"
                name="urgency"
                value={updatedRecord.urgency}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="sender"
                value={updatedRecord.sender}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="title"
                value={updatedRecord.title}
                onChange={handleInputChange}
              />
              <textarea
                name="notes"
                value={updatedRecord.notes}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="number"
                value={updatedRecord.number}
                onChange={handleInputChange}
              />
              <input
                type="date"
                name="date"
                value={updatedRecord.date}
                onChange={handleInputChange}
              />
            </>
          ) : (
            <>
              <p><strong>الأولوية:</strong> <span className="record-value1">{translateUrgency(record.urgency)}</span></p>
              <p><strong>جهة الإرسال:</strong> <span className="record-value2">{record.sender}</span></p>
              <p><strong>الموضوع:</strong> <span className="record-value3">{record.title}</span></p>
              <p><strong>الملاحظات:</strong> <span className="record-value4">{record.notes}</span></p>
              <p><strong>العدد:</strong> <span className="record-value5">{record.number}</span></p>
              <p><strong>التاريخ:</strong> <span className="record-value6">{record.date}</span></p>
            </>
          )}
          
          <button className="back-button" onClick={handleBackClick}>الــــرجوع</button>
        </div>

        <div className="pdf-viewer">
        <PdfViewer pdfUrl={record.file} />
        </div>
        {/* <div className="pdf-viewer">
          {record.file && (
            <iframe
             src={record.file}
              width="50%"
              height="600px"
              title="PDF Viewer"
              frameBorder="0"
            />
          )}
        </div> */}
      </div>
    </div>
  );
};

export default RecordDetail;
