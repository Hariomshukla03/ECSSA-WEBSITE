// Footer.js
import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-content">
        
        <p className="copyright">
          © {new Date().getFullYear()} ECSSA SLRTCE. All Rights Reserved.
        </p>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background: #000;
  color: #ccc;
  padding: 30px 20px;
  text-align: center;

  .brand {
    color: #e63946; /* red accent */
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .footer-content {
    max-width: 900px;
    margin: 0 auto;
  }

  .copyright {
    margin-top: 20px;
    font-size: 0.85rem;
    color: #666;
  }
`;

export default Footer;
