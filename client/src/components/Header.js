import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.svg'; // Make sure this file exists

function Header() {
  return (
    <header className="header">
      <nav>
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Hamza Syed Portfolio" className="logo-image" />
          </Link>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;