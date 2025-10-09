import React from 'react';

function ShadowEffect() {
  const shadows = [
    { top: 0, left: 0 },
    { top: 0, right: 0 },
    { bottom: 0, left: 0 },
    { bottom: 0, right: 0 },
    { top: "50%", left: 0, transform: "translateY(-50%)" },
    { top: "50%", right: 0, transform: "translateY(-50%)" },
    { bottom: "50%", left: 0, transform: "translateY(50%)" },
    { bottom: "50%", right: 0, transform: "translateY(50%)" },
    { top: "25%", left: "25%" },
    { bottom: "25%", right: "25%" }
  ];

  return (
    <div className="parent">
      {shadows.map((shadow, index) => (
        <div 
          key={index} 
          className="shadowEffect" 
          style={{
            position: "absolute",
            ...shadow,
            width: 0,
            height: 0,
            boxShadow: "0 0 110px 50px #ff0055",
          }} 
        />
      ))}
    </div>
  );
}

export default ShadowEffect;
