import React from 'react';
import '../assets/styles.css';
import lars from "../assets/images/lars.JPG";
import DarkModeToggle from "./DarkModeToggle";
import darkModeLogo from "../assets/ionicons/moon-outline.svg";

const Header = () => {
    return (
        <header className="c-header">
            <div className="container">
                <div className="row">
                    <div className="c-header__inner">
                        <div className="logo">
                            <a className="logo__link" href="/">
                                <img className="logo__image" src={lars} alt="Logo" />
                            </a>
                        </div>
                        <nav className="main-nav">
                            <div className="main-nav__box">
                                <div className="nav__icon-close">
                                    <i className="ion ion-md-close"></i>
                                </div>
                                <div className="nav__title">Menu</div>
                                <DarkModeToggle></DarkModeToggle>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
