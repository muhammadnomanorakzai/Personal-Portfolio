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
      date: "2025-Present",
      heading: "CSS and Javascript",
      description:
        "From 15th December 2024 to 15th February 2025, in Web and App Development course taught by Sir Osama at SMIT, a renowned institute for IT education, mastered CSS from fundamentals to advanced techniques, working on large-scale projects. During this period, gained proficiency in Git and GitHub, while also honing teamwork skills. From 15th February to 22nd March 2025, covered foundational topics of JavaScript, further strengthening web development expertise.",
      buttons: {
        links: [
          "https://github.com/israrahmadtech/React-Projects",
          "https://github.com/israrahmadtech/HTML-CSS-Javacsript-Projects",
          "https://github.com/israrahmadtech/javascript-in-2025",
        ],
        content: ["CSS", "Projects", "Javascript"],
      },
    },
    {
      icon: <i className="fa-solid fa-circle-dot fa-fade"></i>,
      date: "2024",
      heading: "Javascript and HTML",
      description:
        "In mid-2024, revisited JavaScript from scratch through a YouTube tutorial, progressing from the basics to advanced concepts like OOP. Applied knowledge by working on multiple JavaScript projects. By the end of 2024, enrolled in a Web and App Development course taught by Sir Osama (7 years of experience) at SMIT, a renowned institute for IT education. As part of the course, revisited HTML before the beginning of 2025 to strengthen foundational skills.",
      buttons: {
        links: [
          "https://github.com/israrahmadtech/Complete-JavaScript-in-2024",
          "https://github.com/israrahmadtech",
          "https://saylaniwelfare.com/",
          "https://www.linkedin.com/in/xamqrexii/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bu0ccLaKCRaGnbRYWHlcSjw%3D%3D",
        ],
        content: ["Javascript", "HTML", "SMIT", "Osama"],
      },
    },
    {
      icon: <i className="fa-solid fa-circle-dot fa-fade"></i>,
      date: "2024",
      heading: "React Js",
      description:
        'At the start of 2024, I began learning React.js through the YouTube tutorial "Chai aur React" by Sir Hitesh Choudhary on the "Chai aur Code" channel. The course focused on hands-on projects, providing practical experience. After completing the course, I worked on various React projects, building multiple web applications and refining my skills in frontend development. This hands-on approach helped me solidify my knowledge of React.js and modern web technologies',
      buttons: {
        links: ["https://github.com/israrahmadtech"],
        content: ["React Js"],
      },
    },
    {
      icon: <i className="fa-solid fa-circle-dot fa-fade"></i>,
      date: "2023",
      heading: "HTML, CSS, C++, JS",
      description:
        "Started learning HTML and CSS in 2023, building a solid foundation in web development through various projects. Then explored C++, focusing on algorithmic problem-solving for the International Olympiad in Informatics (IOI) competition. Transitioned to JavaScript, expanding skills in frontend development and creating interactive web applications, further enhancing expertise in modern web technologies and programming practices.",
      buttons: {
        links: [
          "https://github.com/israrahmadtech/HTML-in-2023",
          "https://github.com/israrahmadtech/CSS-in-2023",
          "https://github.com/israrahmadtech/Complete-Cpp-in-2023",
          "https://github.com/israrahmadtech/complete-javascript-in-2023",
        ],
        content: ["HTML", "CSS", "C++", "Javascript"],
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
                {card.icon} {card.date}
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
