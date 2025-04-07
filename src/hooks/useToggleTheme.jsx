import React, { useEffect, useState } from 'react'

export const useToggleTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(theme);
    }, [theme]);
    function toggleTheme() {

        setTheme((prev) => prev == 'light' ? 'dark' : 'light')

    }

    return { theme, toggleTheme };
}

