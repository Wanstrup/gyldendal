import React from "react";
import { useNavigate } from "react-router-dom";
import "./Quizforside.css"; // Husk korrekt sti

function QuizForside() {
  const navigate = useNavigate();

  return (
    <div className="quiz-container">
      <h2>Quiz-sektion</h2>
      <div className="quiz-grid">
  {[...Array(8)].map((_, index) => {
    const quizNumber = index + 1;
    const isClickable = quizNumber === 1;

    return (
      <button
        key={quizNumber}
        className={`quiz-box ${isClickable ? "clickable" : "disabled"}`}
        onClick={() =>
          isClickable ? navigate(`/quiz/${quizNumber}`) : null
        }
      >
        {quizNumber === 1 ? "Tænk som Platon" : `Quiz ${quizNumber}`}
      </button>
    );
  })}
</div>
    </div>
  );
}

export default QuizForside;
