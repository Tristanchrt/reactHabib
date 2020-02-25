import React, { useState } from "react";
import logoSablier from "../image/s.png";

const Accueil = () => {

  return (
    <div className="bodyBlock">
      <h1>Accueil</h1>
      <img src={logoSablier} alt="logo-img"></img>
    </div>
  );
};

export default Accueil;