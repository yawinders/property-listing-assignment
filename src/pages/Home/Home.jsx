import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styles from './Home.module.css';
import Apartment from '../../components/Apartments/Apartments.jsx'
import Search from '../../components/Search/Search.jsx';
import Filter from '../../components/Filter/Filter.jsx';
import { useToggleTheme } from '../../hooks/useToggleTheme.jsx';
import { useTheme } from '../../context/ThemeConext.jsx';
const Home = () => {
    const { theme } = useTheme();
    return (
        <div>
            <Navbar />
            <div className={`${styles.homeParent} ${theme == 'light' ? 'bgDark' : 'bgLight'}`}>
                <div className={`${styles.SearchFilter} ${theme == 'light' ? 'dark' : 'light'} `} >
                    <Filter />
                    <Search />

                </div>
                <div className={styles.apartment}>
                    <Apartment />
                </div>
            </div>
        </div>
    )
}

export default Home