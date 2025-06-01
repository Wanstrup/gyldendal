import React from "react";
import "./Footer.css";
import footerBillede from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      
      <p>© 2025 Gyldendal Læringsunivers</p>
      <div className="footerlogo">
              <img src={footerBillede} alt="Mit billede" />
            </div>
    </footer>
  );
};

export default Footer;
