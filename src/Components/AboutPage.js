import { useGSAP } from "@gsap/react";
import Marquee from "react-fast-marquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Developby from "./Developby";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { BASE_URL } from "../utils/Data";
import { deleteMember, editMember, members } from "../utils/memberSlice";
import { useNavigate } from "react-router-dom";
import Teacher from "./Teacher";
import { teachers } from "../utils/teacherSlice";

const AboutPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".same", {
      y: 10,
      opacity: 0,
      delay: 0.5,
      stagger: 0.5,
    });
  });

  const navigate = useNavigate();
  const member = useSelector((store) => store.members);
  const dispatch = useDispatch();
  const loginAdmin=useSelector((store)=>store.loginAdmin)

  const fetch = async () => {
    try {
      const teacher = await axios.get(BASE_URL + "/teacher/view", {
        withCredentials: true,
      });
      if (teacher?.data) {
        dispatch(teachers(teacher.data));
      }
      if (member.length > 0) return;
      const res = await axios.get(BASE_URL + "/member/view", {
        withCredentials: true,
      });
      if (res?.data) {
        dispatch(members(res.data));
      }
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
      if (error.response?.status === 401) {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/member/delete/${id}`, {
        withCredentials: true,
      });
      if (res?.status === 200) {
        dispatch(deleteMember(id));
      }
    } catch (error) {
      console.error("Error deleting member:", error);
    }
  };

  const handleEdit = async (id) => {
    try {
      const res = await axios.get(`${BASE_URL}/member/view/${id}`, {
        withCredentials: true,
      });
      if (res?.data) {
        dispatch(editMember(res.data));
        navigate("/admindash");
      }
    } catch (error) {
      console.error("Error editing member:", error);
      if (error.response?.status === 401) {
        navigate("/login");
      }
    }
  };

  return (
    <div className="relative mt-[3rem] bg-black min-h-screen overflow-hidden">
     
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
      <svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  viewBox="0 0 1440 560"
  preserveAspectRatio="none"
  className="w-full h-full"
>
  <g mask="url(#SvgjsMask1000)" fill="none">
    <rect width="1440" height="580" fill="black"></rect>
    <path
      d="M887.1 651.87C1036.77 598.61 1066.74 160.84 1281.51 153.62 1496.28 146.4 1569.85 307.58 1675.92 310.42"
      stroke="rgba(194, 33, 33, 0.58)"
      strokeWidth="1"
    ></path>
    <path
      d="M633.79 599.42C767.18 598.6 876.25 483.37 1153.16 477.22 1430.08 471.07 1527.16 221.39 1672.54 214.02"
      stroke="rgba(194, 33, 33, 0.58)"
      strokeWidth="1"
    ></path>
    <path
      d="M223.55 564.14C414.17 558.97 554.88 289.31 931.91 281.27 1308.95 273.23 1453.71 49.12 1640.28 46.07"
      stroke="rgba(194, 33, 33, 0.58)"
      strokeWidth="1"
    ></path>
    <path
      d="M60.67 585.23C253.96 578.91 392.55 289.13 771.76 280.68 1150.97 272.23 1296.48 59.31 1482.85 56.68"
      stroke="rgba(194, 33, 33, 0.58)"
      strokeWidth="1"
    ></path>
    <path
      d="M379.71 619.65C538.2 563.99 560.74 108.79 798.73 94.41 1036.72 80.03 1008.24 164.41 1217.75 164.41 1427.26 164.41 1530.56 94.65 1636.77 94.41"
      stroke="rgba(194, 33, 33, 0.58)"
      strokeWidth="1"
    ></path>
  </g>
  <defs>
    <mask id="SvgjsMask1000">
      <rect width="1440" height="560" fill="#ffffff"></rect>
    </mask>
  </defs>
</svg>

      </div>

      <div className="relative z-10">
        <h1 className="border-b-2 text-center p-4 font-bold hover:text-green-300 text-2xl sm:text-3xl md:text-4xl same">
          About
        </h1>

        <h1 className="text-2xl font-bold text-center p-4 m-4 same sm:text-3xl md:text-4xl">
          Teachers
        </h1>

        <Teacher />

        <h1 className="text-2xl font-bold text-center p-4 m-4 same sm:text-3xl md:text-4xl">
          Members
        </h1>

        <Marquee className="pt-8 w-full" pauseOnHover>
          {Array.isArray(member) &&
            member.map((member) => (
              <div
                key={member._id}
                className="w-60 h-72 bg-[#1F2937] m-4 p-4 sm:w-72 md:w-80 lg:w-96 flex flex-col items-center justify-center"
              >
                <div className="w-36 h-36 flex justify-center items-center rounded-full border-2 bg-gray-100 p-1">
                  <img
                    className="w-36 h-36 rounded-full"
                    src={member.memberImageUrl}
                    alt="member"
                  />
                </div>
                <div className="text-center">
                  <h1 className="text-lg font-semibold">{member.memberName}</h1>
                  <p className="p-1 text-sm">{member.memberPosition}</p>
                </div>
                {loginAdmin&&<div className="flex">
                  <MdDelete
                    className="mt-2 size-6 cursor-pointer hover:text-red-500"
                    onClick={() => handleDelete(member._id)}
                  />
                  <FaEdit
                    className="mt-2 mx-4 size-6 cursor-pointer hover:text-blue-400"
                    onClick={() => handleEdit(member._id)}
                  />
                </div>}
              </div>
            ))}
        </Marquee>

        <Developby />
      </div>
    </div>
  );
};

export default AboutPage;
