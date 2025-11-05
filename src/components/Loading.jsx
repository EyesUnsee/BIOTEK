import React from "react";
import { Loader } from "lucide-react";

export default function Loading({ name }) {
  return (
    <div className="loading-screen fade-in">
      <Loader className="spin" size={50} />
      <h2>Prépare-toi, <span className="highlight">{name}</span> !</h2>
      <p>Chargement du quiz...</p>
    </div>
  );
}
