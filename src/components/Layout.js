import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Header from './Header.js'; // Adjust the import path
import Sidebar from './Sidebar.js';
// import './Layout.css';


const Layout = () => {
    return (
        <div className="layout-container">
            <Sidebar />
            <div className="main-container">
                <Header />
                <div className="content">
                    <Outlet /> {/* Render child routes here */}
                </div>
            </div>
        </div>
    );
};

export default Layout;
