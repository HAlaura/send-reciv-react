// DataContext.js
import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [dataList, setDataList] = useState([]);

    const addData = (formData) => {
        setDataList((prevData) => [...prevData, formData]);
    };

    return (
        <DataContext.Provider value={{ dataList, addData }}>
            {children}
        </DataContext.Provider>
    );
};
