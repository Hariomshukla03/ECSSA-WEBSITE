import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
const Pop = ({ handleClick }) => {
  useGSAP(()=>{
    gsap.from(ref.current, {
      opacity: 0,
      scale: 0.3,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
    });

  },[])
  const ref=useRef()
  return (
    <div
    ref={ref}
      role="alert"
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80"
      style={{ zIndex: 9999 }}
    >
      <div  className="mx-auto max-w-lg rounded-lg  bg-slate-900 p-4 shadow-lg sm:p-6 lg:p-8">
        <div className="flex items-center gap-4">
          <span className="shrink-0 rounded-full bg-red-600 p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                clipRule="evenodd"
              />
            </svg>
          </span>

          <p className="font-semibold sm:text-lg text-red-500">
            New Notification!
          </p>
        </div>

        <p className="mt-4 text-gray-300">
          ECSSA events are here! 🎉 Fun, challenges, and epic moments await.<br />
          <br />
          👉 Only for ECS students!<br />
          👉 No excuses, just register!<br />
          <br />
          Join in and make it legendary! 🔥
        </p>

        <div className="mt-6 sm:flex sm:gap-4">
          <Link
            to="/announcement"
            className="inline-block w-full rounded-lg bg-red-600 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto hover:bg-red-700"
          >
            View
          </Link>

          <button
            onClick={handleClick}
            className="mt-2 inline-block w-full rounded-lg bg-gray-800 px-5 py-3 text-center text-sm font-semibold text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-700"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pop;
