import React, { useState } from 'react';
import logo from "../assets/Logo.jpg";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`nav-bar ${menuOpen ? "open" : ""}`}>
            <div className='nav-image'>
            <a href="/">
                <img src={logo} alt="logo" />
            </a>
            </div>
            {/* Mobile navbar */}
            <div className='menu-icon' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <div>
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/booking">Reservations</a></li>
                <li><a href="/order">Order Online</a></li>
                <li><a href="/login">Sign-up/Login</a></li>
            </ul>
            </div>
        </nav>
    );
};

export default Nav;
