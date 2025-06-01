import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

// ← Importér dit eget billede fra assets-mappen
import mitBillede from "../assets/logo.png"; // sørg for at filen findes

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      

      {/* Nyt billede fra assets */}
      <div className="logo">
  <Link to="/menu" onClick={() => setMenuOpen(false)}>
    <img src={mitBillede} alt="Mit billede" />
  </Link>
</div>

      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "×" : "☰"}
      </div>

      {menuOpen && (
        <nav className="menu">
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>Forside</Link>
            </li>
            <li>
              <Link to="/quiz" onClick={() => setMenuOpen(false)}>Quiz</Link>
            </li>
            <li>
              <Link to="/udsagn" onClick={() => setMenuOpen(false)}>Udsagn</Link>
            </li>
            <li>
              <Link to="/profile" onClick={() => setMenuOpen(false)}>Profil</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
