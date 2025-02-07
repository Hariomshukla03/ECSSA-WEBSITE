
import Header from "./Header";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className="bg-black text-white">
      <Header/>
      {/* <BotPenguinChat/> */}
      <Outlet/>
    </div>
  );
};
export default Body;
