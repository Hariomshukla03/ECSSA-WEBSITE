import { useGSAP } from "@gsap/react";
import Marquee from "react-fast-marquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Developby from "./Developby";

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

  return (
    <div className="bg-black pt-10">
      <div>
        <h1 className="border-b-2 text-center p-4 font-bold hover:text-green-300 text-2xl sm:text-3xl md:text-4xl same">
          About
        </h1>
      </div>

      <h1 className="text-2xl font-bold text-center p-4 m-4 same sm:text-3xl md:text-4xl">
        Teachers
      </h1>

      <Marquee className="pt-8 overflow-hidden w-full" pauseOnHover>
        {[
          {
            name: "Ms. Manjiri Mangesh Gogate",
            title: "Head of the Department (ECS)",
            img: "https://slrtce.in/wp-content/uploads/2020/06/Manjiri-Mangesh-Gogate.jpg",
          },
          {
            name: "Ms. Samita Bhandari",
            title: "Assistant Professor",
            img: "https://slrtce.in/wp-content/uploads/2020/03/samita.jpg",
          },
          {
            name: "Mrs. Rashmi Maheshwari",
            title: "Assistant Professor",
            img: "https://slrtce.in/wp-content/uploads/2020/06/Rashmi-Maheshwari.jpg",
          },
          {
            name: "Mr. Vinaykumar Singh",
            title: "Assistant Professor",
            img: "https://slrtce.in/wp-content/uploads/2020/06/Vinay-Kumar-Singh.jpg",
          },
          {
            name: "Mr. Abhishek Laharia",
            title: "Assistant Professor",
            img: "https://slrtce.in/wp-content/uploads/2024/02/Untitled.jpg",
          },
          {
            name: "Mrs. Rohini Rathod",
            title: "Assistant Professor",
            img: "https://slrtce.in/wp-content/uploads/2020/06/Rohini-B.jpg",
          },
          {
            name: "Ms. Aarti Naik",
            title: "Assistant Professor",
            img: "https://slrtce.in/wp-content/uploads/2020/03/Arrati.jpg",
          },
          {
            name: "Dr. Poorva Waingankar",
            title: "Assistant Professor",
            img: "https://slrtce.in/wp-content/uploads/2024/05/Untitled1-1.jpg",
          },
          {
            name: "Mrs. Poonam Bawankar",
            title: "Assistant Professor",
            img: "https://slrtce.in/wp-content/uploads/2024/05/Untitled-2.jpg",
          },
        ].map((teacher, index) => (
          <div
            key={index}
            className="w-60 h-80 bg-zinc-500 m-4 p-4 sm:w-72 md:w-80 lg:w-96 flex flex-col items-center justify-center"
          >
            <div className="w-36 h-36 flex justify-center items-center rounded-full border-2 bg-gray-100 p-1">
              <img className="w-36 h-36 rounded-full" src={teacher.img} alt={teacher.name} />
            </div>
            <div className="text-center p-4">
              <h1 className="text-lg font-semibold">{teacher.name}</h1>
              <p className="p-2 text-sm">{teacher.title}</p>
            </div>
          </div>
        ))}
      </Marquee>

      <div>
        <h1 className="text-2xl font-bold text-center p-4 m-4 same sm:text-3xl md:text-4xl">
          Members
        </h1>
        <Marquee className="pt-8 w-full" pauseOnHover>
          {Array(9)
            .fill({
              name: "Mr. Name",
              title: "About Name",
              bgColor: "bg-red-300",
            })
            .map((member, index) => (
              <div
                key={index}
                className="w-60 h-72 bg-zinc-500 m-4 p-4 sm:w-72 md:w-80 lg:w-96 flex flex-col items-center justify-center"
              >
                <div className={`w-36 h-36 rounded-full ${member.bgColor} p-1`}></div>
                <div className="text-center">
                  <h1 className="text-lg font-semibold">{member.name}</h1>
                  <p className="p-1 text-sm">{member.title}</p>
                </div>
              </div>
            ))}
        </Marquee>
      </div>

      <Developby />
    </div>
  );
};

export default AboutPage;
