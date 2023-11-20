import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/Logo.jpg';


function Header() {
  return (
      <header>
          <Link to="/">
              <img src={logo} alt="Little Lemon Logo" className="logo" />
          </Link>
      </header>
  );
}

export default Header;
