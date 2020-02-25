import React, { useState } from "react";
import logoSablier from "../image/Door.PNG";
import logoTemps from "../image/Temps.PNG";
import logoWin from "../image/win.PNG";

const Concept = () => {
  return (
    <div className="bodyBlock">
      
      <h1>Concept</h1>
      <p>Le principe de base est simple: vous êtes enfermés dans une salle (en groupe de 2 à 7 joueurs) et vous avez une heure pour vous échapper. Afin d'y parvenir, vous devrez résoudre des énigmes.  Quoiqu'il se passe, dans ce jeu, la force physique n'a aucune importance. Il s'agit d'une activité calme et réfléchie qui fait appel aux capacités d'observation et de déduction ainsi qu'au bon sens.

Que ce soit pour une soirée entre amis ou un événement d'entreprise, vous découvrirez une nouvelle façon de jouer et de vous évader, dans tous les sens du terme !</p>
  <div className="logoConcept">
    <img src={logoSablier} alt="Porte ouverte"></img>
    <img src={logoTemps} alt="Porte ouverte"></img>
    <img src={logoWin} alt="Porte ouverte"></img>
  </div>
    </div>
  );
};

export default Concept;
