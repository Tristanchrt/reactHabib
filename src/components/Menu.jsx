import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {

  return (
    <nav className="menu">
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Link to="/Concept">
        <h3>Concept</h3>
      </Link>
    </nav>
  );
};

export default Menu;
