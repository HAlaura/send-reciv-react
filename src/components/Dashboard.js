import React from 'react';
import './Dashboard.css'; // تأكد من تضمين التنسيقات الصحيحة
import './Sidebar.css'; // تضمين التنسيقات الخاصة بالسايد بار
import './Header.css'
import Sidebar from "./Sidebar";
import Header from './Header';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Header/>
            <aside className="sidebar">
               <Sidebar/>

            </aside>
            <main className="content">
                <h2>مرحبًا بكم في نظام الصادر والوارد</h2>
                <p>يمكنك اختيار أحد الخيارات من القائمة الجانبية للبدء.</p>
            </main>
        </div>
    );
};

export default Dashboard;
