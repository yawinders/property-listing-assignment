import React from 'react'
import styles from './Navbar.module.css';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useToggleTheme } from '../../hooks/useToggleTheme';
import { useTheme } from '../../context/ThemeConext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    console.log(theme);

    return (
        <div className={`${styles.nav} ${theme == 'light' ? 'dark' : 'light'}`}>
            <div className={styles.heading}>Hotel Booking</div>
            <div onClick={toggleTheme} className={styles.toggleButton}>
                {theme == 'dark' ? <MdLightMode /> : <MdDarkMode />}
            </div>
        </div>
    )
}

export default Navbar