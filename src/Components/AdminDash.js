import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminEvent from "./AdminEvent";
import AdminMember from "./AdminMember";
import AdminTeacher from "./AdminTeacher";
import AdminWinner from "./AdminWinner";

const AdminDash = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginAdmin = useSelector((store) => store.loginAdmin);

  useEffect(() => {
    if (loginAdmin === false) {
      navigate("/login");
    }
  }, []);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [show, setShow] = useState("Event");

  const handleShow = (value) => {
    setShow(value);
    setSidebarOpen(false);
  };

  return (
    <>
      
      <div className="hidden sm:flex h-screen overflow-hidden bg-gray-100 pt-16">
        
        <div className="bg-gray-800 w-64 p-6  h-full fixed">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Admin Dashboard
          </h2>
          <ul className="text-white space-y-4">
            <li
              className="hover:bg-gray-700 p-2 rounded cursor-pointer"
              onClick={() => handleShow("Event")}
            >
              Event
            </li>
            <li
              className="hover:bg-gray-700 p-2 rounded cursor-pointer"
              onClick={() => handleShow("Members")}
            >
              Members
            </li>
            <li
              className="hover:bg-gray-700 p-2 rounded cursor-pointer"
              onClick={() => handleShow("Teachers")}
            >
              Teachers
            </li>
            <li
              className="hover:bg-gray-700 p-2 rounded cursor-pointer"
              onClick={() => handleShow("Winners")}
            >
              Winners
            </li>
          </ul>
        </div>

       
        <div className="flex-1 ml-64 p-6 bg-slate-600 overflow-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Manage Dashboard</h1>

          {show === "Event" && <AdminEvent />}
          {show === "Members" && <AdminMember />}
          {show === "Teachers" && <AdminTeacher />}
          {show === "Winners" && <AdminWinner />}
        </div>
      </div>

      
      <div className="sm:hidden flex flex-col h-screen bg-gray-100">
        
        <div className="bg-gray-800 mt-16 text-white flex justify-between items-center px-4 py-3 fixed top-0 left-0 right-0 z-50">
          <h2 className="text-xl font-bold">Admin Dashboard</h2>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  sidebarOpen
                    ? "M6 18L18 6M6 6l12 12" // X icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger
                }
              />
            </svg>
          </button>
        </div>

       
        <div
          className={`fixed mt-8 top-0 left-0 w-64 h-full bg-gray-800 p-6 z-40 transform transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="text-white space-y-4 mt-16">
            <li
              className="hover:bg-gray-700 p-2 rounded cursor-pointer"
              onClick={() => handleShow("Event")}
            >
              Event
            </li>
            <li
              className="hover:bg-gray-700 p-2 rounded cursor-pointer"
              onClick={() => handleShow("Members")}
            >
              Members
            </li>
            <li
              className="hover:bg-gray-700 p-2 rounded cursor-pointer"
              onClick={() => handleShow("Teachers")}
            >
              Teachers
            </li>
            <li
              className="hover:bg-gray-700 p-2 rounded cursor-pointer"
              onClick={() => handleShow("Winners")}
            >
              Winners
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="mt-16 p-4 bg-slate-600 overflow-auto flex-1">
          <h1 className="text-2xl font-bold text-white mb-6">Manage Dashboard</h1>

          {show === "Event" && <AdminEvent />}
          {show === "Members" && <AdminMember />}
          {show === "Teachers" && <AdminTeacher />}
          {show === "Winners" && <AdminWinner />}
        </div>
      </div>
    </>
  );
};

export default AdminDash;
