import React, { useContext, useEffect, useState } from 'react'
import { createContext } from "react";
import { data as dummyData } from '../../data.jsx';
const bookingContext = createContext();

export function useBookingContext() {
    const result = useContext(bookingContext);
    return result;
}


export const CustombookingContext = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1)
    useEffect(() => {
        // simulate loading delay
        setTimeout(() => {
            setData(dummyData);
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <bookingContext.Provider value={{ data, setData, loading, setLoading, page, setPage }}>
            {children}
        </bookingContext.Provider>
    )
}

export default bookingContext