import Bot from "./Bot"
import Header from "./Header";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className="bg-black text-white">
      <Header/>
      <Bot/>
      <Outlet/>
    </div>
  );
};
export default Body;
