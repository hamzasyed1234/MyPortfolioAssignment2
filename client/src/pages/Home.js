import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
//initializing home
function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to My Portfolio</h1>
        <p>Discover my work, skills, and passion for development. My aim is to use my Software Engineering skills for the betterment of humanity.</p>
        <Link to="/about" className="cta-button">Learn More About Me</Link>
      </div>
    </div>
  );
}

export default Home;