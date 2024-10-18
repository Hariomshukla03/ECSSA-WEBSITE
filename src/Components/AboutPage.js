import { useGSAP } from "@gsap/react";
import Marquee from "react-fast-marquee";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import Developby from "./Developby";
const AboutPage = () => {
  
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(()=>{
        gsap.from(".same",{
            y:10,
            opacity:0,
            delay:0.5,
            stagger:0.5
        })  
    })
  return (
    <div className="bg-black">
      <div>
        <h1 className="border-b-2 text-center p-4 font-bold hover:text-green-300 text-2xl same ">
          About
        </h1>
      </div>
      <h1 className="text-2xl font-bold text-center p-4 m-4 same">Teachers</h1>
      <Marquee className="pt-8  overflow-hidden" pauseOnHover> 
        <div className="w-60 h-72 bg-zinc-500 m-4 p-4 ">
          <div className=" w-36 h-36 rounded-full border-s-2 bg-gray-100 p-1 m-1 ml-8">
            <img className="w-36 h-36 rounded-full" src="https://slrtce.in/wp-content/uploads/2020/06/Manjiri-Mangesh-Gogate.jpg"/>
          </div>
          <div className="text-center p-4">
            <h1>Ms. Manjiri Mangesh Gogate</h1>
            <p className="p-2">Head of the Department (ECS)</p>
          </div>
        </div>
        <div className="w-60 h-72 bg-zinc-500 m-4 p-4 ">
          <div className=" w-36 h-36  rounded-full border-s-2 p-1 m-1 ml-8">
            <img className="w-36 h-36 rounded-full" src="https://slrtce.in/wp-content/uploads/2020/03/samita.jpg"/>
          </div>
          <div className="text-center p-4">
            <h1>Ms. Samita Bhandari</h1>
            <p className="p-2">Assistant Professor</p>
          </div>
        </div>
        <div className="w-60 h-72 bg-zinc-500 m-4 p-4 ">
          <div className=" w-36 h-36 rounded-full border-s-2 p-1 m-1 ml-8">
            <img className="w-36 h-36 rounded-full" src="https://slrtce.in/wp-content/uploads/2020/06/Rashmi-Maheshwari.jpg"/>
          </div>
          <div className="text-center p-4">
            <h1>Mrs. Rashmi Maheshwari</h1>
            <p className="p-2">Assistant Professor</p>
          </div>
        </div>
        <div className="w-60 h-72 bg-zinc-500 m-4 p-4 ">
          <div className=" w-36 h-36 rounded-full  p-1 m-1 ml-8">
            <img className="w-36 h-36 rounded-full" src="https://slrtce.in/wp-content/uploads/2020/06/Vinay-Kumar-Singh.jpg"/>
          </div>
          <div className="text-center p-4">
            <h1>Mr. Vinaykumar Singh</h1>
            <p className="p-2">Assistant Professor</p>
          </div>
        </div>
        <div className="w-60 h-72 bg-zinc-500 m-4 p-4 ">
          <div className=" w-36 h-36 rounded-full  p-1 m-1 ml-8">
            <img className="w-36 h-36 rounded-full" src="https://slrtce.in/wp-content/uploads/2024/02/Untitled.jpg"/>
          </div>
          <div className="text-center p-4">
            <h1>Mr. Abhishek Laharia</h1>
            <p className="p-2">Assistant Professor</p>
          </div>
        </div><div className="w-60 h-72 bg-zinc-500 m-4 p-4 ">
          <div className=" w-36 h-36 rounded-full  p-1 m-1 ml-8">
            <img className="w-36 h-36 rounded-full" src="https://slrtce.in/wp-content/uploads/2020/06/Rohini-B.jpg"/>
          </div>
          <div className="text-center p-4">
            <h1>Mrs. Rohini Rathod</h1>
            <p className="p-2">Assistant Professor</p>
          </div>
        </div><div className="w-60 h-72 bg-zinc-500 m-4 p-4 ">
          <div className=" w-36 h-36 rounded-full  p-1 m-1 ml-8">
            <img className="w-36 h-36 rounded-full" src="https://slrtce.in/wp-content/uploads/2020/03/Arrati.jpg"/>
          </div>
          <div className="text-center p-4">
            <h1>Ms. Aarti Naik</h1>
            <p className="p-2">Assistant Professor</p>
          </div>
        </div><div className="w-60 h-72 bg-zinc-500 m-4 p-4 ">
          <div className=" w-36 h-36 rounded-full  p-1 m-1 ml-8">
            <img className="w-36 h-36 rounded-full" src="https://slrtce.in/wp-content/uploads/2024/05/Untitled1-1.jpg"/>
          </div>
          <div className="text-center p-4">
            <h1>Dr. Poorva Waingankar</h1>
            <p className="p-2">Assistant Professor</p>
          </div>
        </div><div className="w-60 h-72 bg-zinc-500 m-4 p-4 ">
          <div className=" w-36 h-36 rounded-full  p-1 m-1 ml-8">
            <img className="w-36 h-36 rounded-full" src="https://slrtce.in/wp-content/uploads/2024/05/Untitled-2.jpg"/>
          </div>
          <div className="text-center p-4">
            <h1>Mrs. Poonam Bawankar</h1>
            <p className="p-2">Assistant Professor</p>
          </div>
        </div>
      </Marquee>
      <div>
      <h1 className="text-2xl font-bold text-center p-4 m-4 same">Members</h1>
      <Marquee className="pt-8" pauseOnHover> 
        <div className="w-60 h-72 bg-zinc-500 m-4 p-4 ">
          <div className=" w-36 h-36 rounded-full bg-red-300 p-1 m-1 ml-8"></div>
          <div className="text-center">
            <h1>Mr.Name</h1>
            <p className="p-1">About Name</p>
          </div>
        </div>
        <div className="w-60 h-72 bg-zinc-500 m-4 p-4 ">
          <div className=" w-36 h-36 rounded-full bg-red-300 p-1 m-1 ml-8"></div>
          <div className="text-center">
            <h1>Mr.Name</h1>
            <p className="p-1">About Name</p>
          </div>
        </div>
        <div className="w-60 h-72 bg-zinc-500 m-4 p-4 ">
          <div className=" w-36 h-36 rounded-full bg-red-300 p-1 m-1 ml-8"></div>
          <div className="text-center">
            <h1>Mr.Name</h1>
            <p className="p-1">About Name</p>
          </div>
        </div>
        <div className="w-60 h-72 bg-zinc-500 m-4 p-4 ">
          <div className=" w-36 h-36 rounded-full bg-red-300 p-1 m-1 ml-8"></div>
          <div className="text-center">
            <h1>Mr.Name</h1>
            <p className="p-1">About Name</p>
          </div>
        </div>
        <div className="w-60 h-72 bg-zinc-500 m-4 p-4 ">
          <div className=" w-36 h-36 rounded-full bg-red-300 p-1 m-1 ml-8"></div>
          <div className="text-center">
            <h1>Mr.Name</h1>
            <p className="p-1">About Name</p>
          </div>
        </div><div className="w-60 h-72 bg-zinc-500 m-4 p-4 ">
          <div className=" w-36 h-36 rounded-full bg-red-300 p-1 m-1 ml-8"></div>
          <div className="text-center">
            <h1>Mr.Name</h1>
            <p className="p-1">About Name</p>
          </div>
        </div><div className="w-60 h-72 bg-zinc-500 m-4 p-4 ">
          <div className=" w-36 h-36 rounded-full bg-red-300 p-1 m-1 ml-8"></div>
          <div className="text-center">
            <h1>Mr.Name</h1>
            <p className="p-1">About Name</p>
          </div>
        </div><div className="w-60 h-72 bg-zinc-500 m-4 p-4 ">
          <div className=" w-36 h-36 rounded-full bg-red-300 p-1 m-1 ml-8"></div>
          <div className="text-center">
            <h1>Mr.Name</h1>
            <p className="p-1">About Name</p>
          </div>
        </div><div className="w-60 h-72 bg-zinc-500 m-4 p-4 ">
          <div className=" w-36 h-36 rounded-full bg-red-300 p-1 m-1 ml-8"></div>
          <div className="text-center">
            <h1>Mr.Name</h1>
            <p className="p-1">About Name</p>
          </div>
        </div>
      </Marquee>
      </div>
        <Developby/>
    </div>
  );
};
export default AboutPage;
