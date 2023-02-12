import React, { useState,useEffect,useRef } from "react";
import "./page5.css";
import keyboard from "../../../assets/images/Keyboard/keyboard4.png"
import bar from "../../../assets/images/bar/bar1.png"
import filler from "../../../assets/images/bar/filler4.png"
export const Game5 = () => {
  var res= false;

 
  const [color, setColor] = useState('blue');


  useEffect(() => {
    const colors = ['white', 'white', 'white', 'white', 'white', 'white', 'white'];
    let i = 0;

    const intervalId = setInterval(() => {
      setColor(colors[i % colors.length]);
      
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleKeyPress = event => {
   
    if (event.code.startsWith("Key") && /^[A-Za-z]+$/.test(event.key)){
      res=true;
    }
    if (event.code === 'Space' && res===true) {
      window.location.href = '/game6';
    }
    
    
  };

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

//   const fillerRef = useRef(null);

//   useEffect(() => {
//     fillerRef.current.style.animation = "entrance 1s ease-in-out";
//   }, []);
  return (
    <div className="container">
      <h1 className="heading">Try typing letters while pressing shift key.</h1>
      
      <input
       onInput={handleKeyPress}
       type="text" 
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
        <img className="filler4" src={filler} alt="filler"/>
        </div>
        <p className="text" style={{ color }}>Press SPACE BAR to continue</p>
      
    </div>
  );
};


