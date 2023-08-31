import React, { createContext, useContext, useEffect, useState } from 'react';

const API_URL = `https://api.spacexdata.com/v3/capsules`;

const AppContext = createContext();

export const useData = () => {
    return useContext(AppContext);
};

const AppProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [selectedCapsule, setSelectedCapsule] = useState(null);
    // const [currentPage, setCurrentPage] = useState(1);
    // const itemsPerPage = 10;

    useEffect(() => {
        fetchData(API_URL);
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setResults(data);
        } catch (error) {
            console.error('Error fetching capsules:', error);
        }
    };

    const paginate = (data) => {
        setResults(data);
    };

    return (
        <AppContext.Provider
            value={{ results, selectedCapsule, setSelectedCapsule, paginate }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
