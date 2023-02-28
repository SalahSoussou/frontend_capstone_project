import React from "react";
import "./Nav.sass";

function Nav(props) {
  return (
    <nav className={props.navStyle}>
      <ul>
        <li>
          <a href="#menu">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#menu">Reservation</a>
        </li>
        <li>
          <a href="#menu">Order online</a>
        </li>
        <li>
          <a href="#menu">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
