import React from 'react';
import './About.css';
import profileImage from '../assets/profile.jpg'; // Import your image

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
        <p>Get to know me better</p>
      </div>
      
      <div className="about-content">
        <div className="profile-section">
          <div className="profile-image">
            <img src={profileImage} alt="Hamza Syed" className="profile-photo" />
          </div>
          
          <div className="profile-info">
            <h2>Hi, I'm Hamza Syed</h2>
            <p className="tagline">Software Engineering Student</p>
            <p className="bio">
              Welcome to my personal space! I'm passionate about web development and creating 
              amazing user experiences. With experience in modern technologies, I love building 
              solutions that make a difference.
            </p>
          </div>
        </div>

        {/* Rest of your code remains the same */}
      </div>
    </div>
  );
}

export default About;