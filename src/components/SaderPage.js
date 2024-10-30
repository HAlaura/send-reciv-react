import React, { useState } from 'react';
import './saderpage.css'; // تأكد من إضافة ملف CSS

function SaderPage() {
    const [formData, setFormData] = useState({
        priority: '',
        sender: '',
        subject: '',
        notes: '',
        date: '',
        number: '',
    });

    const [dataList, setDataList] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setDataList([...dataList, formData]);
        setFormData({
            priority: '',
            sender: '',
            subject: '',
            notes: '',
            date: '',
            number: '',
        });
    };

    return (
        <div className="sader-container">
            <h1>صفحة الصادر</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td><label>الأولوية:</label></td>
                            <td>
                                <input 
                                    type="text" 
                                    name="priority" 
                                    value={formData.priority} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>جهة الإرسال:</label></td>
                            <td>
                                <input 
                                    type="text" 
                                    name="sender" 
                                    value={formData.sender} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>الموضوع:</label></td>
                            <td>
                                <input 
                                    type="text" 
                                    name="subject" 
                                    value={formData.subject} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>الملاحظات:</label></td>
                            <td>
                                <textarea 
                                    name="notes" 
                                    value={formData.notes} 
                                    onChange={handleChange} 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>التاريخ:</label></td>
                            <td>
                                <input 
                                    type="date" 
                                    name="date" 
                                    value={formData.date} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>العدد:</label></td>
                            <td>
                                <input 
                                    type="number" 
                                    name="number" 
                                    value={formData.number} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit">إضافة</button>
            </form>

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
                    {dataList.map((data, index) => (
                        <tr key={index}>
                            <td>{data.priority}</td>
                            <td>{data.sender}</td>
                            <td>{data.subject}</td>
                            <td>{data.notes}</td>
                            <td>{data.date}</td>
                            <td>{data.number}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SaderPage;
