import React, { useState, createContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import FormComponent from './FormComponent';
import DataTable from './DataTable';
import './saderPag.css';

export const DataContext = createContext();

const SaderPag = () => {
    const [dataList, setDataList] = useState([]);
    const navigate = useNavigate();

    const handleFormSubmit = (formData) => {
        setDataList((prevData) => [...prevData, formData]);
        navigate('/saderpag/datatable');
    };

    return (
        <DataContext.Provider value={{ dataList, addData: handleFormSubmit }}>
            <Routes>
                <Route path="/" element={<FormComponent />} />
                <Route path="/datatable" element={<DataTable />} />
            </Routes>
        </DataContext.Provider>
    );
};

export default SaderPag;
