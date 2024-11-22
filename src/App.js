
// import React from 'react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
import CreateRecord from './components/CreateRecord';
import DataTablee from './components/DataTablee';
import RecordDetail from './components/RecordDetail';
import EditRecord from './components/EditRecord'; // صفحة التعديل
import Archive from './components/Archive'; // صفحة الأرشيف
import ArchiveDetail from './components/ArchiveDetail';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import WaredCreate from './components/WaredCreate';
import DataTabWared from './components/DataTabWared';
import AddArchiveRecord from './components/AddArchiveRecord';
import './App.css';
import WaredRecDetail from './components/WaredRecDetail';
import EditAndArchive from './components/EditAndArchive';
import WaredArchiveDetail from './components/WaredArchiveDetail';
import Layout from './components/Layout';

// new wared


const App = () => {
 
    const [records, setRecords] = useState([]);
  
    const addRecord = (newRecord) => {
      setRecords((prevRecords) => [...prevRecords, newRecord]);
    };
  
  return (
    
    <Router>
    
      {/* <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header /> */}
           
          <Routes>
          <Route path="/" element={<Login/>} />
          <Route element={<Layout/>}>
          <Route path="/dashbored" element={<Dashboard />} />
            <Route path="/create" element={<CreateRecord />} />
            <Route path="/datatable" element={<DataTablee />} />
            <Route path="/record/:id" element={<RecordDetail />} />
            <Route path="/edit/:id" element={<EditRecord />} />

            <Route path="/archive" element={<Archive />} />
            <Route path="/add-archive" element={<AddArchiveRecord />} />
            <Route path="/archive/:id" element={<ArchiveDetail />} />
           */warad*/
            {/* <Route path="/wared" element={<WaredCreate />} />
            <Route path="/tabwared" element={<DataTabWared />} />
            {/* <Route path="/datawared" element={<DataTabWared />} /> */}
            <Route path="/datawared/:id" element={<WaredRecDetail />} />*/
            <Route path="/wared" element={<WaredCreate addRecord={addRecord} />} />
        <Route path="/tabwared" element={<DataTabWared records={records} />} />
        <Route path="/datawared/:id" element={<WaredRecDetail />} />
            <Route path="/archwared" element={<EditAndArchive />} /> 
            <Route path="/waredarchivedetail/:index" element={<WaredArchiveDetail />} />
    
           </Route>
           
          </Routes>
      
    </Router>
  );
};

export default App;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import CreateRecord from './components/CreateRecord';
// import DataTablee from './components/DataTablee';
// import RecordDetail from './components/RecordDetail';
// import EditRecord from './components/EditRecord';
// import Archive from './components/Archive';
// import ArchiveDetail from './components/ArchiveDetail';
// import Dashboard from './components/Dashboard';
// import Login from './components/Login';
// import './App.css';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = () => {
//     setIsAuthenticated(true); // تحديث الحالة عند تسجيل الدخول
//   };

//   return (
//     <Router>
//       <div className="app-container">
//         {/* عرض السايد بار والهيدر فقط إذا كان المستخدم مسجلاً للدخول */}
//         {isAuthenticated && <Sidebar />}
//         {isAuthenticated && <Header />}
//         <div className="main-content">
//           <Routes>
//             <Route path="/" element={<Login onLogin={handleLogin} />} />
//             <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
//             <Route path="/create" element={isAuthenticated ? <CreateRecord /> : <Navigate to="/" />} />
//             <Route path="/datatable" element={isAuthenticated ? <DataTablee /> : <Navigate to="/" />} />
//             <Route path="/record/:id" element={isAuthenticated ? <RecordDetail /> : <Navigate to="/" />} />
//             <Route path="/edit/:id" element={isAuthenticated ? <EditRecord /> : <Navigate to="/" />} />
//             <Route path="/archive" element={isAuthenticated ? <Archive /> : <Navigate to="/" />} />
//             <Route path="/archive/:id" element={isAuthenticated ? <ArchiveDetail /> : <Navigate to="/" />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;
