import React, { useEffect, useState } from "react";
import "./assets/experienceCard.css";

function Experience() {
  // **Adding Scroll Animation using useEffect**
  useEffect(() => {
    function checkExperienceCards() {
      const triggerPoint = (window.innerHeight / 5) * 4;
      const experienceCards = document.querySelectorAll(".experienceCard");

      experienceCards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerPoint) {
          card.classList.add("showExperienceCard");
        } else {
          card.classList.remove("showExperienceCard");
        }
      });
    }

    window.addEventListener("scroll", checkExperienceCards);
    checkExperienceCards(); // Run initially

    return () => {
      window.removeEventListener("scroll", checkExperienceCards);
    };
  }, []);

  const experienceCards = [
    {
      icon: <i className="fa-solid fa-circle-dot fa-fade"></i>,
      name: "Muhammad Noman",
      heading: "Full Stack Web Developer",
      description: `Experienced In Architecting And Developing Full Stack Web Applications With Secure API Integrations, Robust Backend Logic, And Responsive User Interfaces. Responsible For Managing The Entire Development Lifecycle, From Frontend Implementation To Backend Services And Deployment.`,

      buttons: {
        links: [
          "https://github.com/muhammadnomanorakzai?tab=repositories",
          "https://www.linkedin.com/in/muhammad-noman-7a3156339/",
          "/projects",
        ],
        content: ["Github", "LinkdIn", "Projects"],
      },
    },
  ];

  return (
    <section id="experience">
      <div className="card-container">
        {experienceCards.map((card, index) => {
          const [isExpanded, setIsExpanded] = useState(false);
          const words = card.description.split(" ");
          const shortDescription = words.slice(0, 20).join(" ") + "...";

          return (
            <div key={index} className="experienceCard">
              <h4>
                {card.icon} {card.name}
              </h4>
              <h3>{card.heading}</h3>
              <p>
                {isExpanded ? card.description : shortDescription}
                {words.length > 20 && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="more-less-btn">
                    {isExpanded ? "less" : "more"}
                  </button>
                )}
              </p>
              <div className="experienceButtons">
                {card.buttons.links.map((link, btnIndex) => (
                  <a
                    key={btnIndex}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer">
                    {card.buttons.content[btnIndex]}
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
