import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Squares from "./TypeBg";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/Data";
import EventCard from "./EventCard";
import { useDispatch, useSelector } from "react-redux";
import { events } from "../utils/eventSlice";


const AnnouncementPage = () => {
  useGSAP(() => {
    gsap.from(".el", {
      y: 100,
      opacity: 0,
      delay: 0.4,
      stagger: 0.4,
    });
  });
  

  const dispatch = useDispatch();

  const event = useSelector((store) => store.events);
 

  const fetchEvent = async () => {
    if (event.length > 0) return;


    const res = await axios.get(BASE_URL + "/event/view", {
      withCredentials: true,
    });

    if (res) {
      dispatch(events(res.data));
    }
  };

  useEffect(() => {
    fetchEvent();
  }, []); 
  return (
    <div className="relative bg-black min-h-screen pt-20 overflow-hidden">
     
      <div className="fixed top-0 left-0 w-screen h-screen z-0">
        <Squares
          speed={0.5}
          squareSize={80}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>

      <div className="relative z-10">
        <h1 className="el text-center p-4 font-bold text-2xl hover:text-green-300 cursor-pointer border-b-2">
          Announcement
        </h1>

        <div className="el">
          <ul className="pt-8 text-center space-y-2">
            <li className="p-4 text-white text-xl">Get Ready For Events!!</li>
            <li className="text-white text-xl">ECSSA TECH XR</li>
          </ul>

          {event.length === 0 ? (
            <h1 className="text-center text-3xl mt-6 text-white  font-bold">
              No Event
            </h1>
          ) : (
            <div className="m-8 flex flex-wrap gap-10 justify-center">
             
              {Array.isArray(event) && event.map((e) => {return(
                <EventCard data={e} key={e._id} />
              )})}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementPage;
