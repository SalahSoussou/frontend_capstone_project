import React from "react";
import logo from "../assets/Logo.svg";
import Nav from "./Nav";
import "./Heder.sass";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <Nav navStyle={"mainHeder"} />
    </header>
  );
}

export default Header;
