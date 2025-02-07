import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import DeadshotCard from "./DeadshotCard";
import TypeCard from "./TypeCard";
import DecodeCard from "./DecodeCard";
import IdeaCard from "./IdeaCard";
import Squares from "./TypeBg";

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
    <div className="relative bg-black min-h-screen pt-20 overflow-hidden">
      {/* Fixed Squares Background */}
      <div className="fixed top-0 left-0 w-screen h-screen z-0">
        <Squares
          speed={0.5}
          squareSize={80}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <h1 className="el text-center p-4 font-bold text-2xl hover:text-green-300 cursor-pointer border-b-2">
          Announcement
        </h1>

        <div className="el">
          <ul className="pt-8 text-center space-y-2">
            <li className="p-4 text-white text-xl">Get Ready For Events!!</li>
            <li className="text-white text-xl">ECSSA TECH XR 2025</li>
          </ul>

          <div className="m-8 flex flex-wrap gap-10 justify-center">
            <TypeCard />
            <DeadshotCard />
            <DecodeCard />
            <IdeaCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementPage;
