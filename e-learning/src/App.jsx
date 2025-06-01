import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./komponenter/Header";
import Footer from "./komponenter/Footer";
import Login from "./komponenter/Login";

// Dine sider (du skal oprette disse filer)
import Forside from "./sider/Forside";
import Quiz from "./sider/QuizForside";
import Udsagn from "./sider/Udsagn";
import Udsagn1 from "./sider/Udsagn1"; 
import Quiz1 from "./sider/Quiz";
import Profile from "./sider/Profil";
import Menu from "./sider/Menu"; 

function App() {
  return (
    <div className="layout">
      <Header />

      <main className="main">
<Routes>
<Route path="/" element={<Login />} />
<Route path="/menu" element={<Menu />} />
<Route path="/quiz" element={<Quiz />} />
<Route path="/udsagn" element={<Udsagn />} />
<Route path="/udsagn1" element={<Udsagn1 />} />
<Route path="/profile" element={<Profile />} />
<Route path="/login" element={<Login />} />
<Route path="/quiz/1" element={<Quiz1 />} />

</Routes>
      </main>

      <Footer />
    </div>
  );
}



export default App;
