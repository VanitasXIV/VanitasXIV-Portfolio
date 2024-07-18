// DarkModeToggle.jsx
import React, { useState, useEffect } from 'react';
import '../assets/styles.css'; // Adjust the path as necessary

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <a className="dark-mode-button" onClick={toggleDarkMode}>
            <i className="ion ion-md-moon"></i>
        </a>
    );
};

export default DarkModeToggle;
