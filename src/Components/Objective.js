import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Contact from "./Contact";
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
        scrub: 1,
        //markers: true,
        // toggleActions:"restart null null null"
      },
      x: 120,
      opacity: 0,
      duration: 4,
    });

    gsap.from(el2.current, {
      scrollTrigger: {
        trigger: el2.current,
        start: "center center",
        end: "12 40%",
        //markers:true,
        scrub: 1,
      },
      x: 120,
      opacity: 0,
      duration: 3,
    });
    gsap.from(el3.current, {
      scrollTrigger: {
        trigger: el3.current,
        start: "center center",
        end: "12 40%",
        //markers:true,
        scrub: 1,
      },
      x: 120,
      opacity: 0,
      duration: 3,
    });
  });
  return (
    <div className="h-[40rem] overflow-hidden">
      {
        <div>
          <h1 className="text-center font-bold text-2xl mb-6  border-b-2">
            OBJECTIVE
          </h1>
          <ul>
            <div ref={el}>
              <li className="my-6 pl-4 ">
                To nurture holistic growth among students through a
                comprehensive program designed to enhance their academic,
                technical, and personal development.
              </li>
            </div>
            <div ref={el2}>
              <li className="my-6 pl-4 ">
                To effectively plans and manages events that bridge the gap
                between classroom education and the technical skills required by
                students, ensuring they are well-prepared for the professional
                world.
              </li>
            </div>
          </ul>
        </div>
      }
      <div className="mt-8">
        <h1 className="text-center font-bold text-2xl mb-6 border-b-2">
          {" "}
          OUTCOMES
        </h1>
        <ul>
          <div ref={el3}>
            <li className="my-6 pl-4 decoration">
              Students are able to enhance skill development through academic,
              technical, and personal development.
            </li>
          </div>
        </ul>
      </div>
      <Contact/>
    </div>
  );
};
export default Objective;
