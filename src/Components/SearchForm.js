/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AppContext, useData } from './Context';
import CapsulePopup from './CapsulePopup';

const SpaceXSearch = () => {
    const { setSelectedCapsule, paginate } = useContext(AppContext);
    const { results } = useData();
    const [filters, setFilters] = useState({
        status: '',
        original_launch: '',
        type: '',
    });

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const fetchData = async () => {
        const query = new URLSearchParams(filters).toString();

        try {
            const response = await axios.get(`https://api.spacexdata.com/v3/capsules?${query}`);
            paginate(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        setCurrentPage(1);
        fetchData();
    }, [filters]);

    const handleFilterChange = (key, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [key]: value,
        }));
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = results.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-8 text-center text-sky-200 hover:text-cyan-900">
                SpaceX Capsules <span className='text-blue-600 hover:text-red-400'>Search</span>
            </h1>
            <div className="px-16 w-full relative justify-center grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {Object.entries(filters).map(([key, value]) => (
                    <input className="relative w-full items-center justify-center rounded-full py-2 px-8 border box-border border-[#9ca0d2] 
                        font-medium text-cyan-200 hover:shadow-2xl caret-teal-400 focus:outline-none bg-transparent focus:ring-2 transition 
                        duration-300 ease-in-out focus:ring-offset-2 flex focus:shadow-outline transform hover:scale-105 space-y-2
                        placeholder-cyan-200 hover:placeholder-gray-500"
                        key={key}
                        type="text"
                        placeholder={key.replace('_', ' ')}
                        value={value}
                        onChange={(e) => handleFilterChange(key, e.target.value)}
                    />
                ))}
            </div>
            <div className="mt-8">
                <h2 className="text-4xl font-semibold mb-6 text-center text-sky-200 hover:text-cyan-900">
                    Results:
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {currentItems.map((capsule) => (
                        <div className="rounded shadow border border-sky-700 p-4 cursor-pointer hover:border-sky-950 hover:shadow-2xl relative 
                            bg-transparent text-sky-200 focus:ring-2 focus:ring-offset-2 transition duration-300 ease-in-out focus:outline-none 
                            focus:shadow-outline transform hover:scale-105"
                            key={capsule.capsule_serial}
                            onClick={() => setSelectedCapsule(capsule)}
                        >
                            <h2 className="text-xl font-semibold">{capsule.capsule_serial}</h2>
                            <p className="text-gray-500">{capsule.type}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-4">
                    {Array.from({ length: Math.ceil(results.length / itemsPerPage) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`mx-1 px-4 py-2 rounded ${
                                currentPage === index + 1
                                    ? 'bg-blue-500 text-white border border-gray-200'
                                    : 'bg-transparent text-white hover:bg-blue-500 hover:text-cyan-200 border border-sky-700'
                            } focus:outline-none focus:border-cyan-100 transition`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
            <CapsulePopup />
        </div>
    );
};

export default SpaceXSearch;
