import React, { useState,useEffect } from "react";
import '../../home/home.css'
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";


export const Game6 = () => {
  const [color, setColor] = useState('white');

  useEffect(() => {
    const colors = ['white'];
    let i = 0;

    const intervalId = setInterval(() => {
      setColor(colors[i % colors.length]);

    }, 10000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    
      
        
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            //  style={{ backgroundImage: `url(${logo})`, backgroundSize:"100%", backgroundRepeat: "no-repeat"}}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div style={{ color }}  className="intro mx-auto">
                <h2 className="mb-1x">Congratulations!! You have completed all the demo levels.</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter 
                    options={{
                      strings: [
                        "You have come to the end of your journey",
                        "Hope You liked our website",
                        "That was just a demo... we'll bring more features in future.",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <div className="intro_btn-action pb-5">
                  <Link to="/game" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      Start Again
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    
  );
};
