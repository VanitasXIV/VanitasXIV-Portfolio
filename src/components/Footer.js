import React from 'react';
import '../styles.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2024 Iván Gonzalo Gómez</p>
            <nav className="footer-nav">
                <a href="#hero">Home</a>
                <a href="#about">About</a>
                <a href="#blog">Blog</a>
            </nav>
        </footer>
    );
};

export default Footer;
