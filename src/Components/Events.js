import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import {gsap} from 'gsap'
import { useRef } from "react";
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const Events = () => {
    gsap.registerPlugin(ScrollTrigger);
    const el=useRef()
    const el2=useRef()
useGSAP(()=>{
    gsap.from(el.current,{
        y:250,
        opacity:0,
        stagger:0.2
    })
    gsap.from(el2.current,{
        x:250,
        opacity:0,
        stagger:1,
        delay:0.5,
        scrollTrigger:{
            //markers:true,
            start :"120 25%",
            //scrub:1
            

        }
    })
})
  return (
    <div className="h-[43rem] text-white">
      <h1 ref={el} className=" text-center pt-4 font-bold border-b-2 pb-4 text-2xl">
        Events
      </h1>
      <ul ref={el2} className="text-center ">
        <h2 className="mt-10 text-lg">
          Events organized by ECSSA(Academic Year 2023-24):
        </h2>
        <Link to="https://drive.google.com/file/d/1qw9m4kGK0AuKDjf8agUzx7Zv8YrtDc_r/view">
          <li className="p-4">1. Practical Hand on of IoT & Wokwi</li>
        </Link>
        <Link to="https://drive.google.com/file/d/1CQIX4xph-zZ8hSl9s1r2agUleEmOfCbS/view">
          <li>2. Tech-XR</li>
        </Link>
      </ul>
      <ul ref={el2} >
        <h2 className="mt-10 text-lg text-center">
          Events organized by ECSSA(Academic Year 2022-23):
        </h2>
        <Link to="https://drive.google.com/file/d/1N0bNac6pMMJKVILFcW7tIeC79xhD89K5/view?usp=sharing"><li className="p-4 text-center">1. Awareness Session on EV</li></Link>
        <Link to="https://drive.google.com/file/d/1lajyzyRqDQfPzkRrVpMpqSWWycnJgcaj/view?usp=sharing"><li className="p-4 text-center">2. Session by Alumni on MBA</li></Link>
        <Link to="https://drive.google.com/file/d/1N0bNac6pMMJKVILFcW7tIeC79xhD89K5/view?usp=sharing"><li className="p-4 text-center">3. Tech-X</li></Link>
        <Link to="https://drive.google.com/file/d/1Pko0cMNjl0GoDps5nCapyab0F8iQEbpo/view?usp=sharing"><li className="p-4 text-center">4. Holistic activities-Yoga</li></Link>
        <Link to="https://drive.google.com/file/d/1N0bNac6pMMJKVILFcW7tIeC79xhD89K5/view?usp=sharing"> <li className="p-4 text-center">5. Holistic activities-Zumba</li></Link>
        <Link to="https://drive.google.com/file/d/1IhGiTU_37-NSVUZf9p8q3MVkTeygp4PH/view"> <li className="p-4 text-center   ">
          6. Collaboration event conducted with Meta Summit & Circuit Designing
          under IETE and ECSSA
        </li></Link>
        
        
       
       
      </ul>
    </div>
  );
};
export default Events;
