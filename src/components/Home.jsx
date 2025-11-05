import React, { useState } from "react";
import { ArrowRight, Code2, Database, User } from "lucide-react";

export default function Home({ onStart }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("frontend");

  return (
    <div className="card fade-in">
      {/* Titre principal */}
      <h1 className="title">BIOTEK Quiz</h1>
      <p className="subtitle">Teste tes connaissances en développement web !</p>

      {/* Zone de saisie du nom */}
      <div className="form-group">
        <label><User size={16}/> Ton nom :</label>
        <input
          type="text"
          value={name}
          placeholder="Entrez votre nom..."
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Choix du type de quiz */}
      <div className="form-group">
        <label>Choisis ton type de quiz :</label>
        <div className="choice">
          <button
            className={type === "frontend" ? "active" : ""}
            onClick={() => setType("frontend")}
          >
            <Code2 size={18} /> Frontend
          </button>
          <button
            className={type === "backend" ? "active" : ""}
            onClick={() => setType("backend")}
          >
            <Database size={18} /> Backend
          </button>
        </div>
      </div>

      {/* Bouton de démarrage */}
      <button
        className="start-btn"
        onClick={() => onStart(name || "BioTek", type)}
      >
        Commencer <ArrowRight size={18} />
      </button>
    </div>
  );
}
