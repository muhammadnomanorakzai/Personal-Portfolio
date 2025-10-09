import { useState } from "react";
import "./assets/project.css";
import PagesHeader from "./PagesHeader";

function ProjectsPage() {
  const cardsData = [
    {
      image: "/karmashop.PNG",
      heading: "Karma Shop – Fullstack Frontend React Shoe Store",
      description:
        "Built using JSX & CSS — smooth UI, cart logic, and product components.",
      stack: ["React", "JSX", "CSS"],
      links: ["https://karmashop.vercel.app", "LinkedIn"],
    },

    {
      image: "/toDoApp.PNG",
      heading: "To-Do List Web App with Login & Registration Authentication",
      description:
        "Functional To-Do List Web App with add, edit and delete features",
      stack: ["HTML", "Bootstrap", "Javascript"],
      links: [
        "https://todoappisrar.vercel.app",
        // "https://tinyurl.com/4eh9zmum",
      ],
    },
    {
      image: "/database.PNG",
      heading: "Dynamic Registration Form with Database like feature",
      description:
        "Validates input and stores user data in a JS-powered UI database—fully frontend-based!",
      stack: ["HTML", "Bootstrap", "Javascript"],
      links: [
        "https://isrardatabasemanage.vercel.app",
        // "https://tinyurl.com/ympy3pc4",
      ],
    },
    {
      image: "/temperatureConvertor.PNG",
      heading: "Neon Temperature Converter with JavaScript",
      description:
        "Convert between Celsius, Fahrenheit, and Kelvin in real-time with a glowing, modern UI!",
      stack: ["HTML", "Bootstrap", "Javascript"],
      links: [
        "https://isrartemperatureconvertor.vercel.app",
        // "https://tinyurl.com/3xkxnnxb",
      ],
    },
    {
      image: "/imageSlider.PNG",
      heading: "Responsive Auto Image Slider with JavaScript",
      description:
        "A sleek, responsive carousel with smooth animations, auto/manual sliding, and interactive controls.",
      stack: ["HTML", "CSS", "Javascript"],
      links: [
        "https://imageslideisrar.vercel.app",
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
      image: "/foodWeb.PNG",
      heading: "FoodWeb – Responsive Food Website with HTML, CSS & JS",
      description:
        "A fully responsive and visually appealing food website built using only HTML CSS and JS.",
      stack: ["HTML", "CSS", "JS"],
      links: [
        "https://israrfoodweb.vercel.app",
        // "https://tinyurl.com/ycyuf7b9",
      ],
    },
    {
      image: "/bloomStar.PNG",
      heading: "Bloom Star School – Responsive Educational Website",
      description:
        "A fully responsive and user-friendly school website designed for seamless browsing and information access.",
      stack: ["HTML", "CSS", "Javascript"],
      links: [
        "https://bloomstarschool.vercel.app",
        // "https://tinyurl.com/ymwyrpsv",
      ],
    },
    {
      image: "/superiorShoes.PNG",
      heading: "Superior Shoes – Responsive Online Shoe Store",
      description:
        "A sleek, user-friendly shoe store with smooth navigation, a functional cart, and responsive design.",
      stack: ["HTML", "CSS", "Javascript"],
      links: [
        "https://superiorshoes.vercel.app",
        // "https://tinyurl.com/r2v4tudc",
      ],
    },
    {
      image: "/codeWithHarry.PNG",
      heading: "Code With Harry Website Clone",
      description:
        "A faithful clone of Code With Harry’s official website—showcasing a popular coding YouTuber’s style and content.",
      stack: ["HTML", "CSS"],
      links: ["https://codewithharryclony.vercel.app"],
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
