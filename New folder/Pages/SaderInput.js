

import React, { useState } from 'react';
import'./saderinput.css';

const SaderInput = () => {
    const [subject, setSubject] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDate] = useState('');
    const [sendingParty, setSendingParty] = useState('');
    const [image, setImage] = useState(null);
    const [notes, setNotes] = useState('');
    const [priority, setPriority] = useState('low'); // إضافة حالة للأولوية

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('subject', subject);
        formData.append('number', number);
        formData.append('date', date);
        formData.append('sendingParty', sendingParty);
        if (image) {
            formData.append('image', image);
        }
        formData.append('notes', notes);
        formData.append('priority', priority); // إضافة الأولوية إلى بيانات النموذج

        console.log('Data submitted:', {
            subject,
            number,
            date,
            sendingParty,
            image,
            notes,
            priority,
        });
        alert("تم إرسال البيانات بنجاح!");
    };

    return (
        <div className="sader-container">
            <h1>إنشاء ملف صادر</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>الموضوع:</label>
                    <input 
                        type="text" 
                        value={subject} 
                        onChange={(e) => setSubject(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>العدد:</label>
                    <input 
                        type="text" 
                        value={number} 
                        onChange={(e) => setNumber(e.target.value)} 
                        required 
                        pattern="\d*" 
                        title="يرجى إدخال رقم صحيح"
                    />
                </div>
                <div>
                    <label>التاريخ:</label>
                    <input 
                        type="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>جهة الإرسال:</label>
                    <input 
                        type="text" 
                        value={sendingParty} 
                        onChange={(e) => setSendingParty(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>إرسال ملف صورة:</label>
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={(e) => setImage(e.target.files[0])} 
                    />
                </div>
                <div>
                    <label>الملاحظات:</label>
                    <textarea 
                        value={notes} 
                        onChange={(e) => setNotes(e.target.value)} 
                        rows="4" 
                        placeholder="أدخل ملاحظاتك هنا..."
                    />
                </div>
                <div>
                    <label>الأولوية:</label>
                    <select 
                        value={priority} 
                        onChange={(e) => setPriority(e.target.value)} 
                    >
                        <option value="low">عاجل</option>
                        <option value="medium">عادي</option>
                        <option value="high">عاجل جدا</option>
                        <option value="high">سري</option>
                    </select>
                </div>
                <button type="submit">إنشاء</button>
            </form>
        </div>
    );
};

export default SaderInput;
