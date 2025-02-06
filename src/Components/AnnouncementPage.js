import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import DeadshotCard from "./DeadshotCard"
import TypeCard from "./TypeCard"
const AnnouncementPage = () => {
  useGSAP(() => {
    gsap.from(".el", {
      y: 100,
      opacity: 0,
      delay: 0.4,
      stagger: 0.4,
    });
  });

  return (
    <div className="bg-black h-[82rem]  pt-20"> 
      <div>
        <h1 className="el text-center p-4 font-bold text-2xl hover:text-green-300 cursor-pointer border-b-2">
          Announcement
        </h1>
      </div>

      <div className="el">
        <ul className="pt-8 text-center space-y-2">
          <li className="p-4 text-white text-xl">Get Ready For Events!! </li>
          <li className=" text-white text-xl">ECSSA TECH XR 2025</li>
          
        </ul>
        <div className="m-8 flex flex-wrap gap-10">
       <TypeCard/>
       <DeadshotCard/>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementPage;
