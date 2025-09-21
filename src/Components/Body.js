// import Bot from "./Bot"
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className="bg-black text-white">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
};
export default Body;
