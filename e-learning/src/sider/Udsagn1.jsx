import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Udsagn1.css";
import booky from "../assets/bookys.webp";

function Udsagn1() {
  const navigate = useNavigate();
  const [showBubble, setShowBubble] = useState(true);

  return (
    <div className="udsagn1-container">
      <h1>Platons Akademi</h1>

      <section aria-label="Introduktion til Platon og Sokrates">
        <p>
          Tak for sidst, Sofie. Jeg mener selvfølgelig i Athen. Så har jeg da fået præsenteret mig. Eftersom jeg også har præsenteret Platon, kan vi jo lige så godt starte med det samme. Platon (427-347 f.Kr.) var 29 år gammel, da Sokrates tømte giftbægeret. Han havde længe været Sokrates' elev og fulgte nøje retssagen mod ham. At Athen kunne dømme byens ædleste menneske til døden, gjorde ikke alene et uudsletteligt indtryk på ham. Det skulle komme til at afstikke retningen for hele hans filosofiske virksomhed.
        </p>
        <blockquote className="quote-box">
          Platons første gerning som filosof var da også at udgive Sokrates' forsvarstale.
        </blockquote>
        <p>
          Her refererer han hvad Sokrates sagde, henvendt til den store jury. Du husker sikkert at Sokrates ikke nedskrev noget selv. Det havde mange af førsokratikerne gjort, men problemet er at det meste af dette skriftlige materiale er gået tabt for eftertiden. Når det gælder Platon, mener man at alle hans hovedværker er bevaret.
        </p>
      </section>

      <section aria-label="Platons Akademi og dets betydning">
        <p>
          (Ud over Sokrates' forsvarstale skrev han en samling breve og hele 35 filosofiske dialoger.) Når disse skrifter er bevaret, hænger det ikke mindst sammen med, at Platon oprettede sin egen filosofiskole uden for Athen. Det var i en lund, der var opkaldt efter den græske sagnhelt Akademos. Platons filosofiskole fik derfor navnet Akademiet.
        </p>
        <p className="highlight-text">
          (Sidenhen er der oprettet mange tusinder »akademier« verden over. Vi taler stadig om »akademikere« og »akademiske fag«!)
        </p>
        <p>
          På Platons Akademi blev der undervist i filosofi, matematik og gymnastik. Skønt »undervisning« er måske ikke det rette ord. Også på Platons Akademi var den levende samtale det vigtigste. Det er altså ikke så tilfældigt, at det var dialogen, der blev Platons foretrukne fremstillingsform.
        </p>
      </section>

      <section aria-label="Platons fokus på det evige og uforanderlige">
        <h2>Det evigt sande, evigt smukke og evigt gode</h2>
        <p>
          Ved indledningen til dette filosofikursus sagde jeg, at det ofte er klogt at spørge hvad der er en bestemt filosofs projekt. Så nu spørger jeg: Hvad var det Platon var optaget af at undersøge? Helt kort kan vi fastslå at Platon var optaget af forholdet mellem det der på den ene side er evigt og uforanderligt - og på den anden side det der »flyder«.
        </p>
        <p>
          (Præcis som førsokratikerne med andre ord!) Dernæst sagde vi at sofisterne og Sokrates vendte sig bort fra naturfilosofiens spørgsmål og var mere optaget af mennesket og samfundet. Det var de ganske vist, men også sofisterne og Sokrates var på en måde optaget af forholdet mellem det der på den ene side er evigt og uforanderligt - og det der på den anden side »flyder«.
        </p>
        <p>
          De var især optaget af dette spørgsmål i forbindelse med menneskets moral og samfundets idealer eller dyder.
        </p>
        <p>
          Groft sagt mente sofisterne at spørgsmålet om hvad der er ret og galt er noget der ændrer sig fra bystat til bystat og fra generation til generation. Spørgsmålet om ret og galt er altså noget »flydende«. Dette kunne Sokrates ikke acceptere.
        </p>
        <blockquote className="quote-box">
          Han mente at der fandtes nogle helt evige og tidløse regler for det.
        </blockquote>
        <p>
          Ved at bruge vor fornuft kan alle mennesker nå frem til den slags uforanderlige normer, for menneskets fornuft er netop evig og uforanderlig.
        </p>
      </section>

      <div className="button-wrapper">
        <button onClick={() => navigate("/udsagn")} className="nav-button">
          Tilbage til Udsagn
        </button>
        <button onClick={() => navigate("/quiz")} className="nav-button">
          Gå til Quiz
        </button>
      </div>

      <div className="booky-helper">
        {showBubble && (
          <div className="booky-bubble" role="dialog" aria-live="polite" aria-label="Bookys hjælpetip">
            <button
              className="close-bubble"
              onClick={() => setShowBubble(false)}
              aria-label="Luk Bookys besked"
            >
              ✖
            </button>
            📘 Hej! Platon mente, at vi kunne finde evige sandheder med fornuften. Det kan være vigtigt i quizzen!
          </div>
        )}
        <img
          src={booky}
          alt="Booky hjælper"
          className="booky-img"
          onClick={() => setShowBubble(!showBubble)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setShowBubble(!showBubble);
            }
          }}
        />
      </div>
    </div>
  );
}

export default Udsagn1;
