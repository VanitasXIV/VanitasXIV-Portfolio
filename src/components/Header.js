import React from 'react';
import '../styles.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="navbar-logo">My Portfolio</div>
                <ul className="navbar-menu">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
