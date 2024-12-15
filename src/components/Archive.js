// import React, { useState, useEffect } from 'react';
// import './Archive.css';

// const Archive = () => {
//   const [archivedRecords, setArchivedRecords] = useState([]);

//   useEffect(() => {
//     // هنا يمكن تحميل السجلات المؤرشفة
//     const storedRecords = JSON.parse(localStorage.getItem('archivedRecords')) || [];
//     setArchivedRecords(storedRecords);
//   }, []);

//   return (
//     <div className="archive-container">
//       <h2>الأرشيف</h2>
//       {archivedRecords.length > 0 ? (
//         <ul>
//           {archivedRecords.map((record, index) => (
//             <li key={index}>
//               <strong>الأولوية:</strong> {record.priority}, <strong>جهة الصادر:</strong> {record.sender}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>لا توجد سجلات مؤرشفة لعرضها.</p>
//       )}
//     </div>
//   );
// };

// export default Archive;


//2
// import React, { useEffect, useState } from 'react';
// import './Archive.css';

// const Archive = () => {
//   const [archivedRecords, setArchivedRecords] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const storedRecords = JSON.parse(localStorage.getItem('archivedRecords')) || [];
//     setArchivedRecords(storedRecords);
//   }, []);

//   const filteredRecords = archivedRecords.filter(record =>
//     record.sender.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="archive-container">
//       <h2>الأرشيف</h2>
//       <input
//         type="text"
//         placeholder="ابحث عن جهة الصادر..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       {filteredRecords.length > 0 ? (
//         <ul>
//           {filteredRecords.map((record, index) => (
//             <li key={index}>
//               <strong>الأولوية:</strong> {record.priority}, <strong>جهة الصادر:</strong> {record.sender}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>لا توجد سجلات مؤرشفة لعرضها.</p>
//       )}
//     </div>
//   );
// };

// export default Archive;
//3
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'; // استيراد Link للتوجيه
// import './Archive.css';

// const Archive = () => {
//   const [archivedRecords, setArchivedRecords] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const storedRecords = JSON.parse(localStorage.getItem('archivedRecords')) || [];
//     setArchivedRecords(storedRecords);
//   }, []);

//   const filteredRecords = archivedRecords.filter(record =>
//     record.sender.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="archive-container">
//       <h2>الأرشيف</h2>
//       <input
//         type="text"
//         placeholder="ابحث عن جهة الصادر..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="search-input"
//       />
//       {filteredRecords.length > 0 ? (
//         <ul>
//           {filteredRecords.map((record, index) => (
//             <li key={index}>
//               <strong>الأولوية:</strong> {record.priority}, <strong>جهة الصادر:</strong> {record.sender}
//               <Link to={`/archive/${index}`}>  {/* رابط لصفحة تفاصيل السجل */}
//                 <button>عرض التفاصيل</button>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>لا توجد سجلات مؤرشفة لعرضها.</p>
//       )}
//     </div>
//   );
// };

// export default Archive;

//2
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'; // استيراد Link للتوجيه
// import './Archive.css';

// const Archive = () => {
//   const [archivedRecords, setArchivedRecords] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const storedRecords = JSON.parse(localStorage.getItem('archivedRecords')) || [];
//     setArchivedRecords(storedRecords);
//   }, []);

//   const filteredRecords = archivedRecords.filter(record =>
//     Object.values(record).some(value =>
//       value.toString().toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

//   return (
//     <div className="archive-container">
//       <h2>الأرشيف</h2>
//       <input
//         type="text"
//         placeholder="ابحث في السجلات..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="search-input"
//       />
//       <p>عدد السجلات: {filteredRecords.length}</p>
//       {filteredRecords.length > 0 ? (
//         <table className="archive-table">
//           <thead>
//             <tr>
//               <th>الأولوية</th>
//               <th>جهة الارسال</th>
//               <th>التاريخ</th>
//               <th>العدد</th>
//               <th>الملاحظات</th>
//               <th>الإجراءات</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredRecords.map((record, index) => (
//               <tr key={index}>
//                 <td>{record.priority}</td>
//                 <td>{record.sender}</td>
//                 <td>{record.date}</td> {/* تأكد من أن السجل يحتوي على حقل التاريخ */}
//                 <td>{record.number}</td>
//                 <td>{record.notes}</td>
//                 <td>
//                   <Link to={`/archive/${index}`}>
//                     <button>عرض التفاصيل</button>
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>لا توجد سجلات مؤرشفة لعرضها.</p>
//       )}
//     </div>
//   );
// };

// export default Archive;

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Archive.css';

// const Archive = () => {
//   const [archivedRecords, setArchivedRecords] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const storedRecords = JSON.parse(localStorage.getItem('archivedRecords')) || [];
//     setArchivedRecords(storedRecords);
//   }, []);

//   const handleDelete = (index) => {
//     const updatedRecords = archivedRecords.filter((_, i) => i !== index);
//     setArchivedRecords(updatedRecords);
//     localStorage.setItem('archivedRecords', JSON.stringify(updatedRecords));
//   };

//   const filteredRecords = archivedRecords.filter(record =>
//     Object.values(record).some(value =>
//       value.toString().toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

//   return (
//     <div className="archive-container">
//       <h2>الأرشيف</h2>
//       <div className="search-container">
//       <input
//         type="text"
//         placeholder="ابحث في السجلات..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="search-input"
//       />
//       </div>
//       <p>عدد السجلات: {filteredRecords.length}</p>
//       {filteredRecords.length > 0 ? (
//         <table className="archive-table">
//           <thead>
//             <tr>
//               <th>الأولوية</th>
//               <th>جهة الإرسال</th>
//               <th>التاريخ</th>
//               <th>العدد</th>
//               <th>الملاحظات</th>
//               <th>الإجراءات</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredRecords.map((record, index) => (
//               <tr key={index}>
//                 <td>{record.priority}</td>
//                 <td>{record.sender}</td>
//                 <td>{record.date}</td>
//                 <td>{record.number}</td>
//                 <td>{record.notes}</td>
//                 <td>
//                   <Link to={`/archive/${index}`}>
//                     <button>عرض التفاصيل</button>
//                   </Link>
//                   <button onClick={() => handleDelete(index)} style={{ marginLeft: '10px', color: 'red' }}>
//                     حذف
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>لا توجد سجلات مؤرشفة لعرضها.</p>
//       )}
//     </div>
//   );
// };

// export default Archive;


//swager

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './Archive.css';

// const Archive = () => {
//   const [archivedRecords, setArchivedRecords] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchArchivedRecords = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get('https://mary.pythonanywhere.com/archive/', {
//           headers: {
//             accept: 'application/json',
//           },
//         });
//         setArchivedRecords(response.data);
//       } catch (error) {
//         console.error('Error fetching archived records:', error);
//         setError('فشل في جلب السجلات المؤرشفة. يرجى المحاولة مرة أخرى.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArchivedRecords();
//   }, []);

//   const handleDelete = async (id) => {
//     if (window.confirm('هل تريد حذف هذا السجل؟')) {
//       try {
//         await axios.delete(`https://mary.pythonanywhere.com/archive/${id}/`);
//         setArchivedRecords(archivedRecords.filter(record => record.id !== id));
//         alert('تم حذف السجل بنجاح!');
//       } catch (error) {
//         console.error('Error deleting record:', error);
//         setError('فشل في حذف السجل. يرجى المحاولة مرة أخرى.');
//       }
//     }
//   };

//   const filteredRecords = archivedRecords.filter(record =>
//     Object.values(record).some(value =>
//       value.toString().toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

//   return (
//     <div className="archive-container">
//       <h2>الأرشيف</h2>
//       <Link to="/add-archive">
//       <button>إضافة سجل جديد</button>
//     </Link>
     
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="ابحث في السجلات..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="search-input"
//         />
//       </div>
//       {loading ? (
//         <p>جاري التحميل...</p>
//       ) : error ? (
//         <p style={{ color: 'red' }}>{error}</p>
//       ) : (
//         <>
//           <p>عدد السجلات: {filteredRecords.length}</p>
//           {filteredRecords.length > 0 ? (
//             <table className="archive-table">
//               <thead>
//                 <tr>
//                   <th>الأولوية</th>
//                   <th>جهة الإرسال</th>
//                   <th>التاريخ</th>
//                   <th>العدد</th>
//                   <th>الملاحظات</th>
//                   <th>الإجراءات</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredRecords.map((record,id) => (
//                   <tr key={id}>
//                     <td>{record.title}</td>
//                     <td>{record.sender}</td>
//                     <td>{record.notes}</td>
//                     <td>{record.urgency}</td>
//                     <td>{record.date}</td>
//                     <td>{record.number}</td>
                    
//                     <td>
//                       <Link to={`/archive/${record.id}`}>
//                         <button>عرض التفاصيل</button>
//                       </Link>
//                       <button onClick={() => handleDelete(record.id)} style={{ marginLeft: '10px', color: 'red' }}>
//                         حذف
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p>لا توجد سجلات مؤرشفة لعرضها.</p>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Archive;
//respons
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './Archive.css';

// const Archive = () => {
//   const [archivedRecords, setArchivedRecords] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchArchivedRecords = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get('https://mary.pythonanywhere.com/archive/', {
//           headers: {
//             accept: 'application/json',
//           },
//         });
//         setArchivedRecords(response.data);
//       } catch (error) {
//         console.error('Error fetching archived records:', error);
//         setError('فشل في جلب السجلات المؤرشفة. يرجى المحاولة مرة أخرى.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArchivedRecords();
//   }, []);

//   const handleDelete = async (id) => {
//     if (window.confirm('هل تريد حذف هذا السجل؟')) {
//       try {
//         await axios.delete(`https://mary.pythonanywhere.com/archive/${id}/`);
//         setArchivedRecords(archivedRecords.filter(record => record.id !== id));
//         alert('تم حذف السجل بنجاح!');
//       } catch (error) {
//         console.error('Error deleting record:', error);
//         setError('فشل في حذف السجل. يرجى المحاولة مرة أخرى.');
//       }
//     }
//   };

//   const filteredRecords = archivedRecords.filter(record =>
//     Object.values(record).some(value =>
//       value.toString().toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

//   return (
//     <div className="archive-container">
//       <h2>الأرشيف</h2>
//       <Link to="/add-archive">
//         <button>إضافة سجل جديد</button>
//       </Link>
     
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="ابحث في السجلات..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="search-input"
//         />
//       </div>
//       {loading ? (
//         <p>جاري التحميل...</p>
//       ) : error ? (
//         <p style={{ color: 'red' }}>{error}</p>
//       ) : (
//         <>
//           <p>عدد السجلات: {filteredRecords.length}</p>
//           {filteredRecords.length > 0 ? (
//             <table className="archive-table">
//               <thead>
//                 <tr>
//                   <th>العنوان</th>
//                   <th>جهة الإرسال</th>
//                   <th>تاريخ الأرشفة</th>
//                   <th>العدد</th>
//                   <th>الملاحظات</th>
//                   <th>الإجراءات</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredRecords.map((record) => (
//                   <tr key={record.id}>
//                     <td>{record.title}</td>
//                     <td>{record.sender}</td>
//                     <td>{new Date(record.date).toLocaleDateString('ar-SA')}</td>
//                     <td>{record.number}</td>
//                     <td>{record.notes}</td>
//                     <td>
//                       <Link to={`/archive/${record.id}`}>
//                         <button>عرض التفاصيل</button>
//                       </Link>
//                       <button onClick={() => handleDelete(record.id)} style={{ marginLeft: '10px', color: 'red' }}>
//                         حذف
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p>لا توجد سجلات مؤرشفة لعرضها.</p>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Archive;
//get
// import React, { useEffect, useState } from 'react';

// import axios from 'axios';
// import PdfViewer from './PdfViewer';
// import './Archive.css';

// const Archive = () => {
//   const [archivedRecords, setArchivedRecords] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchArchivedRecords = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get('https://mary.pythonanywhere.com/archive/', {
//           headers: {
//             accept: 'application/json',
//           },
//         });
//         setArchivedRecords(response.data);
//       } catch (error) {
//         console.error('Error fetching archived records:', error);
//         setError('فشل في جلب السجلات المؤرشفة. يرجى المحاولة مرة أخرى.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArchivedRecords();
//   }, []);

 
//   const filteredRecords = archivedRecords.filter(record =>
//     Object.values(record).some(value =>
//       value.toString().toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );
//   function translateUrgency(urgency) {
//     switch(urgency) {
//       case 'very urgent':
//         return 'عاجل جدا';
//         case 'urgent':
//           return 'عاجل';
//           case 'normal':
//         return 'عادي';
//         case 'secret':
//         return 'سري';

//       default:
//         return urgency;  // إذا كانت القيمة غير معروفة أو غير محددة
//     }
//   }

//   return (
//     <div className="archive-container">
//       <h2>الأرشيف</h2>
//       {/* <Link to="/add-archive">
//         <button>إضافة سجل جديد</button>
//       </Link> */}

//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="ابحث في السجلات..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="search-input"
//         />
//       </div>
//       {loading ? (
//         <p>جاري التحميل...</p>
//       ) : error ? (
//         <p style={{ color: 'red' }}>{error}</p>
//       ) : (
//         <>
//           <p>عدد السجلات: {filteredRecords.length}</p>
//           {filteredRecords.length > 0 ? (
//             <table className="archive-table">
//               <thead>
//                 <tr>
//                 <th>الاولوية</th>
//                   <th>العنوان</th>
//                   <th>جهة الإرسال</th>
//                   <th>تاريخ الأرشفة</th>
//                   <th>العدد</th>
//                   <th>الملاحظات</th>
//                   <th>الإجراءات</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredRecords.map((record) => (
//                   <tr key={record.id}>
//                     <td>{translateUrgency(record.urgency)}</td>
//                     <td>{record.title}</td>
//                     <td>{record.sender}</td>
//                     <td>{new Date(record.archived_at).toLocaleDateString('en-GB')}</td>
//                     <td>{record.number}</td>
//                     <td>{record.notes}</td>
//                     <td>
//                     <div className="pdf-viewer">
//           {/* {record.file && <PdfViewer pdfUrl={record.file} />} */}

//            {/* تأكد من استخدام الرابط الكامل للملف */}
//            {record.file && (
//                           <PdfViewer pdfUrl={`https://mary.pythonanywhere.com${record.file}`} />
//                         )}
//         </div>
                      
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p>لا توجد سجلات مؤرشفة لعرضها.</p>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Archive;
//  15/12/2024
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PdfViewer from './PdfViewer';
import Sidebar from './Sidebar'; // تأكد من أنك تستورد Sidebar بشكل صحيح
import './Archive.css';

const Archive = () => {
  const [archivedRecords, setArchivedRecords] = useState([]);  // السجلات المستلمة من API
  const [searchTerm, setSearchTerm] = useState('');  // كلمة البحث
  const [dataList, setDataList] = useState([]);  // البيانات المعروضة حالياً
  const [allRecords, setAllRecords] = useState([]);  // جميع السجلات من الـ API
  const [loading, setLoading] = useState(true);  // حالة التحميل
  const [error, setError] = useState('');  // حالة الخطأ
  const [currentPage, setCurrentPage] = useState(1);  // الصفحة الحالية
  const recordsPerPage = 5;  // عدد السجلات في كل صفحة

  useEffect(() => {
    const fetchArchivedRecords = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://mary.pythonanywhere.com/archive/', {
          headers: {
            accept: 'application/json',
          },
        });
        setArchivedRecords(response.data);
        setAllRecords(response.data);  // تخزين السجلات كاملة هنا
        setDataList(response.data);  // تخزين السجلات المعروضة حالياً
      } catch (error) {
        console.error('Error fetching archived records:', error);
        setError('فشل في جلب السجلات المؤرشفة. يرجى المحاولة مرة أخرى.');
      } finally {
        setLoading(false);
      }
    };

    fetchArchivedRecords();
  }, []);

  // دالة البحث
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    const filtered = allRecords.filter((record) =>
      Object.values(record).some((value) =>
        value.toString().toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setDataList(filtered);
    setCurrentPage(1);  // إعادة الصفحة إلى الأولى عند التصفية
  };

  // دالة عرض جميع السجلات
  const handleShowAll = () => {
    setSearchTerm('');
    setDataList(allRecords);  // إعادة عرض جميع السجلات
    setCurrentPage(1);  // إعادة الصفحة إلى 1
  };

  // تصفية السجلات بناءً على البحث
  const filteredRecords = archivedRecords.filter(record =>
    Object.values(record).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // حساب السجلات المعروضة في الصفحة الحالية
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = dataList.slice(indexOfFirstRecord, indexOfLastRecord);

  // دالة الترجمة للأولوية
  function translateUrgency(urgency) {
    switch (urgency) {
      case 'very urgent':
        return 'عاجل جدا';
      case 'urgent':
        return 'عاجل';
      case 'normal':
        return 'عادي';
      case 'secret':
        return 'سري';
      default:
        return urgency;
    }
  }

  // التنقل بين الصفحات (السابق / اللاحق)
  const handleNextPage = () => {
    if (indexOfLastRecord < filteredRecords.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (indexOfFirstRecord > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="archive-container">
      <Sidebar totalArchivedRecords={filteredRecords.length} /> {/* تمرير عدد السجلات المؤرشفة */}
      
      <h2>الأرشيف</h2>

      <div className="search-container">
      <input
          type="text"
          placeholder="بحث عن جميع الحقول..."
          value={searchTerm}
          onChange={handleSearch}
        />
         <button className="show-all-button" onClick={handleShowAll}>
          عرض الكل
        </button>
      </div>

      {loading ? (
        <p>جاري التحميل...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <>
          {currentRecords.length > 0 ? (
            <table className="archive-table">
              <thead>
                <tr>
                  <th>الاولوية</th>
                  <th>العنوان</th>
                  <th>جهة الإرسال</th>
                  <th>تاريخ الأرشفة</th>
                  <th>العدد</th>
                  <th>الملاحظات</th>
                  <th>الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {currentRecords.map((record) => (
                  <tr key={record.id}>
                    <td>{translateUrgency(record.urgency)}</td>
                    <td>{record.title}</td>
                    <td>{record.sender}</td>
                    <td>{new Date(record.archived_at).toLocaleDateString('en-GB')}</td>
                    <td>{record.number}</td>
                    <td>{record.notes}</td>
                    <td>
                      <div className="pdf-viewer">
                        {record.file && (
                          <PdfViewer pdfUrl={`https://mary.pythonanywhere.com${record.file}`} />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>لا توجد سجلات مؤرشفة لعرضها.</p>
          )}

          <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              السابق
            </button>
            <button onClick={handleNextPage} disabled={indexOfLastRecord >= filteredRecords.length}>
              التالي
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Archive;
