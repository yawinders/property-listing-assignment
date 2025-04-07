import { createContext, useContext, useEffect, useState, useRef } from "react";
import { useBookingContext } from "./bookingContext";

const filterSearchContext = createContext();

export function useFilterSearchContext() {
    return useContext(filterSearchContext);
}

export const CustomFilterSearchContext = ({ children }) => {
    const { data } = useBookingContext();
    const [searchedLocation, setSearchedLocation] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [filteredData, setFilteredData] = useState([]);
    const [price, setPrice] = useState(22000);
    // console.log("filteredData", filteredData);

    useEffect(() => {
        setFilteredData(data)


    }, [])


    const debounceTimer = useRef(null);


    const applyFilters = (searchVal, priceVal) => {
        const filtered = data.filter((apart) => {
            const matchesSearch = searchVal.trim()
                ? apart.location.toLowerCase().includes(searchVal.toLowerCase())
                : true;
            const matchesPrice = apart.price <= priceVal;

            return matchesSearch && matchesPrice;
        });

        setFilteredData(filtered);
    };

    const handleSearchChange = (e) => {
        console.log("value typed:", e.target.value); // Debug log
        const val = e.target.value.toLowerCase();
        setSearchedLocation(val);

        if (val === "") {
            console.log("empty");
            setFilteredData([]);
            console.log(filteredData);

            return;
        }
        else {
            console.log("else");

            applyFilters(val, price); // Only apply filters when input is not empty

        }

    };

    const handlePriceChange = (e) => {
        const newPrice = Number(e.target.value);
        setPrice(newPrice);
        // console.log(newPrice);

        applyFilters(searchedLocation, newPrice);

    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 40) {
            setSelectedIndex((prev) => (selectedIndex === filteredData.length - 1 ? 0 : prev + 1));
        } else if (e.keyCode === 38) {
            setSelectedIndex((prev) => (selectedIndex === 0 ? filteredData.length - 1 : prev - 1));
        } else if (e.key === "Enter" && selectedIndex !== -1) {
            setSearchedLocation(filteredData[selectedIndex].location);
            setFilteredData([]);
            setSelectedIndex(-1);
        }
    };

    return (
        <filterSearchContext.Provider
            value={{
                handleSearchChange,
                filteredData,
                setFilteredData,
                handleKeyDown,
                searchedLocation,
                setSearchedLocation,
                selectedIndex,
                setSelectedIndex,
                price,
                setPrice,
                handlePriceChange,
                applyFilters
            }}
        >
            {children}
        </filterSearchContext.Provider>
    );
};
