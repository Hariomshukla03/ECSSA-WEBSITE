import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { BASE_URL } from "../utils/Data";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent, editEvent } from "../utils/eventSlice";

const EventCard = ({ data }) => {
  // const eventDate = new Date("2025-02-12T14:00:00").getTime();
  // const [timeLeft, setTimeLeft] = useState(eventDate - new Date().getTime());
  const {
    eventName,
    eventLastDate,
    eventDate,
    eventVenue,
    eventReq,
    photoUrl,
    eventForm,
    _id,
  } = data;
  const loginAdmin=useSelector((store)=>store.loginAdmin)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    const res = await axios.delete(BASE_URL + "/event/delete/" + id, {
      withCredentials: true,
    });
    dispatch(deleteEvent(id));
  };
  const date = new Date(eventDate);
  const formattedDate = `${date.getDate().toString().padStart(2, "0")}-${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${date.getFullYear()}`;

  const date2 = new Date(eventLastDate);
  const formattedLastDate = `${date2.getDate().toString().padStart(2, "0")}-${(
    date2.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${date2.getFullYear()}`;
  const handleEdit = async (id) => {
    try {
      const res = await axios.get(BASE_URL + "/event/view/" + id, {
        withCredentials: true,
      });

      if (res && res.data) {
        dispatch(editEvent(res.data));
        navigate("/admindash");
      }

    } catch (error) {
      if (error.response?.status === 401) {
        navigate("/login");
      } else {
        console.error("An error occurred:", error);
      }
    }
  };

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     const now = new Date().getTime();
  //     const difference = eventDate - now;
  //     setTimeLeft(difference);
  //     if (difference <= 0) {
  //       clearInterval(timer);
  //     }
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, [eventDate]);

  // const formatTime = (ms) => {
  //   const seconds = Math.floor((ms / 1000) % 60);
  //   const minutes = Math.floor((ms / 1000 / 60) % 60);
  //   const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  //   return `${hours}h ${minutes}m ${seconds}s`;
  // };
  // https://docs.google.com/forms/d/e/1FAIpQLSd9gYiUPMeav4H7jh2_8FdTtLCQ8ROYiF1I5y-kN4y5JhoDDw/viewform

  return (
    <div className="group relative h-96 w-72 [perspective:1000px]">
      <div className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
        <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-gray-900 to-red-500 p-6 text-white [backface-visibility:hidden]">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-start z-10">
              <div className="text-3xl font-bold">{eventName}</div>
            </div>

            <div className="mt-4 overflow-hidden w-68 z-10">
              <p className="text-lg pb-2 font-bold">Start: {formattedDate}</p>
              <p className="text-lg  pb-2 font-bold">
                Last: {formattedLastDate}
              </p>

              <p className="text-lg pb-2 font-bold ">Venue: {eventVenue}</p>
            </div>

            <div className="mt-auto z-10">
              <p className="text-sm opacity-75">Hover to flip!</p>
            </div>
          </div>
        </div>

        <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-gray-900 to-red-500 p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden] z-20">
          <div className="flex flex-col h-full">
            <div className="text-2xl font-bold mb-4 mx-auto align-middle">
              <img width={170} src={photoUrl} />
            </div>
            <div className="flex-grow h-80 w-64 overflow-auto bg-transparent rounded-lg p-2">
  <p className="text-lg text-white whitespace-normal break-words">
    {eventReq}
  </p>
</div>


            <div className="flex justify-between items-center mt-auto">
              <Link to={eventForm}>
                <button className="px-4 hover:bg-red-400 py-2 bg-red-600 text-white rounded-lg font-semibold cursor-pointer">
                  Register
                </button>
              </Link>
              {loginAdmin&&<div>
             <button
                className="px-4   hover:text-blue-400 py-2 bg-yellow-500 text-white rounded-lg font-semibold cursor-pointer"
                onClick={() => handleEdit(_id)}
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDelete(_id)}
                className="px-4 hover:bg-red-800 py-2 bg-red-900 text-white rounded-lg font-semibold cursor-pointer"
              >
                <MdDelete />
              </button>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
