
import React, { useContext } from 'react';
import { DataContext } from './SaderPag'; // تأكد من أنك تستورد من DataContext.js
import './datatable.css';

const DataTable = () => {
   
        const { dataList } = useContext(DataContext);
        console.log("dataList:", dataList);  // تحقق من السياق
    // const { dataList } = context || {}; // تجنب الأخطاء إذا كان السياق غير موجود
    return (
        <div className="data-table-container">
        <h2>البيانات المضافة</h2>
        <table className="data-table">
            <thead>
                <tr>
                    <th>الأولوية</th>
                    <th>جهة الإرسال</th>
                    <th>الموضوع</th>
                    <th>الملاحظات</th>
                    <th>التاريخ</th>
                    <th>العدد</th>
                </tr>
            </thead>
            <tbody>
                {dataList.length > 0 ? (
                    dataList.map((data, index) => (
                        <tr key={index}>
                            <td>{data.priority}</td>
                            <td>{data.sender}</td>
                            <td>{data.subject}</td>
                            <td>{data.notes}</td>
                            <td>{data.date}</td>
                            <td>{data.number}</td>
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

export default DataTable;
