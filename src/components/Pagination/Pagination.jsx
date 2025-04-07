import React from 'react'
import { data } from '../../../data'
import styles from './Pagination.module.css'
import { useBookingContext } from '../../context/bookingContext';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useTheme } from '../../context/ThemeConext';
const Pagination = () => {
    const { page, setPage } = useBookingContext();
    const { theme } = useTheme()

    return (<div >


        <span onClick={() => setPage((prev) => prev > 1 ? prev - 1 : data.length / 6)} className={styles.arrowLeft}><FaArrowLeft /></span>
        {
            [...Array(data.length / 6)].map((_, i) => {
                return <span onClick={() => setPage(i + 1)} className={`${styles.box} ${page == i + 1 ? styles.boxColor : null}`} key={i}

                >{i + 1}</span>
            })
        }
        <span onClick={() => setPage((prev) => prev < data.length / 6 ? prev + 1 : 1)} className={styles.arrowRight}><FaArrowRight /></span>
    </div>
    )
}

export default Pagination