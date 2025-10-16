import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../utils/Data";

const ForgetPas = () => {
  const [emailId, SetEmailId] = useState("");
  const [password, SetPassword] = useState("");
  const [msg, SetMsg] = useState("");
  const {token}=useParams();
  const navigate=useNavigate()
 const handleResetPas=async(event)=>{
    event.preventDefault();
    try {
        const res=await axios.patch(BASE_URL+`/reset/${token}`,{emailId: emailId,
  password: password},{withCredentials:true})
        
        SetMsg(res?.data?.message)
        setTimeout(()=>{
        navigate("/login")
        },500)
        
        
    } catch (error) {
        
        SetMsg(error?.response?.data)
    }
 }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0F1A] px-4 sm:px-6">
      <div className="bg-[#111827] text-white rounded-2xl shadow-[0_0_25px_rgba(59,130,246,0.3)] p-6 sm:p-8 w-full max-w-md border border-blue-900/30 transition-all duration-300">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
          Forgot Password
        </h2>
        <p className="text-gray-400 text-center mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
          Enter your registered email (or new one) and new password below to reset your account.
        </p>

        <form className="flex flex-col space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Email
            </label>
            <input
              onChange={(e) => SetEmailId(e.target.value)}
                 value={emailId}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-[#1E293B] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              New Password
            </label>
            <input
              onChange={(e) => SetPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter new password"
              className="w-full px-4 py-3 rounded-lg bg-[#1E293B] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm sm:text-base"
            />
          </div>
            <h2 className="text-red-600 ">{msg}</h2>
          <button
          onClick={handleResetPas}
            type="submit"
            className="mt-4 sm:mt-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-all duration-300 text-white font-semibold py-3 rounded-lg shadow-lg shadow-blue-600/20 text-sm sm:text-base"
          >
            Reset Password
          </button>

          <p className="text-center text-xs sm:text-sm text-gray-400 mt-4">
            Remembered your password?{" "}
            <Link
              to={"/login"}
              className="text-blue-400 hover:text-blue-300 font-semibold"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgetPas;
