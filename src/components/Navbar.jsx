import React from "react";
import svg from "../assets/icon.svg";
import hamburger from "../assets/hamburgerMenu.svg";
import { useState } from "react";

const Navbar = () => {
  const [nav, openNav] = useState(true);
  console.log(nav);
  return (
    <div className="nav-bar">
      <div className="nav-icon">
        <img src={svg} alt="logo" />
      </div>
      <tr></tr>
      <div className="nav-menu">
        <ul>
          <li>00 HOME</li>
          <li>01 DESTINATION</li>
          <li>02 CREW</li>
          <li>03 TECHNOLOGY</li>
        </ul>
      </div>
      <div className="hamburger" onClick={() => openNav((prevNav) => !prevNav)}>
        <img src={hamburger} alt="Menu" />
      </div>
    </div>
  );
};

export default Navbar;
