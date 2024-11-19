import React, { useState, useEffect } from 'react';
import './BouncingBall.css';

const BouncingBall = () => {
  const [color, setColor] = useState('#61dafb');

  useEffect(() => {
    const changeColor = setInterval(() => {
      const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      setColor(randomColor);
    }, 600); // Change color every 0.6 seconds

    return () => clearInterval(changeColor);
  }, []);

  return (
    <div className="ball-container">
      <div className="ball" style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default BouncingBall;
