import React from 'react';
import './Navbar.css';
import logo from './assets/logo2.png'

function Navbar() {
  return (
    <div className="nav-main">
    <nav className="navbar">
      <div className="navbar__left">
        <img src={logo} alt="Logo" className="navbar__logo" />
      </div>
      <div className="navbar__right">
        <button className="navbar__button">Login</button>
        <button className="navbar__button">Explore</button>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
