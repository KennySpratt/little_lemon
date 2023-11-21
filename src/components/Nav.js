import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/Logo.jpg";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`nav-bar ${menuOpen ? "open" : ""}`}>
            <a href="/">
                <img src={logo} alt="logo" />
            </a>
            {/* Mobile navbar */}
            <div className='menu-icon' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/order">Order Online</Link></li>
                <li><Link to="/login">Sign-up/Login</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
