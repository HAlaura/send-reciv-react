

// // FormComponent.js
// import React, { useState, useContext } from 'react';

// import { useNavigate } from 'react-router-dom';
// import './formcomponent.css';
// import { DataContext } from './SaderPag';

// const FormComponent = () => {
//     const { addData } = useContext(DataContext); // استخدام السياق
//     const [formData, setFormData] = useState({
//         priority: '',
//         sender: '',
//         subject: '',
//         notes: '',
//         date: '',
//         number: '',
//     });

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         addData(formData); // إضافة البيانات باستخدام السياق
//         setFormData({ priority: '', sender: '', subject: '', notes: '', date: '', number: '' }); // إعادة تعيين الحقول
//         navigate('/datatable');
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <table>
//                 <tbody>
//                     <tr>
//                         <td><label>الأولوية:</label></td>
//                         <td><input type="text" name="priority" value={formData.priority} onChange={handleChange} required /></td>
//                     </tr>
//                     <tr>
//                         <td><label>جهة الإرسال:</label></td>
//                         <td><input type="text" name="sender" value={formData.sender} onChange={handleChange} required /></td>
//                     </tr>
//                     <tr>
//                         <td><label>الموضوع:</label></td>
//                         <td><input type="text" name="subject" value={formData.subject} onChange={handleChange} required /></td>
//                     </tr>
//                     <tr>
//                         <td><label>الملاحظات:</label></td>
//                         <td><textarea name="notes" value={formData.notes} onChange={handleChange} /></td>
//                     </tr>
//                     <tr>
//                         <td><label>التاريخ:</label></td>
//                         <td><input type="date" name="date" value={formData.date} onChange={handleChange} required /></td>
//                     </tr>
//                     <tr>
//                         <td><label>العدد:</label></td>
//                         <td><input type="number" name="number" value={formData.number} onChange={handleChange} required /></td>
//                     </tr>
//                 </tbody>
//             </table>
//             <button type="submit">إضافة</button>
//         </form>
//     );
// };

// export default FormComponent;

import React, { useState, createContext } from 'react';
import FormComponent from './FormComponent';
import { useNavigate } from 'react-router-dom';
import './saderPag.css';

export const DataContext = createContext();

const SaderPag = () => {
    const [dataList, setDataList] = useState([
        {
            priority: 'عالي',
            sender: 'شركة XYZ',
            subject: 'موضوع 1',
            notes: 'ملاحظات 1',
            date: '2023-10-01',
            number: 5,
        },
        {
            priority: 'متوسط',
            sender: 'شركة ABC',
            subject: 'موضوع 2',
            notes: 'ملاحظات 2',
            date: '2023-10-02',
            number: 3,
        },
    ]);
    
    const navigate = useNavigate();

    const handleFormSubmit = (formData) => {
        setDataList([...dataList, formData]);
        navigate('/datatable');
    };

    return (
        <DataContext.Provider value={{ dataList, addData: handleFormSubmit }}>
            <div className="sader-container">
                <h1>صفحة الصادر</h1>
                <FormComponent />
            </div>
        </DataContext.Provider>
    );
};

export default SaderPag;
