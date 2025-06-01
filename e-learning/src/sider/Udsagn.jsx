import React from "react";
import { useNavigate } from "react-router-dom";
import "./Udsagn.css"; // Du kan også lægge det i app.css, hvis du foretrækker det

function Udsagn() {
  const navigate = useNavigate();

  const handleClick = (nummer) => {
    if (nummer === 1) {
      navigate("/udsagn1");
    }
  };

  return (
    <div className="udsagn-container">
      <div className="message">
        <h2>Vælg et udsagn ved at trykke på en af knapperne:</h2>
      </div>

      <div className="button-grid">
  {Array.from({ length: 8 }, (_, i) => (
    <button
      key={i}
      className="udsagn-button"
      onClick={() => handleClick(i + 1)}
    >
      {i === 0 ? "Platons akademi" : `Udsagn ${i + 1}`}
    </button>
  ))}
</div>
    </div>
  );
}

export default Udsagn;

