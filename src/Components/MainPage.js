import React, { useEffect, useRef } from 'react'
import Latest from './Latest';
import EcssaInfo from './EcssaInfo';
import Typed from 'typed.js';
import Objective from './Objective';
import logo from "../assets/whitelogo.png"

import { useGSAP } from '@gsap/react';
import {gsap} from 'gsap'
import Contact from './Contact';
const MainPage = () => {
  // let logo=require("../Photos/Ecssalogo.jpeg")
  const el2=useRef()
  const el=useRef();
  useEffect(()=>{
    const typed=new Typed(el.current,{
      strings:["ECSSA","Student Council","SLRTCE","Learn And Grow"],
      typeSpeed:50,
      loop:true,
      backSpeed:50
    })
    return(()=>{
      typed.destroy()
    })
  })
  useGSAP(()=>{
    gsap.from(el2.current,{
      y:150,
      opacity:0,
      delay:0.8

    })
  })
  return (
    <div  className="bg-black text-white">
      <Latest />
   
        <div ref={el2} className=' flex justify-center mt-6'>
            <img className='w-[350px] h-[350px]  rounded-full' src={logo}/>
            
        </div>
        <div className='text-center text-2xl font-extrabold'>
  <h1>
    Welcome to 
    <span 
      ref={el} 
      className='ml-2 text-transparent bg-clip-text'
      style={{
        backgroundImage: 'linear-gradient(116deg, #ff8660 71.79%, #9a33ff 98.51%)'
      }}
    >
      ECSSSA
    </span>
  </h1>
</div>





          
      <EcssaInfo />
      <Objective/>
     
    </div>
  )
}

export default MainPage;