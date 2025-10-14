import React, { useEffect, useRef, useState } from "react";
import "./assets/banner.css"; // Import custom CSS for styling
import Type from "./Type";
import RectangleBtn from "./RectangleBtn";

const Banner = () => {
  const [positions, setPositions] = useState({});
  useEffect(() => {
    const images = document.querySelectorAll(".attract"); // Select all images

    const handleMouseMove = (e) => {
      images.forEach((img, index) => {
        const imgRect = img.getBoundingClientRect();
        const imgCenterX = imgRect.left + imgRect.width / 2;
        const imgCenterY = imgRect.top + imgRect.height / 2;

        // Calculate distance from cursor
        const deltaX = e.clientX - imgCenterX;
        const deltaY = e.clientY - imgCenterY;
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

        // If cursor is within 100px, move slightly towards cursor
        setPositions((prev) => ({
          ...prev,
          [index]:
            distance < 100
              ? { x: -deltaX * 0.1, y: -deltaY * 0.1 }
              : { x: 0, y: 0 },
          // [index]: distance < 100 ? { x: deltaX * 0.1, y: deltaY * 0.1 } : { x: 0, y: 0 },
        }));
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="banner">
      <div className="text-content animate__animated animate__fadeInLeft animate__slower animate-delay-1s">
        <p className="hello-text">HELLO</p>
        <h1>
          I'm <span className="name">Muhammad Noman</span>
          <br />
          A <Type />
        </h1>
        <p className="description">
          I help businesses build their online presence with fast,
          mobile-friendly websites using React.js - designed to attract
          customers and showcase your brand.
        </p>
        <RectangleBtn
          content="Hire Me"
          upwork="https://www.linkedin.com/in/muhammad-noman-7a3156339/"
          width="110px"
        />
      </div>
      <div className="image-container  animate__animated animate__fadeInRight animate__slower">
        <img
          src="./images/WhatsApp_Image_2025-10-09_at_11.45.12_AM-removebg-preview.png"
          alt="Person"
          className="person-img"
        />
        <h2 className="animatedH2">Frontend Developer</h2>
      </div>
      <div className="langauesIcons animate__animated animate__fadeInLeft animate__slower">
        {[
          "reactLogo.png",
          "html-5.png",
          "css-3.png",
          "bootstrapLogo.png",
          "java-script.png",
        ].map((src, index) => (
          <img
            key={index}
            className="icon attract"
            src={`./images/${src}`}
            alt=""
            style={{
              transform: `translate(${positions[index]?.x || 0}px, ${
                positions[index]?.y || 0
              }px)`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
