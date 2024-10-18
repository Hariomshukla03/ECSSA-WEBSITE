import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import {gsap} from 'gsap'
const EcssaInfo=()=>{

    useGSAP(()=>{
      gsap.from(".same",{
        y:20,
        opacity:0,
        delay:1,
        stagger:0.15
      })
    })
    return(
        <div>
            <div  className="w-[1310px] text-wrap pl-8 py-8">
                <p className="mb-6 same"> 
                <span className="font-bold text-red-300 text-transparent bg-clip-text"  style={{
        backgroundImage: 'linear-gradient(116deg, #ff8660 71.79%, #ff5783 98.51%)'
      }}>ECSSSA stands for Electronics Computer Science Students association </span>of Shree LR Tiwari College of Engineering. It is the departmental Student Chapter for Electronics and Computer Science students.</p>
                <p className="mb-6 same">
                ECSSA-SLRTCE founded in the year 2022, our committee organizes events to create awareness for Holistic Growth, to manage events and bridge the gap between classroom education and the technical skills required by students to be industry ready.
                </p>
                <p className="mb-6 same">
                Our activities of ECSSA will nurture students’ and create exposure to Software & Hardware leading domains in technology to offer a head start. We focus on holistic growth, so our students become complete engineers.
                </p>
                <p className="mb-6 same">
                Our mission is to provide a platform for students to explore the new technology, practice and imprint the same principle in their holistic growth.
                </p>
            </div>
        </div>
    )
}
export default EcssaInfo;