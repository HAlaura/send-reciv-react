import React from 'react';

const DisplayRecords = ({ records }) => {
  return (
    <div>
      <h2>السجلات</h2>
      {records.length > 0 ? (
        <ul>
          {records.map(record => (
            <li key={record.id}>
              {record.date} - {record.sender} - {record.subject}
            </li>
          ))}
        </ul>
      ) : (
        <p>لا توجد سجلات لعرضها.</p>
      )}
    </div>
  );
};

export default DisplayRecords;
