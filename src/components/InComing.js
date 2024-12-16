// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './DataTablee.css';
// // import PdfViewer from './PdfViewer';



// const DataTabWared = () => {
//   const [dataList] = useState([
//     {
//       priority: 'عاجل',
//       sender: 'وزارة التعليم',
//       subject: 'استفسار',
//       notes: 'بخصوص الجداول الدراسية',
//       date: '2024-10-20',
//       file: './samplePdf/sample.pdf', // ضع رابط الملف هنا
//     },
//     {
//       priority: 'سري',
//       sender: 'وزارة الصحة',
//       subject: 'لقاح',
//       notes: 'لقاح COVID-19',
//       date: '2024-10-21',
//       file: './samplePdf/sample.pdf', // ضع رابط الملف هنا
//     },
//     {
//       priority: 'عادي',
//       sender: 'وزارة الثقافة',
//       subject: 'مؤتمر صحفي',
//       notes: 'دعوة لحضور المؤتمر',
//       date: '2024-10-22',
//       file: './samplePdf/sample.pdf', // ضع رابط الملف هنا
//     },
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   const filteredDataList = dataList.filter(data => 
//     data.priority.toLowerCase().includes(searchTerm) ||
//     data.sender.toLowerCase().includes(searchTerm) ||
//     data.subject.toLowerCase().includes(searchTerm) ||
//     data.date.includes(searchTerm)
//   );

//   return (
//     <div className="data-table-container">
//       <h2>الوارد</h2>
      
//       <div className="search-container">
//         <input 
//           type="text" 
//           placeholder="بحث عن جميع الحقول..." 
//           value={searchTerm} 
//           onChange={handleSearch} 
//         />
//         {/* <Link to="/create">
//           <button className="add-button">إضافة</button>
//         </Link> */}
//       </div>
      
//       <table className="data-table">
//         <thead>
//           <tr>
//             <th>الأولوية</th>
//             <th>جهة الارسال</th>
//             <th>الموضوع</th>
//             <th>الملاحظات</th>
//             <th>التاريخ</th>
//             <th>التفاصيل</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredDataList.length > 0 ? (
//             filteredDataList.map((data, index) => (
//               <tr key={index}>
//                 <td>{data.priority}</td>
//                 <td>{data.sender}</td>
//                 <td>{data.subject}</td>
//                 <td className="note">{data.notes}</td>
//                 <td>{data.date}</td>
//                 <td>
//                   <Link to={`/datawared/${index}`} state={{ record: data }}>عرض التفاصيل</Link>
//                 </td>
//                 {/* <td>
//   <Link to={`/datawared/${index}`} state={{ record: { ...data, file: data.file } }}>عرض التفاصيل</Link>
// </td> */}

//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6">لا توجد بيانات لعرضها</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DataTabWared;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './DataTablee.css';

// const DataTabWared = ({ records = [] }) => { // تعيين قيمة افتراضية
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   const filteredDataList = records.filter(data => 
//     data.priority.toLowerCase().includes(searchTerm) ||
//     data.sender.toLowerCase().includes(searchTerm) ||
//     data.subject.toLowerCase().includes(searchTerm) ||
//     data.date.includes(searchTerm)
//   );

//   return (
//     <div className="data-table-container">
//       <h2>الوارد</h2>
//       <div className="search-container">
//         <input 
//           type="text" 
//           placeholder="بحث عن جميع الحقول..." 
//           value={searchTerm} 
//           onChange={handleSearch} 
//         />
//       </div>
      
//       <table className="data-table">
//         <thead>
//           <tr>
//             <th>الأولوية</th>
//             <th>جهة الارسال</th>
//             <th>الموضوع</th>
//             <th>الملاحظات</th>
//             <th>التاريخ</th>
//             <th>التفاصيل</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredDataList.length > 0 ? (
//             filteredDataList.map((data) => (
//               <tr key={data.id}>
//                 <td>{data.priority}</td>
//                 <td>{data.sender}</td>
//                 <td>{data.subject}</td>
//                 <td className="note">{data.notes}</td>
//                 <td>{data.date}</td>
//                 <td>
//                   <Link to={`/datawared/${data.id}`} state={{ record: data }}>عرض التفاصيل</Link>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6">لا توجد بيانات لعرضها</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DataTabWared;
//24/11/2024
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './DataTablee.css';
// import Sidebar from './Sidebar'; // تأكد من أن Sidebar مستورد بشكل صحيح

// const DataTabWared = () => {
//   const [records, setRecords] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [recordsPerPage] = useState(5);
//   const [allRecords, setAllRecords] = useState([]);

//   // تحميل السجلات من localStorage
//   useEffect(() => {
//     const savedRecords = localStorage.getItem('records');
//     if (savedRecords) {
//       const parsedRecords = JSON.parse(savedRecords);
//       setRecords(parsedRecords);
//       setAllRecords(parsedRecords);  // حفظ جميع السجلات في allRecords
//     }
//   }, []);

//   // التعامل مع البحث
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   // تصفية السجلات حسب البحث
//   const filteredDataList = records.filter(data =>
//     data.priority.toLowerCase().includes(searchTerm) ||
//     data.sender.toLowerCase().includes(searchTerm) ||
//     data.subject.toLowerCase().includes(searchTerm) ||
//     data.date.includes(searchTerm)
//   );

//   // حساب السجلات المعروضة في الصفحة الحالية
//   const indexOfLastRecord = currentPage * recordsPerPage;
//   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//   const currentRecords = filteredDataList.slice(indexOfFirstRecord, indexOfLastRecord);

//   // تعريف دالة handleDelete لحذف سجل
//   const handleDelete = (id) => {
//     const updatedRecords = records.filter(record => record.id !== id);
//     setRecords(updatedRecords);
//     localStorage.setItem('records', JSON.stringify(updatedRecords)); // حفظ السجلات المحدثة في localStorage
//   };

//   // حذف جميع السجلات
//   const handleDeleteAll = () => {
//     if (window.confirm("هل أنت متأكد أنك تريد حذف جميع السجلات؟")) {
//       setRecords([]);  // مسح السجلات من الحالة
//       localStorage.removeItem('records');  // مسح السجلات من localStorage
//     }
//   };

//   // عرض كافة السجلات
//   const handleShowAll = () => {
//     setRecords(allRecords);  // استرجاع جميع السجلات
//   };

//   // التنقل بين الصفحات (السابق/التالي)
//   const handleNextPage = () => {
//     if (indexOfLastRecord < filteredDataList.length) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (indexOfFirstRecord > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   // حساب عدد السجلات الكلي
//   const totalWaredRecords = filteredDataList.length;

//   return (
//     <div className="data-table-container">
//       {/* تمرير العدد إلى Sidebar */}
//       <Sidebar totalWaredRecords={totalWaredRecords} />
      
//       <div className="main-content">
//         <h2>الوارد </h2>

//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="بحث عن جميع الحقول..."
//             value={searchTerm}
//             onChange={handleSearch}
//           />
          
//           <button className="delete-all-btn" onClick={handleDeleteAll}>
//             حذف جميع السجلات
//           </button>
          
//           <button className="show-all-btn" onClick={handleShowAll}>
//             عرض كافة السجلات
//           </button>
//         </div>

//         <table className="data-table">
//           <thead>
//             <tr>
//               <th>الأولوية</th>
//               <th>جهة الارسال</th>
//               <th>الموضوع</th>
//               <th>الملاحظات</th>
//               <th>التاريخ</th>
//               <th>التفاصيل</th>
//               <th>حذف</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentRecords.length > 0 ? (
//               currentRecords.map((data) => (
//                 <tr key={data.id}>
//                   <td>{data.priority}</td>
//                   <td>{data.sender}</td>
//                   <td>{data.subject}</td>
//                   <td className="note">{data.notes}</td>
//                   <td>{data.date}</td>
//                   <td>
//                     <Link to={`/datawared/${data.id}`} state={{ record: data }}>عرض التفاصيل</Link>
//                   </td>
//                   <td>
//                     <button onClick={() => handleDelete(data.id)}>حذف</button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="7">لا توجد بيانات لعرضها</td>
//               </tr>
//             )}
//           </tbody>
//         </table>

//         <div className="pagination">
//           <button onClick={handlePrevPage} disabled={currentPage === 1}>السابق</button>
//           <button onClick={handleNextPage} disabled={indexOfLastRecord >= filteredDataList.length}>اللاحق</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DataTabWared;


// DataTabWared.js
// DataTabWared.js
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './DataTablee.css';
// import Sidebar from './Sidebar';

// const DataTabWared = () => {
//   const [records, setRecords] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const recordsPerPage = 5;

//   // تحميل السجلات من localStorage عند تحميل الصفحة
//   useEffect(() => {
//     const savedRecords = localStorage.getItem('records');
//     if (savedRecords) {
//       const parsedRecords = JSON.parse(savedRecords);
//       setRecords(parsedRecords);
//     }
//   }, []);

//   // التعامل مع البحث
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   // تصفية السجلات حسب البحث
//   const filteredDataList = records.filter(data =>
//     data.priority.toLowerCase().includes(searchTerm) ||
//     data.sender.toLowerCase().includes(searchTerm) ||
//     data.subject.toLowerCase().includes(searchTerm) ||
//     data.date.includes(searchTerm)
//   );

//   // حساب السجلات المعروضة في الصفحة الحالية
//   const indexOfLastRecord = currentPage * recordsPerPage;
//   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//   const currentRecords = filteredDataList.slice(indexOfFirstRecord, indexOfLastRecord);

//   // حذف سجل
//   const handleDelete = (id) => {
//     const updatedRecords = records.filter(record => record.id !== id);
//     setRecords(updatedRecords);
//     localStorage.setItem('records', JSON.stringify(updatedRecords)); // حفظ السجلات في localStorage
//   };

//   // التنقل بين الصفحات (السابق/التالي)
//   const handleNextPage = () => {
//     if (indexOfLastRecord < filteredDataList.length) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (indexOfFirstRecord > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const totalWaredRecords = filteredDataList.length;

//   return (
//     <div className="data-table-container">
//       <Sidebar totalWaredRecords={totalWaredRecords} />

//       <div className="main-content">
//         <h2>الوارد</h2>

//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="بحث عن جميع الحقول..."
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </div>

//         <Link to="/create">
//           <button className="add-record-btn">إضافة سجل جديد</button>
//         </Link>

//         <table className="data-table">
//           <thead>
//             <tr>
//               <th>الأولوية</th>
//               <th>جهة الارسال</th>
//               <th>الموضوع</th>
//               <th>الملاحظات</th>
//               <th>التاريخ</th>
//               <th>التفاصيل</th>
//               <th>حذف</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentRecords.length > 0 ? (
//               currentRecords.map((data) => (
//                 <tr key={data.id}>
//                   <td>{data.priority}</td>
//                   <td>{data.sender}</td>
//                   <td>{data.subject}</td>
//                   <td className="note">{data.notes}</td>
//                   <td>{data.date}</td>
//                   <td>
//                     <Link to={`/datawared/${data.id}`} state={{ record: data }}>
//                       عرض التفاصيل
//                     </Link>
//                   </td>
//                   <td>
//                     <button onClick={(e) => { e.stopPropagation(); handleDelete(data.id); }}>
//                       حذف
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="7">لا توجد بيانات لعرضها</td>
//               </tr>
//             )}
//           </tbody>
//         </table>

//         <div className="pagination">
//           <button onClick={handlePrevPage} disabled={currentPage === 1}>السابق</button>
//           <button onClick={handleNextPage} disabled={indexOfLastRecord >= filteredDataList.length}>اللاحق</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DataTabWared;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OutGoing.css';
import Sidebar from './Sidebar';

const InComing = () => {
  const [records, setRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const [allRecords, setAllRecords] = useState([]);

  // تحميل السجلات من localStorage عند تحميل الصفحة
  useEffect(() => {
    const savedRecords = localStorage.getItem('records');
    if (savedRecords) {
      const parsedRecords = JSON.parse(savedRecords);
      setRecords(parsedRecords);
      setAllRecords(parsedRecords);
    }
  }, []);

  // التعامل مع البحث
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // تصفية السجلات حسب البحث
  const filteredDataList = records.filter(data =>
    data.priority.toLowerCase().includes(searchTerm) ||
    data.sender.toLowerCase().includes(searchTerm) ||
    data.subject.toLowerCase().includes(searchTerm) ||
    data.date.includes(searchTerm)
  );

  // حساب السجلات المعروضة في الصفحة الحالية
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredDataList.slice(indexOfFirstRecord, indexOfLastRecord);

  // حذف سجل
  const handleDelete = (id) => {
    const updatedRecords = records.filter(record => record.id !== id);
    setRecords(updatedRecords);
    localStorage.setItem('records', JSON.stringify(updatedRecords)); // حفظ السجلات في localStorage
  };

  // حذف جميع السجلات
  const handleDeleteAll = async () => {
    if (window.confirm("هل أنت متأكد أنك تريد حذف جميع السجلات؟")) {
      setRecords([]);
      localStorage.removeItem('records'); // مسح السجلات من localStorage
    }
  };

  // عرض جميع السجلات
  const handleShowAll = async () => {
    setRecords(allRecords);  // استرجاع جميع السجلات
  };

  // التنقل بين الصفحات (السابق/التالي)
  const handleNextPage = () => {
    if (indexOfLastRecord < filteredDataList.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (indexOfFirstRecord > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const totalWaredRecords = filteredDataList.length;

  return (
    <div className="data-table-container">
      <Sidebar totalWaredRecords={totalWaredRecords} />

      <div className="main-content">
        <h2>الوارد</h2>

        <div className="search-container">
        <input
          type="text"
          placeholder="بحث عن جميع الحقول..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="delete-all-button" onClick={handleDeleteAll}>
          مسح الكل
        </button>
        <button className="show-all-button" onClick={handleShowAll}>
          عرض الكل
        </button>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>الأولوية</th>
              <th>جهة الارسال</th>
              <th>الموضوع</th>
              <th>الملاحظات</th>
              <th>التاريخ</th>
              <th>التفاصيل</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.length > 0 ? (
              currentRecords.map((data) => (
                <tr key={data.id}>
                  <td>{data.priority}</td>
                  <td>{data.sender}</td>
                  <td>{data.subject}</td>
                  <td className="note">{data.notes}</td>
                  <td>{data.date}</td>
                  <td>
                    <Link to={`/datawared/${data.id}`} state={{ record: data }}>
                      عرض التفاصيل
                    </Link>
                  </td>
                  <td>
                    <button onClick={(e) => { e.stopPropagation(); handleDelete(data.id); }}>
                      حذف
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">لا توجد بيانات لعرضها</td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>السابق</button>
          <button onClick={handleNextPage} disabled={indexOfLastRecord >= filteredDataList.length}> التالي </button>
        </div>
      </div>
    </div>
  );
};

export default InComing;


// api

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './DataTablee.css';

// const DataTabWared = () => {
//   const [dataList, setDataList] = useState([]); // السجلات المعروضة
//   const [allRecords, setAllRecords] = useState([]); // جميع السجلات من API
//   const [searchTerm, setSearchTerm] = useState(''); // مصطلح البحث

//   // تحميل السجلات من API
//   useEffect(() => {
//     const fetchRecords = async () => {
//       try {
//         const response = await axios.get('https://mary.pythonanywhere.com/incomings/', {
//           headers: {
//             accept: 'application/json',
//           },
//         });
//         setDataList(response.data.results); // تخزين السجلات في dataList
//         setAllRecords(response.data.results); // تخزين السجلات الكاملة في allRecords
//       } catch (error) {
//         console.error('Error fetching records:', error);
//       }
//     };

//     fetchRecords();
//   }, []);

//   // دالة لترجمة الأولوية
//   const translateUrgency = (urgency) => {
//     switch (urgency) {
//       case 'very urgent':
//         return 'عاجل جدا';
//       case 'urgent':
//         return 'عاجل';
//       case 'normal':
//         return 'عادي';
//       case 'secret':
//         return 'سري';
//       default:
//         return urgency; // إذا كانت الأولوية غير معروفة أو غير محددة
//     }
//   };

//   // دالة التعامل مع البحث
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//     const filtered = allRecords.filter((data) =>
//       data.urgency.toLowerCase().includes(e.target.value.toLowerCase()) ||
//       data.sender.toLowerCase().includes(e.target.value.toLowerCase()) ||
//       data.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
//       data.date.includes(e.target.value)
//     );
//     setDataList(filtered);
//   };

//   // دالة لحذف جميع السجلات
//   const handleDeleteAll = async () => {
//     if (window.confirm('هل تريد حذف جميع السجلات؟')) {
//       try {
//         for (let record of allRecords) {
//           // إرسال طلب DELETE لحذف السجل من السيرفر
//           await axios.delete(`https://mary.pythonanywhere.com/incomings/${record.id}/`, {
//             headers: {
//               accept: 'application/json',
//             },
//           });
//         }

//         // بعد الحذف، مسح البيانات من الحالة المحلية
//         setDataList([]);
//         setAllRecords([]);
//         alert('تم حذف جميع السجلات');
//       } catch (error) {
//         console.error('Error deleting records:', error.response || error);
//         alert('فشل في حذف جميع السجلات. الرجاء المحاولة مرة أخرى.');
//       }
//     }
//   };

//   // دالة لحذف سجل فردي
//   const handleDelete = async (id) => {
//     if (window.confirm('هل تريد حذف هذا السجل؟')) {
//       try {
//         // إرسال طلب DELETE لحذف السجل من السيرفر
//         await axios.delete(`https://mary.pythonanywhere.com/incomings/${id}/`, {
//           headers: {
//             accept: 'application/json',
//           },
//         });

//         // إزالة السجل من البيانات المعروضة في الواجهة الأمامية
//         setDataList(dataList.filter((data) => data.id !== id));
//         setAllRecords(allRecords.filter((data) => data.id !== id));
//         alert('تم حذف السجل');
//       } catch (error) {
//         console.error('Error deleting record:', error);
//         alert('فشل في حذف السجل');
//       }
//     }
//   };

//   // دالة لعرض جميع السجلات
//   const handleShowAll = () => {
//     setSearchTerm(''); // إعادة تعيين مصطلح البحث
//     setDataList(allRecords); // عرض جميع السجلات
//   };

//   return (
//     <div className="data-table-container">
//       <h2>الوارد</h2>

//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="بحث عن جميع الحقول..."
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//         <Link to="/create">
//           <button className="add-button">إضافة</button>
//         </Link>
//         <button className="delete-all-button" onClick={handleDeleteAll}>
//           مسح الكل
//         </button>
//         <button className="show-all-button" onClick={handleShowAll}>
//           عرض كافة السجلات
//         </button>
//       </div>

//       <table className="data-table">
//         <thead>
//           <tr>
//             <th>الأولوية</th>
//             <th>جهة الارسال</th>
//             <th>الموضوع</th>
//             <th>الملاحظات</th>
//             <th>التاريخ</th>
//             <th>التفاصيل</th>
//             <th>حذف</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dataList.length > 0 ? (
//             dataList.map((data) => (
//               <tr key={data.id}>
//                 <td>{translateUrgency(data.urgency)}</td>
//                 <td>{data.sender}</td>
//                 <td>{data.title}</td>
//                 <td className="note">{data.notes}</td>
//                 <td>{data.date}</td>
//                 <td>
//                   <Link to={`/datawared/${data.id}`}>عرض التفاصيل</Link>
//                 </td>
//                 <td>
//                   <button className="delete-record-button" onClick={() => handleDelete(data.id)}>
//                     حذف
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7">لا توجد بيانات لعرضها</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DataTabWared;
