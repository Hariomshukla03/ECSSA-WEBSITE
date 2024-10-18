import MainPage from "./MainPage";
import EcssaInfo from "./EcssaInfo";
import Latest from "./Latest";
import Header from "./Header";
import Bot from "./Bot";
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
