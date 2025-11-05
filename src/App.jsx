import React, { useState } from "react";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Quiz from "./components/Quiz";

export default function App() {
  const [view, setView] = useState("home"); // home | loading | quiz
  const [player, setPlayer] = useState("");
  const [type, setType] = useState("frontend");

  const startQuiz = (name, quizType) => {
    setPlayer(name);
    setType(quizType);
    setView("loading");

    // petit délai de chargement
    setTimeout(() => setView("quiz"), 1200);
  };

  return (
    <div className="app">
      {view === "home" && <Home onStart={startQuiz} />}
      {view === "loading" && <Loading name={player} />}
      {view === "quiz" && (
        <Quiz name={player} type={type} onExit={() => setView("home")} />
      )}
    </div>
  );
}
