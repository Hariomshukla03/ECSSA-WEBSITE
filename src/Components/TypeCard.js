import { Link } from "react-router-dom";


const TypeCard = () => {
  return (
    <div className="group relative h-96 w-72 [perspective:1000px]">
      <div className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
      
        <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-red-400 to-purple-600 p-6 text-white [backface-visibility:hidden]">
       
          <div className="flex flex-col h-full">
           
            <div className="flex justify-between items-start z-10">
              <div className="text-3xl font-bold">TypeSprint</div>
            </div>
            <div className="mt-4 z-10">
              <p className="text-lg font-bold">Form Closed!</p>
              <br/>
              <p className="text-lg font-bold">The form submission has been closed. The results will be announced soon.</p><br/>
              <p className="text-lg font-bold"> Stay tuned for updates.</p>
            </div>
            <div className="mt-auto z-10">
              <p className="text-sm opacity-75">Hover to flip!</p>
            </div>
          </div>
        </div>

        <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-pink-400 to-purple-600 p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden] z-20">
          <div className="flex flex-col h-full">
            <div className="text-2xl font-bold mb-4">TypeSprint</div>
            <div className="flex-grow">
              <p className="text-lg">
                
                <br />
                Round 1: Typing Challenge (Speed & Accuracy)
                <br />
                Round 2: Code Typing Challenge (Syntax)
                <br />
                Final: Extreme-speed Showdown
              </p>
            </div>
            <div className="flex justify-between items-center mt-auto">
              
            <button className="px-4 py-2 bg-gray-600 text-white rounded-lg font-semibold cursor-not-allowed" disabled>
                  Registration Closed
                </button>
              
              <span className="text-3xl">💻</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeCard;