import Header from "./Components/Header";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import AboutPage from "./Components/AboutPage";
import AnnouncementPage from "./Components/AnnouncementPage";
import Body from "./Components/Body";
import MainPage from "./Components/MainPage";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import LoginPage from "./Components/LoginPage";
import Events from "./Components/Events";
import DeadshotWinner from "./Components/DeadshotWinner.js";

import AdminDash from "./Components/AdminDash.js";
import Winner from "./Components/Winner.js";
import ForgetPas from "./Components/ForgetPas.js";
import { Toaster } from "react-hot-toast";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,

    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/announcement",
        element: <AnnouncementPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/winner",
        element: <Winner />,
      },
      {
        path:"/login",
        element:<LoginPage/>
      },
      {
        path:"/Events",
        element:<Events/>
      },
      {
        path:"deadshot/win",
        element:<DeadshotWinner/>
      },
      {
        path:"/admindash",
        element:<AdminDash/>
      },
      {
        path:"/forget-password/:token",
        element:<ForgetPas/>
      }
     
      
    ],
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <div className="bg-black text-white">
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </div>
  
  );
}

export default App;
