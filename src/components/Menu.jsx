import React from "react";
import { Link } from "react-router-dom";
import "../css/menu.css";
import logoSablier from "../image/logo sablier.png";

const Menu = () => {

  return (
    <nav className="menu">
      <Link to="/">
        <img className="imgMenuSablier" src={logoSablier} alt="Logo-sablier" />
      </Link>

      <div className="menuLink">    
        <Link className="oneLink" to="/Concept">
          <h3>Concept</h3>
        </Link>
        <Link className="oneLink" to="/Concept">
          <h3>Nos aventures</h3>
        </Link>
        <Link className="oneLink" to="/Concept">
          <h3>Tarif/Reseau</h3>
        </Link>
        <Link className="oneLink" to="/Concept">
          <h3>Contact</h3>
        </Link>
        <Link className="oneLink" to="/Panier">
          <h3>Contact</h3>
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
