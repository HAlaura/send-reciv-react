// import React from 'react';
// import './DataTablee.css';

// const DataTablee = () => {
//   // هنا يجب أن تقوم باسترجاع البيانات من السيرفر أو البيانات المحلية
//   const dataList = []; // استبدل هذا بقائمة البيانات

//   return (
//     <div className="data-table-container">
//       <h2>البيانات المضافة</h2>
//       <table className="data-table">
//         <thead>
//           <tr>
//             <th>الأولوية</th>
//             <th>جهة الصادر</th>
//             <th>الموضوع</th>
//             <th>التاريخ</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dataList.length > 0 ? (
//             dataList.map((data, index) => (
//               <tr key={index}>
//                 <td>{data.priority}</td>
//                 <td>{data.sender}</td>
//                 <td>{data.subject}</td>
//                 <td>{data.date}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4">لا توجد بيانات لعرضها</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DataTablee;
//2
// import React, { useEffect, useState } from 'react';
// import './DataTablee.css';

// const DataTablee = () => {
//   const [dataList, setDataList] = useState([]);

//   useEffect(() => {
//     // استرجاع البيانات من localStorage عند تحميل المكون
//     const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
//     setDataList(storedRecords);
//   }, []);

//   return (
//     <div className="data-table-container">
//       <h2>البيانات المضافة</h2>
//       <table className="data-table">
//         <thead>
//           <tr>
//             <th>الأولوية</th>
//             <th>جهة الصادر</th>
//             <th>الموضوع</th>
//             <th>التاريخ</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dataList.length > 0 ? (
//             dataList.map((data, index) => (
//               <tr key={index}>
//                 <td>{data.priority}</td>
//                 <td>{data.sender}</td>
//                 <td>{data.subject}</td>
//                 <td>{data.date}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4">لا توجد بيانات لعرضها</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DataTablee;

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'; // استيراد Link من react-router-dom
// import './DataTablee.css';

// const DataTablee = () => {
//   const [dataList, setDataList] = useState([]);

//   useEffect(() => {
//     const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
//     setDataList(storedRecords);
//   }, []);

//   return (
//     <div className="data-table-container">
//       <h2>البيانات المضافة</h2>
//       <table className="data-table">
//         <thead>
//           <tr>
//             <th>الأولوية</th>
//             <th>جهة الصادر</th>
//             <th>الموضوع</th>
//             <th>التاريخ</th>
//             <th>التفاصيل</th> {/* إضافة عمود للتفاصيل */}
//           </tr>
//         </thead>
//         <tbody>
//           {dataList.length > 0 ? (
//             dataList.map((data, index) => (
//               <tr key={index}>
//                 <td>{data.priority}</td>
//                 <td>{data.sender}</td>
//                 <td>{data.subject}</td>
//                 <td>{data.date}</td>
//                 <td>
//                   <Link to={`/record/${index}`}>عرض التفاصيل</Link> {/* رابط إلى التفاصيل */}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5">لا توجد بيانات لعرضها</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DataTablee;
//10


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import './DataTablee.css';

// const DataTablee = () => {
//   const [dataList, setDataList] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
  
//   useEffect(() => {
//     const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
//     setDataList(storedRecords);
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   const filteredDataList = dataList.filter(data => 
//     data.priority.toLowerCase().includes(searchTerm) ||
//     data.sender.toLowerCase().includes(searchTerm) ||
//     data.subject.toLowerCase().includes(searchTerm) ||
//     data.date.includes(searchTerm)
//   );

//   const handleDeleteAll = () => {
//     if (window.confirm('هل تريد حذف جميع السجلات؟')) {
//       localStorage.removeItem('records');
//       setDataList([]);
//     }
//   };

//   return (
//     <div className="data-table-container">
//       <h2>البيانات المضافة</h2>
      
//       <div className="search-container">
//         <input 
//           type="text" 
//           placeholder="بحث عن جميع الحقول..." 
//           value={searchTerm} 
//           onChange={handleSearch} 
//         />
//         <Link to="/create">
//           <button className="add-button">إنشاء صادر جديد</button>
//         </Link>
//         <button className="delete-all-button" onClick={handleDeleteAll}>مسح الكل</button>
//       </div>
      
//       <table className="data-table">
//         <thead>
//           <tr>
//             <th>الأولوية</th>
//             <th>جهة الصادر</th>
//             <th>الموضوع</th>
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
//                 <td>{data.date}</td>
//                 <td>
//                   <Link to={`/record/${index}`}>عرض التفاصيل</Link>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5">لا توجد بيانات لعرضها</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DataTablee;

//11
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './DataTablee.css';

const DataTablee = () => {
  const [dataList, setDataList] = useState([]);
  const [allRecords, setAllRecords] = useState([]); // لتخزين جميع السجلات
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
    setDataList(storedRecords);
    setAllRecords(storedRecords); // حفظ جميع السجلات
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    const filtered = allRecords.filter(data => 
      data.priority.toLowerCase().includes(e.target.value.toLowerCase()) ||
      data.sender.toLowerCase().includes(e.target.value.toLowerCase()) ||
      data.subject.toLowerCase().includes(e.target.value.toLowerCase()) ||
      data.date.includes(e.target.value)
    );
    setDataList(filtered);
  };

  const handleDeleteAll = () => {
    if (window.confirm('هل تريد حذف جميع السجلات؟')) {
      localStorage.removeItem('records');
      setDataList([]);
      setAllRecords([]); // تفريغ جميع السجلات
    }
  };

  const handleShowAll = () => {
    setSearchTerm(''); // إعادة تعيين قيمة البحث
    setDataList(allRecords); // عرض جميع السجلات
  };

  return (
    <div className="data-table-container">
      <h2>الصادر</h2>
      
      <div className="search-container">
        <input 
          type="text" 
          placeholder="بحث عن جميع الحقول..." 
          value={searchTerm} 
          onChange={handleSearch} 
        />
        <Link to="/create">
          <button className="add-button">إضافة</button>
        </Link>
        <button className="delete-all-button" onClick={handleDeleteAll}>مسح الكل</button>
        <button className="show-all-button" onClick={handleShowAll}>عرض كافة السجلات</button> {/* زر عرض كافة السجلات */}
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
          {dataList.length > 0 ? (
            dataList.map((data, index) => (
              <tr key={index}>
                <td>{data.priority}</td>
                <td>{data.sender}</td>
                <td>{data.subject}</td>
                <td className="note">{data.notes}</td>
                <td>{data.date}</td>
                <td>
                  <Link to={`/record/${index}`}>عرض التفاصيل</Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">لا توجد بيانات لعرضها</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTablee;

