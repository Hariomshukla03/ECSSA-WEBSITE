import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Card from "./Card"
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
    <div className="bg-black pt-20"> 
      <div>
        <h1 className="el text-center p-4 font-bold text-2xl hover:text-green-300 cursor-pointer border-b-2">
          Announcement
        </h1>
      </div>

      <div className="el">
        <ul className="pt-8 text-center space-y-4">
          <li className="p-4 text-white text-xl">Get Ready For Events!!</li>
          
        </ul>
        <div className="m-8">

        <Card/>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementPage;
