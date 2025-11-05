// Importation de React et des hooks useState
import React, { useState } from "react";
// Importation des questions depuis le fichier data
import { QUESTIONS } from "../data/questions";
// Importation d’icônes depuis lucide-react
import { Trophy, Home, ArrowRight, XCircle, CheckCircle } from "lucide-react";

export default function Quiz({ name, type, onExit }) {
  // On récupère la liste de questions selon le type choisi (frontend ou backend)
  const list = QUESTIONS[type];

  // useState pour gérer l’état du quiz
  const [index, setIndex] = useState(0); // Numéro de la question actuelle
  const [score, setScore] = useState(0); // Score du joueur
  const [selected, setSelected] = useState(null); // Réponse sélectionnée
  const [feedback, setFeedback] = useState(null); // Affiche si vrai/faux
  const [finished, setFinished] = useState(false); // Quiz terminé ?

  const question = list[index]; // Question actuelle

  // Fonction appelée quand l’utilisateur clique sur un choix
  const selectAnswer = (choice) => {
    setSelected(choice);
    // Vérifie si la réponse est correcte
    if (choice === question.answer) {
      setScore((s) => s + 1);
      setFeedback("correct");
    } else {
      setFeedback("incorrect");
    }

    // Passe à la question suivante après un court délai (pour afficher la couleur)
    setTimeout(() => {
      setSelected(null);
      setFeedback(null);
      if (index + 1 < list.length) setIndex(index + 1);
      else setFinished(true);
    }, 1200); // 1.2s pour montrer le vert/rouge avant de changer
  };

  // === ÉCRAN FINAL ===
  if (finished) {
    let message, icon, color;

    // Messages selon le score obtenu
    if (score < 10) {
      message = "😢 Vous avez perdu !";
      icon = <XCircle size={50} color="#ef4444" />;
      color = "#ef4444";
    } else if (score < 15) {
      message = `🧑‍💻 Bon niveau de ${type === "frontend" ? "développeur frontend" : "développeur backend"} !`;
      icon = <CheckCircle size={50} color="#facc15" />;
      color = "#facc15";
    } else {
      message = `🚀 Vous êtes un expert ${type === "frontend" ? "frontend" : "backend"} !`;
      icon = <Trophy size={50} color="#22d3ee" />;
      color = "#22d3ee";
    }

    return (
      <div className="card fade-in">
        {icon}
        <h2 style={{ color }}>{message}</h2>
        <p>Score : <b>{score}/{list.length}</b></p>

        <div className="choice">
          <button onClick={() => window.location.reload()}>🔁 Rejouer</button>
          <button onClick={onExit}><Home size={16}/> Retour</button>
        </div>
      </div>
    );
  }

  // === ÉCRAN DES QUESTIONS ===
  return (
    <div className="card fade-in">
      <div className="quiz-header">
        <span>Question {index + 1}/{list.length}</span><br /><br />
        <p className="difficulty">
          Niveau : {question.level === "easy" ? "Facile 🟢" :
                     question.level === "medium" ? "Moyen 🟡" :
                     question.level === "hard" ? "Difficile 🔴" : "Expert ⚫"}
        </p>
      </div>

      <h3 className="question">{question.q}</h3>

      <div className="answers">
        {question.choices.map((c) => (
          <button
            key={c}
            onClick={() => selectAnswer(c)}
            disabled={selected !== null} // Empêche de recliquer après sélection
            className={
              selected === c
                ? feedback === "correct" && c === question.answer
                  ? "correct"
                  : feedback === "incorrect" && c === selected
                  ? "incorrect"
                  : ""
                : ""
            }
          >
            {c}
          </button>
        ))}
      </div>

      <div className="score-display">
        <p>Score : {score}</p>
      </div>

      <div className="choice">
        <button onClick={onExit}>Quitter</button>
        <button disabled><span>{index + 1}</span></button>
      </div>
    </div>
  );
}
