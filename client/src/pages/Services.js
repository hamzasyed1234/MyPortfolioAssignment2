import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      icon: '💻',
      title: "Web Development",
      description: "Custom website development using modern technologies like React, Node.js, and responsive design principles.",
      features: ["Responsive Design", "SEO Optimization", "Fast Performance", "Cross-browser Compatibility"]
    },
    {
      icon: '📱',
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      features: ["React Native", "iOS & Android", "UI/UX Design", "App Store Deployment"]
    },
    {
      icon: '⚡',
      title: "General Programming",
      description: "Software development solutions including desktop applications, scripts, and automation tools.",
      features: ["Python Scripts", "Java Applications", "C++ Programs", "Automation Tools"]
    },
    {
      icon: '🗃️',
      title: "Database Design",
      description: "Database architecture and management solutions for efficient data storage and retrieval.",
      features: ["SQL Databases", "NoSQL Solutions", "Data Modeling", "Performance Optimization"]
    },
    {
      icon: '🔗',
      title: "API Development",
      description: "RESTful API development and integration services for seamless data exchange.",
      features: ["REST APIs", "GraphQL", "Authentication", "Documentation"]
    },
    {
      icon: '🎨',
      title: "UI/UX Design",
      description: "User interface and experience design focused on usability and aesthetic appeal.",
      features: ["Wireframing", "Prototyping", "User Testing", "Design Systems"]
    }
  ];

  return (
    <div className="services-container">
      <div className="services-header">
        <h1>My Services</h1>
        <p>Professional solutions tailored to your needs</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              <span className="icon-emoji">{service.icon}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>
            <button className="service-btn">Learn More</button>
          </div>
        ))}
      </div>

      <div className="services-cta">
        <h2>Ready to Start Your Project?</h2>
        <p>Let's discuss how I can help bring your ideas to life</p>
        <button className="cta-btn">Get Free Consultation</button>
      </div>
    </div>
  );
}

export default Services;