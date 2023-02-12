import React, { useState,useEffect,useRef } from "react";
import "./page3.css";
import keyboard from "../../../assets/images/Keyboard/keyboard3.png"
import bar from "../../../assets/images/bar/bar1.png"
import filler from "../../../assets/images/bar/filler3.png"
export const Game3 = () => {
  const inputRef = useRef(null);
  var pass=false;
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!inputRef.current.contains(event.target)) {
        inputRef.current.focus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
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
    inputRef.current.autoFocus;
    if (event.code.startsWith("Key") && /^[A-Za-z]+$/.test(event.key)){
      pass=true;
    }
    if (event.code === 'Space' && pass==true) {
      window.location.href = '/game4';
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
      <h1 className="heading">Try typing anything with letters</h1>
      <input ref={inputRef}
       type="text" 
       onInput={handleKeyPress}
        style={{
        backgroundColor: "transparent",
        border: "none",
        borderBottom: "1px solid black",
        color: "white"
        
      }}
      autoFocus/>
      <div className="imageContainer">
        <img className="image" src={keyboard} alt="keyboard" />
        
        <img className="rightImage" src={bar} alt="bar" />
        <img className="filler3" src={filler} alt="filler"/>
        </div>
        <p className="text" style={{ color }}>Press SPACE BAR to continue</p>
      
    </div>
  );
};


