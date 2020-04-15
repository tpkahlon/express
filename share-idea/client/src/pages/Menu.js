import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="container">
      <ul className="row">
        <li className="column column-25">
          <Link to="/">Home</Link>
        </li>
        <li className="column column-25">
          <Link to="/about">About</Link>
        </li>
        <li className="column column-25">
          <Link to="/ideas">Ideas</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
