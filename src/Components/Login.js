import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { BASE_URL } from "../utils/Data";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../utils/loginSlice";

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginAdmin = useSelector((store) => store.loginAdmin);
  const [emailId, SetEmailId] = useState("hs3@gmail.com");
  const [password, SetPassword] = useState("Pass@12345678");
  const [msg, SetMsg] = useState("");

  const HandleLogin = async (event) => {
    event.preventDefault();
    try {
      SetMsg("");
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );
      navigate("/admindash");
      dispatch(login(true));
    } catch (err) {
      SetMsg(err?.response?.data?.message);
      if (err?.response?.status === 401) {
        navigate("/login");
      }
    }
  };

  return (
    <>
      <StyledWrapper>
        {msg && (
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
              <p className="text-[indianred] text-base font-bold leading-5 truncate">
                Error !
              </p>
              <p className="text-[15px] my-2 leading-4 text-zinc-400 break-words">
                Oh no! <br />
                {msg}
              </p>
            </div>
          </div>
        )}

        <form className="form" onSubmit={HandleLogin}>
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
          <span className="input-span">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                SetPassword(e.target.value);
              }}
            />
          </span>
          {/* <span className="span text-red-400">{msg}</span> */}
          <button
            className="submit w-full py-3 text-lg font-semibold bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center justify-center"
            type="submit"
          >
            Login
          </button>

          <span className="span">This is only for Admin</span>
        </form>
      </StyledWrapper>
    </>
  );
};
const StyledWrapper = styled.div`
  .form {
    background-color: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    width: 100%;
    max-width: 320px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .form:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 8px 24px rgba(255, 255, 255, 0.2);
  }

  .input-span {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .label {
    font-size: 0.95rem;
    margin-bottom: 0.3rem;
    color: #ccc;
    font-weight: 500;
  }

  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 0.75rem 1rem;
    background-color: #111;
    color: #fff;
    border: 1px solid #333;
    border-radius: 8px;
    font-size: 1rem;
    transition: border 0.3s;
  }

  input[type="email"]:focus,
  input[type="password"]:focus {
    border-color: #888;
    outline: none;
  }

  .submit {
    background-color: #1a1a1a;
    color: white;
    padding: 0.9rem;
    border: none;
    width: 100%;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;
  }

  .submit:hover {
    background-color: #444;
  }

  .submit:active {
    background-color: #222;
  }

  .span {
    margin-top: 0.5rem;
    font-size: 0.85rem;
    color: #aaa;
  }

  .span a {
    color: #fff;
    text-decoration: underline;
  }
`;

export default Form;
