import React from "react";
import { Link } from "react-router-dom";
import booky from "../assets/booky.webp"; // ← Importér billedet
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menus">
      <div className="booky-container">
        <img src={booky} alt="Booky karakter" className="booky" />
      </div>
      <div className="button-grid">
        <Link to="/quiz" className="forside-button">Quiz</Link>
        <Link to="/profile" className="forside-button">Profil</Link>
        <Link to="/udsagn" className="forside-button">Udsagn</Link>
        <Link to="/menu" className="forside-button">Forside</Link>
      </div>
    </div>
  );
};

export default Menu;

