import { Link } from "react-router-dom";

const DecodeCard = () => {
  return (
    <div className="group relative h-96 w-72 [perspective:1000px]">
      <div className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
        {/* Front Side */}
        <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-blue-400 to-indigo-600 p-6 text-white [backface-visibility:hidden]">
          <div className="flex flex-col h-full">
            <img
              className="absolute object-cover w-full h-full inset-0 opacity-50 blur-sm"
              src=""
              alt="poster"
            />
            <div className="flex justify-between items-start z-10">
              <div className="text-3xl font-bold">DECODE & DISCOVER</div>
            </div>
            <div className="mt-4 z-10">
              <p className="text-lg font-bold">Monday, February 12th, 2025</p>
              <p className="text-lg font-bold">3:00 PM - 5:00 PM</p>
              <p className="text-lg font-bold">Venue - Lab 311</p>
            </div>
            <div className="mt-auto z-10">
              <p className="text-sm opacity-75">Hover to flip!</p>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-purple-400 to-indigo-600 p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden] z-20">
          <div className="flex flex-col h-full">
            <div className="text-2xl font-bold mb-4">Event Overview</div>
            <div className="flex-grow">
            <p className="text-lg">
  Decode & Discover challenges participants to analyze research papers, extract key insights, and summarize findings. 🧩🔍📑
</p>

            </div>
            <div className="flex justify-between items-center mt-auto">
              <Link to="/decode/register">
                <button className="px-4 py-2 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-opacity-90 transition-colors cursor-pointer">
                  Register
                </button>
              </Link>
              <span className="text-3xl">📖</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecodeCard;
