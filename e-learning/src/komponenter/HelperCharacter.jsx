import React from "react";
import booky from "../assets/bookys.png";
import "./HelperCharacter.css";

function HelperCharacter({ message }) {
  return (
    <div className="helper-character">
      <div className="speech-bubble">{message}</div>
      <img src={booky} alt="Booky hjælper" className="helper-avatar" />
    </div>
  );
}

export default HelperCharacter;
