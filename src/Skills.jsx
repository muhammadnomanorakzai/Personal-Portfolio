import React, { useState, useEffect } from "react";
import "./assets/skills.css";

const skills = [
  { name: "HTML", level: "99%" },
  { name: "CSS", level: "95%" },
  { name: "Bootstrap", level: "100%" },
  { name: "JavaScript", level: "95%" },
  { name: "React JS", level: "85%" },
  { name: "PHP", level: "40%" },
  { name: "Codeigniter 03", level: "60%" },
  { name: "ML", level: "75%" },
  { name: "DL", level: "70%" },
  { name: "CV", level: "65%" },
];

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".skills-container");
      if (element) {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          setAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial render

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`skills-container ${animated ? "animated" : ""}`}>
      <h2 className="skills-title">
        Development <span className="highlight">Skills</span>
      </h2>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-label">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: animated ? skill.level : "0%" }}
                data-level={skill.level}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
