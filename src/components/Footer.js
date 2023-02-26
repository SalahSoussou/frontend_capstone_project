import React from "react";
import logo from "../assets/Logo.svg";
import Nav from "./Nav";
function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo" />
      <Nav navStyle={"mainFooter"} />
      <ul>
        contact
        <li>Address</li>
        <li>Phone number</li>
        <li>email</li>
      </ul>
      <ul>
        Social Media Links
        <li>Address</li>
        <li>Phone number</li>
        <li>email</li>
      </ul>
    </footer>
  );
}

export default Footer;
