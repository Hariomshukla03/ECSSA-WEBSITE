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

import DeadshotRegistration from "./Components/DeadshotRegister";
import TypeRegister from "./Components/TypeRegister";
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/loginpage",
        element:<LoginPage/>
      },
      {
        path:"/Events",
        element:<Events/>
      },{
        path:"/deadshot/register",
        element:<DeadshotRegistration/>
      },
      {
        path:"/typesprint/register",
        element:<TypeRegister/>
      }
    ],
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <div className="bg-black text-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
