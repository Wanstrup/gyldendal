import React, { useState } from "react";
import booky from "../assets/bookys.png"; // husk din sti
import "./quiz.css";

const questions = [
  {
    question: "Hvem var Platon elev af?",
    options: ["Aristoteles", "Demokrit", "Sokrates", "Akademos"],
    answer: 2,
  },
  {
    question: "Hvad var det vigtigste på Platons Akademi?",
    options: [
      "At få gode karakterer",
      "At have stilletid",
      "At lære udenad",
      "At tale sammen og diskutere",
    ],
    answer: 3,
  },
  {
    question: "Hvad mente Platon, at vi kunne finde frem til med vores fornuft?",
    options: [
      "Sjove historier",
      "Evige regler for rigtigt og forkert",
      "Nye opfindelser",
      "Hvordan man bliver rig",
    ],
    answer: 1,
  },
  {
    question: "Hvad troede sofisterne om rigtigt og forkert?",
    options: [
      "Det er det samme for alle",
      "Det er noget, man skal føle",
      "Det ændrer sig fra sted til sted og fra tid til tid",
      "Det bestemmes af guderne",
    ],
    answer: 2,
  },
  {
    question: "Hvad var navnet på Platons skole?",
    options: [
      "Skolen for filosofi",
      "Det Græske Tempel",
      "Akademiet",
      "Lykion",
    ],
    answer: 2,
  },
];

const bookyHints = [
  "Tænk på den berømte lærer, som også var kendt for sine dialoger.",
  "Det handlede om at samtale og diskutere, ikke kun at lære udenad.",
  "Platon søgte efter evige, uforanderlige sandheder med sin fornuft.",
  "Sofisterne mente, at moral kan variere fra sted til sted og tid til tid.",
  "Navnet stammer fra en lund opkaldt efter en græsk sagnhelt.",
];

function Quiz1() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleOptionClick = (optionIndex) => {
    if (showResult) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce(
      (score, answer, i) => (answer === questions[i].answer ? score + 1 : score),
      0
    );
  };

  const goNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowHint(false); // skjul hint ved næste spørgsmål
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowResult(true);
      }, 1500);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowHint(false);
    }
  };

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  const score = calculateScore();
  const percent = Math.round((score / questions.length) * 100);

  return (
    <div className="quiz-container">
      <h2>Platons Akademi og Jagten på Sandheden</h2>

      {loading ? (
        <div style={{ marginTop: "3rem", fontSize: "1.25rem" }}>
          <div className="loading-spinner"></div>
          <p>Beregner resultat...</p>
        </div>
      ) : showResult ? (
        <>
          <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            🎉🎊 Tillykke! 🎊🎉
          </div>
          <div
            className="result-circle"
            style={{ "--percent": percent }}
            aria-label={`Du fik ${percent} procent rigtige`}
          >
            {percent}%
          </div>
          <div
            style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "1rem" }}
          >
            Du fik {score} ud af {questions.length} rigtige!
          </div>
          <button
            className="nav-btn"
            style={{ marginTop: "2rem" }}
            onClick={() => (window.location.href = "/Menu")}
          >
            Tilbage til forsiden
          </button>
        </>
      ) : (
        <>
          <div className="question">
            <p>
              <strong>
                {currentQuestion + 1}. {questions[currentQuestion].question}
              </strong>
            </p>
            <div className="options-grid">
              {questions[currentQuestion].options.map((opt, idx) => {
                const isSelected = selectedAnswers[currentQuestion] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(idx)}
                    className={`option-btn ${isSelected ? "selected" : ""}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {/* Booky og Hint */}
            <div className="booky-hint-wrapper">
              <img
                src={booky}
                alt="Booky hjælper"
                className="booky-img"
                onClick={toggleHint}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggleHint();
                }}
              />
              {showHint && (
                <div className="hint-bubble" role="region" aria-live="polite">
                  <button
                    className="close-hint-btn"
                    aria-label="Luk hjælpetekst"
                    onClick={toggleHint}
                  >
                    ×
                  </button>
                  <p>{bookyHints[currentQuestion]}</p>
                </div>
              )}
            </div>
          </div>

          <div>
            <button
              onClick={goBack}
              disabled={currentQuestion === 0}
              className="nav-btn"
              style={{ marginRight: "1rem" }}
            >
              Forrige
            </button>

            <button
              onClick={goNext}
              disabled={selectedAnswers[currentQuestion] === null}
              className="nav-btn"
            >
              {currentQuestion === questions.length - 1 ? "Se resultat" : "Næste"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz1;

