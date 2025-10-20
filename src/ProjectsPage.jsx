import { useState } from "react";
import "./assets/project.css";
import PagesHeader from "./PagesHeader";

function ProjectsPage() {
  const cardsData = [
    {
      image: "/cool-shop.PNG",
      heading: "Cool Shop – Fullstack Frontend React Product Store",
      description: "Built using JSX & CSS — smooth UI, and product components.",
      stack: ["React", "JSX", "CSS"],
      links: [
        "https://elaborate-queijadas-9359fb.netlify.app/",
        "https://www.linkedin.com/posts/muhammad-noman-7a3156339_react-javascript-frontenddevelopment-activity-7377293192100102144-sJuk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTq3esBgX1VY_YCPmeWH5ui7mefoxZ4Gxs",
      ],
    },
    {
      image: "/food.PNG",
      heading: "Food House – Fullstack Frontend React Product Store",
      description:
        "Built using JSX & CSS,Tailwindcss — smooth UI, and product components.",
      stack: ["React", "JSX", "CSS", "Tailwindcss"],
      links: [
        "https://wondrous-beignet-7d7aba.netlify.app/",
        "https://www.linkedin.com/posts/muhammad-noman-7a3156339_reactjs-frontenddevelopment-webdevelopment-activity-7384928634953891840-keVu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTq3esBgX1VY_YCPmeWH5ui7mefoxZ4Gxs",
      ],
    },
    {
      image: "/api-call.PNG",
      heading: "Routing Concept Nested Route,Protected Route,Api Calling",
      description: "Built using JSX & CSS — smooth UI,",
      stack: ["React", "JSX", "CSS"],
      links: [
        "https://fastidious-boba-29d14d.netlify.app/Register",
        "https://www.linkedin.com/posts/muhammad-noman-7a3156339_reactjs-webdevelopment-javascript-activity-7374356245002240000-Hr-b?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTq3esBgX1VY_YCPmeWH5ui7mefoxZ4Gxs",
      ],
    },

    {
      image: "/todo-app.PNG",
      heading: "To-Do List Web App with Login & Registration Authentication",
      description:
        "Functional To-Do List Web App with add, edit and delete features",
      stack: ["HTML", "TailWind Css", "React"],
      links: [
        "https://clever-cuchufli-44aee8.netlify.app/",
        // "https://tinyurl.com/4eh9zmum",
      ],
    },
    {
      image: "/cal.PNG",
      heading: "Calculator With clicks and Keyboard key",
      description: "Functionality: Add, sub , mul, division, and so on!",
      stack: ["HTML", "CSS", "Javascript"],
      links: [
        "https://cerulean-sundae-f75acf.netlify.app/",
        // "https://tinyurl.com/ympy3pc4",
      ],
    },
    {
      image: "/js-todo-app.PNG",
      heading: "Todo App with JavaScript",
      description:
        "Functional To-Do List Web App with add, edit and delete features",
      stack: ["HTML", "Bootstrap", "Javascript"],
      links: [
        "https://animated-capybara-3a53cc.netlify.app/",
        // "https://tinyurl.com/3xkxnnxb",
      ],
    },
    {
      image: "/school-web.PNG",
      heading: "Responsive Website",
      description: "A responsive Webiste Through Boostrape and html and CSS",
      stack: ["HTML", "CSS", "Boostrape"],
      links: [
        "https://stately-salamander-547032.netlify.app/",
        // "https://tinyurl.com/2rb6uvcc",
      ],
    },
    {
      image: "/zentucky.PNG",
      heading: "Zentucky Fried Chicken – Responsive Food Website",
      description:
        "A fully responsive, user-friendly site to explore menus and order delicious meals with ease!",
      stack: ["HTML", "CSS", "Pixel Perfect", "Figma"],
      links: [
        "https://zentuckyfriedchicken.vercel.app",
        // "https://tinyurl.com/467pb4fe",
      ],
    },
    {
      image: "/rock-paper-scissors.PNG",
      heading: "Rock paper scissors Game",
      description:
        "A fully responsive and visually appealing food website built using only HTML CSS and JS.",
      stack: ["HTML", "CSS", "JS"],
      links: [
        "https://starlit-starburst-fda709.netlify.app/",
        // "https://tinyurl.com/ycyuf7b9",
      ],
    },
    {
      image: "/expense-tracker.PNG",
      heading: "Expense Tracker",
      description: "A fully responsive and user-friendly Expense Tracker.",
      stack: ["HTML", "CSS", "Javascript"],
      links: [
        "https://stellular-axolotl-394e7b.netlify.app/",
        // "https://tinyurl.com/ymwyrpsv",
      ],
    },
    {
      image: "/cards.PNG",
      heading: "Card Functionlity",
      description: "A sleek, user-friendly Card Functionlity Ui.",
      stack: ["HTML", "CSS", "Javascript"],
      links: [
        "https://magenta-kheer-55363a.netlify.app/",
        // "https://tinyurl.com/r2v4tudc",
      ],
    },
    {
      image: "/one-page.PNG",
      heading: "One page Website",
      description: "A One Page Website Through Html And Css",
      stack: ["HTML", "CSS"],
      links: ["https://calm-flan-3e0678.netlify.app/"],
    },
    {
      image: "/cart.PNG",
      heading: "Add to Cart Page",
      description: "Add to Cart page Through Html And Css and Js",
      stack: ["HTML", "CSS", "JavaScript"],
      links: ["https://cosmic-kangaroo-05f40b.netlify.app/"],
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="project">
      <PagesHeader pageTitle="My Projects" />
      <div className="card-container">
        {cardsData.map((card, index) => (
          <div className="projectCard" key={`project-${index}`}>
            <div
              className="projectImgContainer"
              onClick={() => openImageModal(`./images${card.image}`)}>
              <img
                className="projectImg"
                src={`./images${card.image}`}
                alt={card.heading}
              />
            </div>
            <div className="projectContent">
              <h3>{card.heading}</h3>
              <p className="projectDescription">{card.description}</p>
              <div className="stackBtns">
                {card.stack.map((language, langIndex) => (
                  <button key={`lang-${index}-${langIndex}`}>{language}</button>
                ))}
              </div>
              <div className="linksBtns">
                <a
                  href={card.links[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-btn">
                  Preview
                </a>
                {card.links[1] && (
                  <a
                    href={card.links[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn">
                    LinkedIn Video Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="modal-content">
            <img
              src={selectedImage}
              alt="Fullscreen project"
              onClick={(e) => e.stopPropagation()}
            />
            <button className="close-btn" onClick={closeImageModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectsPage;
