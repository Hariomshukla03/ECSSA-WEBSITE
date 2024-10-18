import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import {gsap} from 'gsap'
import Marquee from 'react-fast-marquee'
const Latest = () => {
  const el=useRef();
  useGSAP(()=>{
    gsap.from(el.current,{
      y:-10,
      opacity:0,
      delay:0.4,

    })
  })
  return (
    <div className='' >
       <Marquee pauseOnHover>
        <h1 className='py-3' ref={el}>Hello!!! There</h1>
        </Marquee>
    </div>
  )
}

export default Latest