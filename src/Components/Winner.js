import axios from "axios";
import React, { useEffect } from "react";
import { winners, deleteWinner, editWinner } from "../utils/winnerSlice";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/Data";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Winner = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const winner = useSelector((store) => store.winners);
  const loginAdmin=useSelector((store)=>store.loginAdmin)

  // Fetch all winners
  const fetchWinners = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/winner/view`, {
        withCredentials: true,
      });
      dispatch(winners(response.data));
    } catch (error) {
      console.error("Error fetching winners:", error);
      if (error?.response?.status === 401) {
        navigate("/login");
      } else {
        alert("Network error. Please check server or BASE_URL.");
      }
    }
  };

  useEffect(() => {
    fetchWinners();
  },[]);

  // Delete winner
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/winner/delete/${id}`, {
        withCredentials: true,
      });
      dispatch(deleteWinner(id));
    } catch (err) {
      console.error("Error deleting winner:", err);
      if (err?.response?.status === 401) {
        navigate("/login");
      } else {
        alert("Failed to delete winner. Check network or permissions.");
      }
    }
  };

  // Edit winner placeholder
  const handleEdit = async (id) => {
    try {
      
      const res = await axios.get(`${BASE_URL}/winner/view/${id}`, {
        withCredentials: true,
      });
      if(res && res.data){
        dispatch(editWinner(res.data))
        
        navigate("/admindash")

      }
    } catch (err) {
      console.error("Error fetching winner for edit:", err);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
   
      <div
        className="absolute inset-0 w-full bg-repeat-y opacity-10 z-0"
        style={{
          backgroundImage: `url('/assets/Winnerbg.jpg')`,
          backgroundPosition: "top",
          backgroundSize: "auto",
        }}
      ></div>

      <div className="relative z-10 mt-16 flex justify-center items-center px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {winner && winner.length > 0 ? (
            winner.map((w) => (
              <div
                key={w._id}
                className="bg-gray-800 shadow-lg rounded-xl p-6 hover:scale-105 transform transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={w.winnerProfileUrl}
                    alt={w.winnerName}
                    className="w-32 h-32 rounded-full object-cover mb-4"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/default-user.png";
                    }}
                  />
                  <h2 className="text-2xl font-semibold mb-2">
                    {w.winnerName}
                  </h2>
                  <p className="text-lg text-gray-400 mb-2">{w.winnerEvent}</p>
                  <p className="text-sm text-gray-500">Rank: {w.winnerYear}</p>
                </div>
                {loginAdmin && <div className="flex justify-center mt-4">
                  <MdDelete
                    className="size-6 cursor-pointer hover:text-red-500"
                    onClick={() => handleDelete(w._id)}
                  />
                  <FaEdit
                    className="mx-4 size-6 cursor-pointer  hover:text-blue-400"
                    onClick={() => handleEdit(w._id)}
                  />
                </div>}
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-400">
              No winners found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Winner;
