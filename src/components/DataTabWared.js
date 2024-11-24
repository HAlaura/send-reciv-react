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

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DataTablee.css';

const DataTabWared = () => {
  const [records, setRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // تحميل السجلات من localStorage عند تحميل المكون
  useEffect(() => {
    const savedRecords = localStorage.getItem('records');
    if (savedRecords) {
      setRecords(JSON.parse(savedRecords));
    }
  }, []);

  // التعامل مع البحث
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredDataList = records.filter(data =>
    data.priority.toLowerCase().includes(searchTerm) ||
    data.sender.toLowerCase().includes(searchTerm) ||
    data.subject.toLowerCase().includes(searchTerm) ||
    data.date.includes(searchTerm)
  );

  return (
    <div className="data-table-container">
      <h2>الوارد</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="بحث عن جميع الحقول..."
          value={searchTerm}
          onChange={handleSearch}
        />
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
          </tr>
        </thead>
        <tbody>
          {filteredDataList.length > 0 ? (
            filteredDataList.map((data) => (
              <tr key={data.id}>
                <td>{data.priority}</td>
                <td>{data.sender}</td>
                <td>{data.subject}</td>
                <td className="note">{data.notes}</td>
                <td>{data.date}</td>
                <td>
                  <Link to={`/datawared/${data.id}`} state={{ record: data }}>عرض التفاصيل</Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">لا توجد بيانات لعرضها</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTabWared;



// api

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './DataTablee.css';
// const DataTabWared = () => {
// const [dataList, setDataList] = useState([]);
//   const [allRecords, setAllRecords] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
  
//   useEffect(() => {
//     const fetchRecords = async () => {
//       try {
//         const response = await axios.get('https://mary.pythonanywhere.com/incomings/', {
//           headers: {
//             accept: 'application/json'
//           }
//         });
//         setDataList(response.data.results); // Store results in dataList
//         setAllRecords(response.data.results); // Store all records
//       } catch (error) {
//         console.error('Error fetching records:', error);
//       }
//     };

//     fetchRecords();
//   }, []);

//   function translateUrgency(urgency) {
//     switch(urgency) {
//       case 'very urgent':
//         return 'عاجل جدا';
//       case 'urgent':
//         return 'عاجل';
//       case 'normal':
//         return 'عادي';
//       case 'secret':
//         return 'سري';
//       default:
//         return urgency;  // If urgency is unknown or not specified
//     }
//   }

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//     const filtered = allRecords.filter(data => 
//       data.urgency.toLowerCase().includes(e.target.value.toLowerCase()) ||
//       data.sender.toLowerCase().includes(e.target.value.toLowerCase()) ||
//       data.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
//       data.date.includes(e.target.value)
//     );
//     setDataList(filtered);
//   };

//   const handleDeleteAll = async () => {
//     if (window.confirm('هل تريد حذف جميع السجلات؟')) {
//       try {
//         for (let record of allRecords) {
//           // Send a DELETE request for each individual record
//           await axios.delete(`https://mary.pythonanywhere.com/incomings/${record.id}/`, {
//             headers: {
//               accept: 'application/json'
//             }
//           });
//         }
  
//         // After deleting all records, clear the local state
//         setDataList([]);
//         setAllRecords([]);
//         alert('تم حذف جميع السجلات');
//       } catch (error) {
//         console.error('Error deleting records:', error.response || error);
//         alert('فشل في حذف جميع السجلات. الرجاء المحاولة مرة أخرى.');
//       }
//     }
//   };
  
//   const handleDelete = async (id) => {
//     if (window.confirm('هل تريد حذف هذا السجل؟')) {
//       try {
//         // Make an API call to delete a single record from the server
//         await axios.delete(`https://mary.pythonanywhere.com/incomings/${id}/`, {
//           headers: {
//             accept: 'application/json'
//           }
//         });
        
//         // Remove the record from the list in the frontend
//         setDataList(dataList.filter(data => data.id !== id));
//         setAllRecords(allRecords.filter(data => data.id !== id));
//         alert('تم حذف السجل');
//       } catch (error) {
//         console.error('Error deleting record:', error);
//         alert('فشل في حذف السجل');
//       }
//     }
//   };

//   const handleShowAll = () => {
//     setSearchTerm(''); // Reset search term
//     setDataList(allRecords); // Show all records
//   };

//   return (
//     <div className="data-table-container">
//       <h2>الصادر</h2>
      
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
//         <button className="delete-all-button" onClick={handleDeleteAll}>مسح الكل</button>
//         <button className="show-all-button" onClick={handleShowAll}>عرض كافة السجلات</button>
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
//             <th>حذف</th> {/* Add a column for delete button */}
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
//                   <button 
//                     className="delete-record-button" 
//                     onClick={() => handleDelete(data.id)} 
//                   >
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
