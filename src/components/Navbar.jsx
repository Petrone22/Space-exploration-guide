import React from "react";
import navImg from "../assets/icon.svg";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-img">
        <img src={navImg} alt="Logo" />
      </div>
      <tr></tr>
      <div className="nav-menu">
        <ul className="nav-list">
          <li>
            <div className="li-num">00</div> HOME
          </li>
          <li>
            <div className="li-num">01</div> DESTINATION
          </li>
          <li>
            <div className="li-num">02</div> CREW
          </li>
          <li>
            <div className="li-num">03</div> TECHNOLOGY
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
