import React, { useEffect, useRef } from "react";
import './assets/hoverEffectCard.css';

const HoverEffectCard = (props) => {
  const hoverEffectCardRef = useRef(null);

  useEffect(() => {
    function checkHoverEffectCards() {
      if (!hoverEffectCardRef.current) return;

      const triggerButton = (window.innerHeight / 5) * 4;
      const hoverEffectCardTop = hoverEffectCardRef.current.getBoundingClientRect().top;

      if (hoverEffectCardTop < triggerButton) {
        hoverEffectCardRef.current.classList.add('showHoverEffectCard');
      } else {
        hoverEffectCardRef.current.classList.remove('showHoverEffectCard');
      }
    }

    window.addEventListener('scroll', checkHoverEffectCards);
    checkHoverEffectCards(); // Run once when the component mounts

    return () => {
      window.removeEventListener('scroll', checkHoverEffectCards);
    };
  }, []);

  return (
    <div
      ref={hoverEffectCardRef}
      className="hoverEffectCard"
    >
      <h3><span>{props.number}</span> {props.head}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default HoverEffectCard;
