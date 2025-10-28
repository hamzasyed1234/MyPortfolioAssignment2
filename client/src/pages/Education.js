import React from 'react';
import './Education.css';
// create education information
function Education() {
  const educationData = [
    {
      degree: "Software Engineering Technology",
      school: "Centennial College",
      period: "2024 - Present ",
      status: "In Progress",
      description: "Advanced diploma program focusing on software development, system design, and programming methodologies. Gaining hands-on experience with modern technologies and software engineering practices.",
      achievements: [
        "Active in College Tech Clubs",
        
      ],
      courses: ["Object-Oriented Programming", "Web Development", "Database Design", "Data Structures", "Software Engineering Principles"]
    },
    {
      degree: "High School Diploma",
      school: "Dunbarton High School",
      period: "2020 - 2024",
      status: "Graduated: July 2024",
      description: "Completed high school education with focus on mathematics, sciences, and technology. Developed strong foundation for software engineering studies.",
      achievements: [
        "Honor Roll Student",
        "Computer Science Award",
        "Math Competition Participant"
      ],
      courses: ["Advanced Functions", "Computer Science", "Calculus & Vectors", "Physics", "English"]
    }
  ];

  const certifications = [
    {
      name: "High School Diploma",
      issuer: "Dunbarton High School",
      date: "July 2024",
      badge: "🎓"
    },
    {
      name: "Software Engineering Technology",
      issuer: "Centennial College",
      date: "In Progress (2026)",
      badge: "💻"
    }
  ];

  const skills = [
    { 
      category: "Programming Languages", 
      items: ["Java", "Python", "JavaScript", "HTML/CSS", "SQL"] 
    },
    { 
      category: "Web Technologies", 
      items: ["React", "Node.js", "Express", "REST APIs", "Git"] 
    },
    { 
      category: "Software Development", 
      items: ["Object-Oriented Programming", "Data Structures", "Algorithms", "Debugging", "Version Control"] 
    },
    { 
      category: "Tools & Platforms", 
      items: ["Visual Studio Code", "IntelliJ IDEA", "MySQL", "MongoDB", "Postman"] 
    }
  ];

  return (
    <div className="education-container">
      <div className="education-header">
        <h1>Education & Qualifications</h1>
        <p>My academic journey in software engineering and technology</p>
      </div>

      {/* Education Timeline */}
      <section className="timeline-section">
        <h2>Academic Background</h2>
        <div className="timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-period">{edu.period}</div>
                <h3>{edu.degree}</h3>
                <div className="school-info">
                  <span className="school-name">{edu.school}</span>
                  <span className={`status ${edu.status.includes('In Progress') ? 'in-progress' : 'completed'}`}>
                    {edu.status}
                  </span>
                </div>
                <p className="description">{edu.description}</p>
                
                <div className="achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>✓ {achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="courses">
                  <h4>Relevant Courses:</h4>
                  <div className="course-tags">
                    {edu.courses.map((course, i) => (
                      <span key={i} className="course-tag">{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <h2>Certifications & Diplomas</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="cert-badge">{cert.badge}</div>
              <h3>{cert.name}</h3>
              <p className="issuer">Issued by: {cert.issuer}</p>
              <span className={`cert-date ${cert.date.includes('In Progress') ? 'in-progress' : ''}`}>
                {cert.date}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3>{skillGroup.category}</h3>
              <div className="skill-tags">
                {skillGroup.items.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Current Focus */}
      <section className="current-focus">
        <h2>Current Focus</h2>
        <div className="focus-content">
          <div className="focus-item">
            <h3>🎯 Software Engineering Program</h3>
            <p>Currently pursuing Advanced Diploma in Software Engineering Technology at Centennial College</p>
            <ul>
              <li>Expected Graduation: 2026</li>
              <li>Specializing in Full-Stack Development</li>
              <li>Building projects with modern technologies</li>
            </ul>
          </div>
          <div className="focus-item">
            <h3>🚀 Career Goals</h3>
            <p>Aspiring to become a professional software developer with expertise in:</p>
            <ul>
              <li>Web Application Development</li>
              <li>Mobile App Development</li>
              <li>Database Design & Management</li>
              <li>Software Architecture</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;