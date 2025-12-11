import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { BASE_URL } from "../utils/Data";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../utils/loginSlice";
import Particles from "./Particles";
import toast from "react-hot-toast";

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginAdmin = useSelector((store) => store.loginAdmin);
  const [emailId, SetEmailId] = useState("");
  const [password, SetPassword] = useState("");
  const [loading, Setloading] = useState(false);
  const [forget, SetForget] = useState(false);

  const HandleLogin = async (event) => {
    if(!emailId || !password){
      toast.error("Please fill all the field");
      return;
    }
    event.preventDefault();
    const toastid=toast.loading("Logging in...");
    if(loading) return;
    try {
      Setloading(true)
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );
      
      toast.success('Login Successfully!',{id:toastid})
      setTimeout(() => {
        navigate("/admindash");
        
      }, 1500);

      dispatch(login(true));
    } catch (err) {
      Setloading(false)
      toast.error(err?.response?.data?.message || "Something went wrong",{ id: toastid })

      if (err?.response?.status === 401) {
        navigate("/login");
      }
    }
  };

  const handleForgetPass = async (event) => {
    event.preventDefault();
    
    const tid=toast.loading("Wait! Sending Link")
    try {
      const res = await axios.post(
        BASE_URL + "/forget-password",
        { emailId },
        { withCredentials: true }
      );
      // SetMsg(res?.data?.message);
      toast.success("Password reset link sent to your email",{id:tid})
    } catch (err) {
     toast.error(err?.response?.data?.message || "Something went wrong",{id:tid})

    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-10">
        <Particles
          particleColors={["#e63946", "#e63946"]}
          particleCount={400}
          particleSpread={50}
          speed={0.02}
          particleBaseSize={500}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <StyledWrapper>
        {/* {msg && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex w-[250px] h-20 overflow-hidden bg-white shadow-lg rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" height="80" width="12">
              <path
                strokeLinecap="round"
                strokeWidth="2"
                stroke="indianred"
                fill="indianred"
                d="M 6 0 
           Q 3 4, 6 8 
           T 6 16 
           Q 3 20, 6 24 
           T 6 32 
           Q 3 36, 6 40 
           T 6 48 
           Q 3 52, 6 56 
           T 6 64 
           Q 3 68, 6 72 
           T 6 80 
           L 0 80 
           L 0 0 
           Z"
              />
            </svg>
            <div className="px-2 py-1 overflow-hidden w-full">
              <p className="text-[indianred] text-base font-bold leading-5 truncate"></p>
              <p className="text-[15px] my-2 leading-4 text-zinc-400 break-words">
                <br />
                {msg}
              </p>
            </div>
          </div>
        )} */}

        <form className="form">
          <span className="input-span">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={emailId}
              required
              onChange={(e) => SetEmailId(e.target.value)}
            />
          </span>

          {!forget && (
            <span className="input-span">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
              />
            </span>
          )}

          <button
            className="submit w-full py-3 text-lg font-semibold flex items-center justify-center"
            type="submit"
            onClick={!forget ? HandleLogin : handleForgetPass}
          >
            {!forget ? "Login" : "Forget password"}
          </button>

          <span
            className="cursor-pointer m-auto text-[#EB3D4F]"
            onClick={forget ? () => SetForget(false) : () => SetForget(true)}
          >
            {!forget ? "forget password?" : "login"}
          </span>

          <span className="span">This is only for Admin</span>
        </form>
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  position: relative;
  z-index: 20;

  .form {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 2.5rem;
    width: 100%;
    max-width: 480px; /* ✅ Exact width like Forget Password */
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    color: #fff;
    box-shadow: 0 8px 25px rgba(230, 57, 70, 0.2);
    transition: all 0.3s ease;
  }

  .form:hover {
    box-shadow: 0 12px 35px rgba(230, 57, 70, 0.35);
    transform: translateY(-6px) scale(1.02);
  }

  .input-span {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .label {
    font-size: 0.95rem;
    margin-bottom: 0.3rem;
    color: #bbb;
    font-weight: 500;
  }

  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 0.8rem 1rem;
    background: rgba(20, 20, 20, 0.8);
    color: #fff;
    border: 1px solid rgba(230, 57, 70, 0.4);
    border-radius: 10px;
    font-size: 1rem;
    transition: all 0.3s;
  }

  input[type="email"]:focus,
  input[type="password"]:focus {
    border-color: #e63946;
    box-shadow: 0 0 8px rgba(230, 57, 70, 0.6);
    outline: none;
  }

  .submit {
    background: linear-gradient(135deg, #e63946, #ff4d6d);
    color: white;
    padding: 0.9rem;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s;
  }

  .submit:hover {
    background: linear-gradient(135deg, #ff4d6d, #e63946);
    box-shadow: 0 0 12px rgba(255, 77, 109, 0.7);
  }

  .submit:active {
    background: #c91d35;
    transform: scale(0.97);
  }

  .span {
    margin-top: 0.5rem;
    font-size: 0.85rem;
    color: #aaa;
    text-align: center;
  }
`;

export default Form;
