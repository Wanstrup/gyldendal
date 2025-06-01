import React from "react";
import { useNavigate } from "react-router-dom"; // ← Importér navigation
import "./Login.css";

const Login = () => {
  const navigate = useNavigate(); // ← Brug hook

  const handleLogin = () => {
    // Her kan du senere tilføje login-validering
    navigate("/Menu"); // ← Naviger til ønsket side
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Velkommen til Sofies verden</h2>
        <div className="user-icon" />
        <input type="text" placeholder="Brugernavn" />
        <input type="password" placeholder="Kode" />
        <button onClick={handleLogin}>Login</button> {/* ← Brug onClick */}
      </div>
    </div>
  );
};

export default Login;
