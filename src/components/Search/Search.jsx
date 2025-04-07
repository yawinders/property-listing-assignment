import React, { useEffect } from 'react'
import styles from './Search.module.css';
import { useFilterSearchContext } from '../../context/filterSearchContext';
import { useTheme } from '../../context/ThemeConext';
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';


const Search = () => {
    const { handleSearchChange, filteredData, setFilteredData, handleKeyDown, searchedLocation, setSearchedLocation, selectedIndex, setSelectedIndex, applyFilters, price } = useFilterSearchContext()
    const { theme } = useTheme();

    useEffect(() => {

        applyFilters(searchedLocation, price)




    }, [searchedLocation])

    return (
        <>


            <div className={`${styles.search} ${theme == 'light' ? 'dark' : 'light'}`} >
                <input type='text'
                    value={searchedLocation}
                    onChange={handleSearchChange}
                    onKeyDown={handleKeyDown}
                    placeholder='Search By Location ↑↓'

                />


            </div>
            <div className={`${styles.suggestionList} scrollableDiv ${theme == 'light' ? 'bgDark' : 'light'}`}>
                <ul>
                    {filteredData?.map((loc, i) =>
                        <li key={i}

                            className={styles.suggestionName}
                            onMouseEnter={() => {
                                setSelectedIndex(i)
                            }}
                            onClick={() => {

                                setSearchedLocation(filteredData[selectedIndex].location);


                            }}
                            style={{ backgroundColor: selectedIndex == i ? "#152235" : null, cursor: 'pointer', color: selectedIndex == i && theme == 'dark' ? 'white' : null }}
                        >{loc.location}</li>)}
                </ul>

            </div>
        </>
    )
}

export default Search