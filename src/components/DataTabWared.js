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


//
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DataTablee.css';

const DataTabWared = ({ records = [] }) => { // تعيين قيمة افتراضية
  const [searchTerm, setSearchTerm] = useState('');

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
