import React from "react";
import styled from "styled-components";

const Buttons = () => {
  return (
    <StyledWrapper>
      <ul className="wrapper">
        <li className="icon instagram">
          <a
            href="https://www.instagram.com/ecssa.slrtce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="tooltip">Instagram</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 2C3.13 2 0 5.13 0 9v6c0 3.87 3.13 7 7 7h10c3.87 0 7-3.13 7-7V9c0-3.87-3.13-7-7-7H7zm10 2c2.76 0 5 2.24 5 5v6c0 2.76-2.24 5-5 5H7c-2.76 0-5-2.24-5-5V9c0-2.76 2.24-5 5-5h10zM12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zm0 2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm6.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </a>
        </li>
        <li className="icon linkedin">
          <a
            href="https://www.linkedin.com/company/ecssa-slrtce"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="tooltip">LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 3H3.553C2.7 3 2 3.707 2 4.58v14.841C2 20.295 2.7 21 3.553 21h16.895c.854 0 1.553-.705 1.553-1.579V4.58C22 3.707 21.301 3 20.447 3zM8.338 17H5.338V10h3v7zm-1.5-8.09c-.966 0-1.75-.792-1.75-1.77s.784-1.77 1.75-1.77 1.75.792 1.75 1.77-.784 1.77-1.75 1.77zM18.662 17h-3v-3.75c0-.964-.022-2.205-1.342-2.205-1.342 0-1.548 1.049-1.548 2.137V17h-3V10h2.882v.96h.041c.401-.757 1.382-1.56 2.845-1.56 3.041 0 3.062 2.004 3.062 4.122V17z" />
            </svg>
          </a>
        </li>
        <li className="icon email">
          <a href="mailto:ecssa@slrtce.in">
            <span className="tooltip">Email</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M1 5v14h22V5H1zm20 2v.511l-9 6.661-9-6.661V7h18zM3 17V9.209l8.653 6.401a1 1 0 0 0 1.194 0L21 9.209V17H3z" />
            </svg>
          </a>
        </li>
      </ul>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .wrapper {
    display: flex;
    list-style: none;
    padding-top: 40px;
    justify-content: center;
  }

  .icon {
    position: relative;
    background: #333;
    border-radius: 50%;
    margin: 10px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .icon a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: white;
  }

  .tooltip {
    position: absolute;
    top: -40px;
    background: #333;
    color: #fff;
    padding: 5px 8px;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .icon:hover .tooltip {
    opacity: 1;
  }

  .icon:hover {
    transform: scale(1.1);
  }

  .instagram:hover,
  .instagram:hover .tooltip {
    background: #e4405f;
  }

  .linkedin:hover,
  .linkedin:hover .tooltip {
    background: #0077b5;
  }

  .email:hover,
  .email:hover .tooltip {
    background: #ea4335;
  }
`;

export default Buttons;
