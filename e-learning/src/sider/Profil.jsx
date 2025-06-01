import React from "react";
import { useNavigate } from "react-router-dom";
import "./profil.css";
import avatarImage from "../assets/bookys.webp"; // Husk korrekt sti til din avatar

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={avatarImage} alt="Avatar" className="avatar" />
        <div>
          <h2>Hej, Bertram 👋</h2>
          <p>Klasse: 6.B</p>
        </div>
      </div>

      <div className="stats">
        <div className="stat-box">
          <p>Quizzer taget</p>
          <h3>12</h3>
        </div>
        <div className="stat-box">
          <p>Gennemsnitlig score</p>
          <h3>83%</h3>
        </div>
        <div className="stat-box">
          <p>Bedste score</p>
          <h3>100%</h3>
        </div>
      </div>

      <div className="badges">
        <h3>🎖️ Dine badges</h3>
        <div className="badge-list">
          <span className="badge">🎉 Første quiz</span>
          <span className="badge">🔥 5 quizzer i træk</span>
          <span className="badge">💯 Perfekt score</span>
        </div>
      </div>

      <div className="favorites">
        <h3>⭐ Gemte quizzer</h3>
        <ul>
          <li>🧠 Platons Akademi og Jagten på Sandheden</li>
          <li>🔍 Logik og argumentation</li>
        </ul>
      </div>

      <div className="profile-actions">
        <button>Skift avatar</button>
        <button onClick={() => navigate("/menu")}>Tilbage til menu</button>
      </div>
    </div>
  );
};

export default Profile;
