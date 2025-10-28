import React from 'react';
import './Projects.css';
import calculatorImg from '../assets/calc.png';
import tictactoeImg from '../assets/tictactoe.png';
import dicegameImg from '../assets/dice.png';

// Initializes projects 
function Projects() {
  const projects = [
    {
      id: 1,
      title: "Calculator",
      image: calculatorImg
    },
    {
      id: 2,
      title: "Tic Tac Toe",
      image: tictactoeImg
    },
    {
      id: 3,
      title: "Dice Game",
      image: dicegameImg
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>Simple. Clean. Effective.</p>
      </div>

      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} className="project-preview" />
            </div>
            <h3 className="project-title">{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;