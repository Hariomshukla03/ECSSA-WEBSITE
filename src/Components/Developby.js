import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {gsap} from 'gsap'

const Developby=()=>{
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(()=>{
        gsap.from(".dev",{
            x:200,
            opacity:0,
            stagger:0.5,
            scrollTrigger:{
                scrub:1,
                //markers:true,
                start:"92% 90%",
                end:"+=30"
            }


        })
    })
    return (<div>
        <div className="overflow-hidden">
            <h1 className="text-center font-bold text-2xl p-4">Developed By</h1>
            <div className="text-lg flex justify-around p-8 mb-8 cursor-pointer dev ">
                <h1 className="dev">Hariom Shukla</h1>
                <h1 className="dev">Raj Yadav</h1>
                <h1 className="dev">Rohit Singh</h1>
            </div>
        </div>  
    </div>)
}
export default Developby