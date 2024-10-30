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
//
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Archive.css';

const Archive = () => {
  const [archivedRecords, setArchivedRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem('archivedRecords')) || [];
    setArchivedRecords(storedRecords);
  }, []);

  const handleDelete = (index) => {
    const updatedRecords = archivedRecords.filter((_, i) => i !== index);
    setArchivedRecords(updatedRecords);
    localStorage.setItem('archivedRecords', JSON.stringify(updatedRecords));
  };

  const filteredRecords = archivedRecords.filter(record =>
    Object.values(record).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="archive-container">
      <h2>الأرشيف</h2>
      <div className="search-container">
      <input
        type="text"
        placeholder="ابحث في السجلات..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      </div>
      <p>عدد السجلات: {filteredRecords.length}</p>
      {filteredRecords.length > 0 ? (
        <table className="archive-table">
          <thead>
            <tr>
              <th>الأولوية</th>
              <th>جهة الإرسال</th>
              <th>التاريخ</th>
              <th>العدد</th>
              <th>الملاحظات</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((record, index) => (
              <tr key={index}>
                <td>{record.priority}</td>
                <td>{record.sender}</td>
                <td>{record.date}</td>
                <td>{record.number}</td>
                <td>{record.notes}</td>
                <td>
                  <Link to={`/archive/${index}`}>
                    <button>عرض التفاصيل</button>
                  </Link>
                  <button onClick={() => handleDelete(index)} style={{ marginLeft: '10px', color: 'red' }}>
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>لا توجد سجلات مؤرشفة لعرضها.</p>
      )}
    </div>
  );
};

export default Archive;


