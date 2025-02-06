import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="group relative h-96 w-72 [perspective:1000px]">
      <div className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
        <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-red-400 to-purple-600 p-6 text-white [backface-visibility:hidden]">
          <div className="flex flex-col h-full">
            <img className="absolute object-cover w-full h-full inset-0 opacity-50 blur-sm overflow-clip" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3d210e14-2622-4902-9ccc-14735ab0395c/dgipr04-ea8e359b-0d3b-4618-91b5-e75abd7c5e8b.png/v1/fit/w_828,h_1270,q_70,strp/zoro_vs_king_by_conceptcat_dgipr04-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM4MCIsInBhdGgiOiJcL2ZcLzNkMjEwZTE0LTI2MjItNDkwMi05Y2NjLTE0NzM1YWIwMzk1Y1wvZGdpcHIwNC1lYThlMzU5Yi0wZDNiLTQ2MTgtOTFiNS1lNzVhYmQ3YzVlOGIucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.v7tTPxFpWcUgTYYlQDvDjSXu-Oc9LJasH9aUvd_Ukic"></img>
            <div className="flex justify-between items-start">
              <div className="text-3xl font-bold z-10">Event Name</div>
            </div>
            <div className="mt-4">
              <p className="text-lg font-bold z-10 text-white">
                About Events and etc etc
              </p>
            </div>
            <div className="mt-auto z-10">
              <p className="text-sm opacity-75">Hover to flip!</p>
            </div>
          </div>
        </div>

        <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-pink-400 to-purple-600 p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden] z-20">
          <div className="flex flex-col h-full">
            <div className="text-2xl font-bold mb-4">Event Name</div>
            <div className="flex-grow">
              <p className="text-lg">More Info</p>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <Link to="/register">
                <button
                  className="px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-opacity-90 transition-colors cursor-pointer"
                >
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

export default Card;
