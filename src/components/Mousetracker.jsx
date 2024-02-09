
import React, { useState, useEffect } from 'react';
import './MouseTracker.css';

const Mousetracker = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    return (
      <div className="mouse-tracker hidden sm:block z-20">
        <div className="circle " style={{ left: position.x, top: position.y }}>
          <div className="dot" />
          
        </div>
        
      </div>
    )
  }

export default Mousetracker
