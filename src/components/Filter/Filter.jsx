import React from 'react'
import { useFilterSearchContext } from '../../context/filterSearchContext'
import styles from './Filter.module.css'
import { useToggleTheme } from '../../hooks/useToggleTheme'
import { useTheme } from '../../context/ThemeConext'

const Filter = () => {
    const { price, handlePriceChange } = useFilterSearchContext()
    const { theme } = useTheme();

    return (
        <div style={{ padding: '10px', borderRadius: '10px' }} className={`${theme == 'light' ? 'bgDark' : 'light'}`}>
            <input
                className={styles.inputPrice}
                type="range"
                min={0}
                max={22000}
                value={price}
                onChange={handlePriceChange}

            />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>₹{price}</span>
                <span>₹22000</span>
            </div>
        </div>
    )
}

export default Filter