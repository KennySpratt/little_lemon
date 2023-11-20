import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Homepage';
import About from './About';
import Menu from './Menu';
import Reservations from './Reservations';
import Order from './Order';
import Login from './Login';

function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/order" element={<Order />} />
                <Route path="/login" element={<Login />} />
                {/* Add more routes as needed */}
            </Routes>
        </div>
    );
}

export default Main;


