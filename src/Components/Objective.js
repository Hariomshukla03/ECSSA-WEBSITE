import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Objective = () => {
  gsap.registerPlugin(ScrollTrigger);
  const el = useRef();
  const el2 = useRef();
  const el3 = useRef();

  useGSAP(() => {
    gsap.from(el.current, {
      scrollTrigger: {
        trigger: el.current,
        start: "-30 center",
        end: "+=30",
        //scrub: 1, 
        //markers: true,
      },
      x: 120,
      opacity: 0,
      duration: 1,
    });

    gsap.from(el2.current, {
      scrollTrigger: {
        trigger: el2.current,
        start: "center center",
        end: "12 40%",
        //markers:true,
        //scrub: 1,
      },
      x: 120,
      opacity: 0,
      duration: 1,
    });

    gsap.from(el3.current, {
      scrollTrigger: {
        trigger: el3.current,
        start: "-80% +80%",
        end: "12 40%",
        // markers:true,
        //scrub: 1,
      },
      x: 120,
      opacity: 0,
      duration: 1,
    });
  });

  return (
    <div className="h-auto sm:h-[40rem] overflow-hidden px-4 sm:px-6 lg:px-12">
     
      <div className="mb-8">
        <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl mb-6 border-b-2">
          OBJECTIVE
        </h1>
        <ul className="space-y-6">
          <div ref={el}>
            <li className="  text-xs sm:text-sm md:text-base lg:text-lg break-words w-full overflow-hidden">
              To nurture holistic growth among students through a comprehensive program designed to enhance their academic, technical, and personal development.
            </li>
          </div>
          <div ref={el2}>
            <li className=" text-xs sm:text-sm md:text-base lg:text-lg break-words w-full overflow-hidden">
              To effectively plan and manage events that bridge the gap between classroom education and the technical skills required by students, ensuring they are well-prepared for the professional world.
            </li>
          </div>
        </ul>
      </div>

   
      <div className="mt-8">
        <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl mb-6 border-b-2">
          OUTCOMES
        </h1>
        <ul className="space-y-6">
          <div ref={el3}>
            <li className="  text-xs sm:text-sm md:text-base lg:text-lg break-words w-full overflow-hidden">
              Students are able to enhance skill development through academic, technical, and personal growth.
            </li>
          </div>
        </ul>
      </div>

      
    </div>
  );
};

export default Objective;
