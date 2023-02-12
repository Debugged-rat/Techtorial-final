import React, { useState,useEffect,useRef } from "react";
import "./page2.css";
import keyboard from "../../../assets/images/Keyboard/keyboard2.png"
import bar from "../../../assets/images/bar/bar1.png"
import filler from "../../../assets/images/bar/filler2.png"
export const Game2 = () => {
 
  const [color, setColor] = useState('white');
  
  useEffect(() => {
    const colors = ['white', 'white', 'white', 'white', 'white', 'white', 'white'];
    let i = 0;

    const intervalId = setInterval(() => {
      setColor(colors[i % colors.length]);
      
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleKeyPress = event => {
    if (event.code === 'Space') {
      window.location.href = '/game3';
    }
    
  };

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  // const fillerRef = useRef(null);

  // useEffect(() => {
  //   fillerRef.current.style.animation = "entrance 1s ease-in-out";
  // }, []);
  return (
    <div className="container">
      <h1 className="heading">This is your space bar.</h1>
      <p>This is used to put the space between the words.</p>
      <div className="imageContainer">
        <img className="image" src={keyboard} alt="keyboard" />
        
        <img className="rightImage" src={bar} alt="bar" />
        <img className="filler2" src={filler} alt="filler"/>
        </div>
        <p className="text" style={{ color }}>Press SPACE BAR to continue</p>
      
    </div>
  );
};


