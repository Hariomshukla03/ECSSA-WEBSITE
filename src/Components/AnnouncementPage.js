import { useGSAP } from "@gsap/react";

import {gsap} from 'gsap'
const AnnouncementPage = () => {
    useGSAP(()=>{
        gsap.from(".el",{
            y:100,
            opacity:0,
            delay:0.4,
            stagger:0.4,

        })
    })
  return (
    
    <div className="bg-black h-[36rem]">
      <div>
        <h1 className="el text-center p-4 font-bold text-2xl hover:text-green-300 cursor-pointer border-b-2">Announcement</h1>
      </div>
    
      <div className="el">
        <ul className="pt-8 text-center">
          <li className="p-4">This Is Announcement1</li>
          <li className="p-4">This Is Announcement2</li>
          <li className="p-4">This Is Announcement3</li>    
        </ul>
      </div>
    </div>
  );
};
export default AnnouncementPage;
