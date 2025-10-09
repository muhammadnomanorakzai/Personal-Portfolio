import React, { useState, useEffect } from "react";
import "./assets/aboutDetails.css";

function AboutDetails() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".about-details");
      if (element) {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial render

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`about-details ${isVisible ? "visible" : ""}`}>
      <div className="personal-info card-hover">
        <h2 className="section-title">Personal Info</h2>
        <ul className="info-list">
          <li>
            <span>Name:</span> Muhammad Noman
          </li>

          <li>
            <span>From:</span> Pakistan
          </li>
          <li>
            <span>Experience:</span> 1+ Years
          </li>
          <li>
            <span>Freelance:</span> Available
          </li>
        </ul>
      </div>

      <div className="education card-hover">
        <h2 className="section-title">Education</h2>
        <div className="education-item">
          <h3>BS Computer Science</h3>
          <p className="institution">GSSC - 2021 to 2025</p>
        </div>
        <div className="education-item">
          <h3>Computer Science</h3>
          <p className="institution">Jamal International College</p>
          <p className="description">FSC in Computer Scrience</p>
        </div>
      </div>
      <div className="education card-hover">
        <h2 className="section-title">Education</h2>
        <div className="education-item">
          <h3>Web & App Development</h3>
          <p className="institution">SMIT - 2024 to 2025</p>
          <p className="description">
            Comprehensive training in modern web technologies including
            React.js, Node.js, and database management.
          </p>
        </div>
        <div className="education-item">
          <h3>Artificial Intelligence </h3>
          <p className="institution">
            Corvit College Systems - july-2025 to November-2025
          </p>
          <p className="description">ML/DL/NLP(Computer Vision)</p>
        </div>
      </div>
    </div>
  );
}

export default AboutDetails;
