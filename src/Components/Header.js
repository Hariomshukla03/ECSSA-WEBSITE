import { useGSAP } from "@gsap/react";
import {gsap} from "gsap"
import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/whitelogo.png"


const Header=()=>{
  const el=useRef()
useGSAP(()=>{
  gsap.from(".li",{
     y:-12,
     opacity:0,
     delay:0.5,
  })

})
    return(
        <div className="bg-black shadow-xl h-16 ">
            <div>
              <ul className="flex justify-around pt-5 ">
                <li className="li"><img className="w-8 h-8" src={logo}/></li>
                <Link to="/" ><li className="ml-64 li hover:text-red-300">Home</li></Link>
                <Link to="/announcement"><li className="cursor-pointer li hover:text-red-300">Announcement</li></Link>
                <Link to="/events"><li className="cursor-pointer li hover:text-red-300">Events</li></Link>
                <Link to="/about"><li className="cursor-pointer li hover:text-red-300">About</li></Link>
                <Link to="/contact"><li className="cursor-pointer li hover:text-red-300">Contact</li></Link>
                <Link to="/loginpage"><button className="li  p-[4px] mt-[-4px] shadow-lg hover:after:h-[2px]">Login</button></Link>
              </ul>
            </div>

        </div>
    )
}
export default Header;