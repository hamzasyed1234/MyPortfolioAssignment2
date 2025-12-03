import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.svg';
import { useAuth } from '../context/AuthContext.js';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, signout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signout();
    navigate('/signin');
  };

  // Extract first name from full name
  const getFirstName = () => {
    if (!user || !user.name) return 'User';
    return user.name.split(' ')[0];
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Logo" className="logo-image" loading="lazy" />
          </Link>

          <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={menuOpen ? "line open" : "line"}></span>
            <span className={menuOpen ? "line open" : "line"}></span>
            <span className={menuOpen ? "line open" : "line"}></span>
          </button>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          {user ? (
            <>
              <li className="welcome-text">Welcome, {getFirstName()}</li>
              <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/signin">Sign In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default React.memo(Header);