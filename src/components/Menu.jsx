import React from "react";
import { Link } from "react-router-dom";
import "../css/menu.css";

const Menu = () => {

  return (
    <nav className="menu">
      <div className="imgMenu"></div>

      <div className="menuLink">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/Concept">
          <h3>Concept</h3>
        </Link>
        <Link to="/Concept">
          <h3>Nos aventures</h3>
        </Link>
        <Link to="/Concept">
          <h3>Tarif/Reseau</h3>
        </Link>
        <Link to="/Concept">
          <h3>Contact</h3>
        </Link>
        <Link to="/Panier">
          <h3>Contact</h3>
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
