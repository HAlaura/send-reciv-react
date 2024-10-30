
import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';

const WaredArchive = ({ archivedRecords }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecords = archivedRecords.filter(record =>
    Object.values(record).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="archive-container">
      <h2>الأرشيف</h2>
      <input
        type="text"
        placeholder="ابحث في السجلات..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <p>عدد السجلات: {filteredRecords.length}</p>
      {filteredRecords.length > 0 ? (
        <table className="archive-table">
          <thead>
            <tr>
              <th>الأولوية</th>
              <th>جهة الارسال</th>
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

export default WaredArchive;
