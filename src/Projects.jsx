import React from "react";
import "./assets/project.css";

function Project() {
  const ProjectCards = [
    {
      image: "./images/project1.PNG",
      heading: "HTML and CSS",
      description:
        "Business consulting consultants provide expert advice and guide businesses to help them improve their performance efficiency.",
      buttons: {
        links: [
          "https://github.com/muhammadnomanorakzai?tab=repositories",
          "https://github.com/muhammadnomanorakzai?tab=repositories",
        ],
        content: ["HTML", "CSS"],
      },
    },
    {
      image: "./images/project2.PNG",
      heading: "React Developer",
      description:
        "Worked on modern UI components, optimized frontend performance, and built interactive web applications.",
      buttons: {
        links: [
          "https://github.com/muhammadnomanorakzai?tab=repositories",
          "https://github.com/muhammadnomanorakzai?tab=repositories",
        ],
        content: ["React", "Redux"],
      },
    },
  ];

  return (
    <section id="project">
      <div className="card-container">
        {ProjectCards.map((card, index) => (
          <div key={index} className="projectCard">
            <div className="project-img">
              <img src={card.image} alt="lknckuj" />
            </div>
            <div className="project-content">
              <h3>{card.heading}</h3>
              <p>{card.description}</p>
              <div className="projectButtons">
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
