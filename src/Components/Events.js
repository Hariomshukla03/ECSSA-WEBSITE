import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { gsap } from 'gsap'
import { useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Events = () => {
  gsap.registerPlugin(ScrollTrigger);
  const el = useRef()
  const el2 = useRef()

  useGSAP(() => {
    gsap.from(el.current, {
      y: 250,
      opacity: 0,
      stagger: 0.2
    })
    gsap.from(el2.current, {
      x: 250,
      opacity: 0,
      stagger: 1,
      delay: 0.5,
      scrollTrigger: {
        start: "120 25%",
      }
    })
  })
  
  return (
    <div className="h-auto bg-black text-white">
      <h1 ref={el} className="text-center pt-16 font-bold border-b-2 pb-4 text-2xl sm:text-3xl md:text-2xl lg:text-4xl">
        Events
      </h1>
      
      <div ref={el2}>
        <h2 className="mt-10 text-lg text-center sm:text-xl md:text-xl">
          Events organized by ECSSA (Academic Year 2023-24):
        </h2>
        <ul className="text-center">
          <Link to="https://drive.google.com/file/d/1qw9m4kGK0AuKDjf8agUzx7Zv8YrtDc_r/view">
            <li className="p-4 text-sm sm:text-base md:text-xl">1. Practical Hand on of IoT & Wokwi</li>
          </Link>
          <Link to="https://drive.google.com/file/d/1CQIX4xph-zZ8hSl9s1r2agUleEmOfCbS/view">
            <li className="p-4 text-sm sm:text-base md:text-xl">2. Tech-XR</li>
          </Link>
        </ul>
      </div>

      <div ref={el2}>
        <h2 className="mt-10 text-lg text-center sm:text-xl md:text-xl">
          Events organized by ECSSA (Academic Year 2022-23):
        </h2>
        <ul className="text-center">
          <Link to="https://drive.google.com/file/d/1N0bNac6pMMJKVILFcW7tIeC79xhD89K5/view?usp=sharing">
            <li className="p-4 text-sm sm:text-base md:text-lg">1. Awareness Session on EV</li>
          </Link>
          <Link to="https://drive.google.com/file/d/1lajyzyRqDQfPzkRrVpMpqSWWycnJgcaj/view?usp=sharing">
            <li className="p-4 text-sm sm:text-base md:text-xl">2. Session by Alumni on MBA</li>
          </Link>
          <Link to="https://drive.google.com/file/d/1N0bNac6pMMJKVILFcW7tIeC79xhD89K5/view?usp=sharing">
            <li className="p-4 text-sm sm:text-base md:text-xl">3. Tech-X</li>
          </Link>
          <Link to="https://drive.google.com/file/d/1Pko0cMNjl0GoDps5nCapyab0F8iQEbpo/view?usp=sharing">
            <li className="p-4 text-sm sm:text-base md:text-xl">4. Holistic activities-Yoga</li>
          </Link>
          <Link to="https://drive.google.com/file/d/1N0bNac6pMMJKVILFcW7tIeC79xhD89K5/view?usp=sharing">
            <li className="p-4 text-sm sm:text-base md:text-xl">5. Holistic activities-Zumba</li>
          </Link>
          <Link to="https://drive.google.com/file/d/1IhGiTU_37-NSVUZf9p8q3MVkTeygp4PH/view">
            <li className="p-4 text-sm sm:text-base md:text-xl">6. Collaboration event conducted with Meta Summit & Circuit Designing under IETE and ECSSA</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Events;
