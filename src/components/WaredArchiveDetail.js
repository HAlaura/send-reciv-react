import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ArchiveDetail.css';

const WaredArchiveDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { record } = location.state; // استرجاع السجل من الحالة

  const handleBack = () => {
    navigate('/waredarchive'); // العودة إلى صفحة الأرشيف
  };

  return (
    <div className="wared-archive-detail">
      <h2>تفاصيل السجل المؤرشف</h2>
      <div className="detail-item">
        <strong>جهة الإرسال:</strong> {record.sender}
      </div>
      <div className="detail-item">
        <strong>الموضوع:</strong> {record.subject}
      </div>
      <div className="detail-item">
        <strong>الأولوية:</strong> {record.priority}
      </div>
      <div className="detail-item">
        <strong>الملاحظات:</strong> {record.notes}
      </div>
      <div className="detail-item">
        <strong>التاريخ:</strong> {record.date}
      </div>
      <button onClick={handleBack}>العودة</button>
    </div>
  );
};

export default WaredArchiveDetail;
