import React, { useEffect, useRef, useState } from 'react';
import Latest from './Latest';
import EcssaInfo from './EcssaInfo';
import Typed from 'typed.js';
import Objective from './Objective';
import Contact from './Contact';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import logo from "../assets/whitelogo.png"; 
import Pop from './Pop';
const MainPage = () => {
  const el2 = useRef();
  const el = useRef();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["ECSSA", "Student Council", "SLRTCE", "Learn And Grow"],
      typeSpeed: 50,
      loop: true,
      backSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useGSAP(() => {
 
      gsap.from(el2.current, {
        y: 150,
        opacity: 0,
        delay: 0.8,
      });
    
  });
  const [showMenu,setShowMenu]=useState(true)
  const handleClick=()=>{
    setShowMenu(!showMenu)
  }

  return (
    <div className="bg-black text-white min-h-screen w-full overflow-x-hidden flex flex-col items-center px-4 sm:px-6 md:px-8 py-6">
     {showMenu && <Pop handleClick={handleClick} />}

     
      <div ref={el2} className="flex justify-center mt-6 w-full">
        <img
          className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full"
          src={logo}
          alt="ECSSA Logo"
        />
      </div>

   
      <div className="text-center text-xl sm:text-xl md:text-2xl font-extrabold mt-4 leading-tight w-full max-w-full overflow-hidden break-words whitespace-normal">
        <h1>
          Welcome to
          <span
            ref={el}
            className="ml-2 text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(116deg, #ff8660 71.79%, #9a33ff 98.51%)',
            }}
          >
            ECSSA
          </span>
        </h1>
      </div>

      
      <EcssaInfo />
      <Objective />
      <Contact />
    </div>
  );
};

export default MainPage;
