import { Link } from "react-router-dom";
const DeadshotCard = () => {
  return (
    <div className="group relative h-96 w-72 [perspective:1000px]">
      <div className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
        
        <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-gray-900 to-red-500 p-6 text-white [backface-visibility:hidden]">
          <div className="flex flex-col h-full">
            
            <div className="flex justify-between items-start z-10">
              <div className="text-3xl font-bold">Survival of the Fittest (Deadshot)</div>
            </div>
            <div className="mt-4 z-10">
              <p className="text-lg font-bold">Tuesday, February 11th, 2025</p>
              <p className="text-lg font-bold">3:00 PM - 5:00 PM</p>
              <p className="text-lg font-bold">Venue - Lab 311 </p>
            </div>
            <div className="mt-auto z-10">
              <p className="text-sm opacity-75">Hover to flip!</p>
            </div>
          </div>
        </div>

       
        <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-gray-900 to-red-500 p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden] z-20">
          <div className="flex flex-col h-full">
            <div className="text-2xl font-bold mb-4">
              Survival of the Fittest
            </div>
            <div className="flex-grow">
              <p className="text-lg">
                Round 1: Debugging Challenge <br />
                Round 2: Coding Sprint
                <br />
                Round 3 Survival Challenge
                <br />
              </p>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <Link to="/deadshot/register">
                <button className="px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-opacity-90 transition-colors cursor-pointer">
                  Register
                </button>
              </Link>
              <span className="text-3xl">✨</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeadshotCard;
