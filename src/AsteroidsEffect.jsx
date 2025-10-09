import React, { useEffect, useRef } from "react";
import "./assets/asteroidsEffect.css";

const AsteroidsEffect = () => {
  const numBoxes = 5; // Number of moving boxes
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const boxes = [];

    function createBox() {
      const box = document.createElement("div");
      box.classList.add("asteroid-box");

      // Random Size (4px - 12px) - Square shape
      const size = Math.floor(Math.random() * 6) + 3;
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;

      // Random Initial Position (Within screen boundaries)
      const maxX = window.innerWidth - size;
      const maxY = window.innerHeight - size;
      box.style.left = `${Math.random() * maxX}px`;
      box.style.top = `${Math.random() * maxY}px`;

      // Fixed Color (#aaa) but Random Opacity
      box.style.backgroundColor = `rgba(170, 170, 170, ${Math.random() * 0.6 + 0.2})`;

      container.appendChild(box);
      boxes.push({ 
        element: box, 
        size,
        speedX: (Math.random() - 0.5) * 2, 
        speedY: (Math.random() - 0.5) * 2 
      });
    }

    function animateBoxes() {
      boxes.forEach((box) => {
        let x = parseFloat(box.element.style.left);
        let y = parseFloat(box.element.style.top);

        x += box.speedX * 2;
        y += box.speedY * 2;

        // Allow boxes to move 200px OUTSIDE before bouncing
        const minX = -200;
        const maxX = window.innerWidth + 200;
        const minY = -200;
        const maxY = window.innerHeight + 200;

        if (x >= maxX || x <= minX) box.speedX *= -1;
        if (y >= maxY || y <= minY) box.speedY *= -1;

        box.element.style.left = `${x}px`;
        box.element.style.top = `${y}px`;
      });

      requestAnimationFrame(animateBoxes);
    }

    // Create Boxes
    for (let i = 0; i < numBoxes; i++) {
      createBox();
    }

    // Start Animation
    animateBoxes();
  }, []);

  return <div ref={containerRef} className="asteroid-container"></div>;
};

export default AsteroidsEffect;
