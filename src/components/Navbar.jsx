import React, { useState } from "react";
import navImg from "../assets/icon.svg";
import hamburger from "../assets/hamburgerMenu.svg";
import xicon from "../assets/xicon.svg";

const Navbar = ({ page, setPage }) => {
  const [navOpened, setnavOpenend] = useState(false);

  return (
    <div className="nav-bar">
      <div className="nav-img">
        <img src={navImg} alt="Logo" />
      </div>
      <tr></tr>
      <div className="nav-menu">
        <ul className="nav-list">
          <li
            style={{
              borderBottom: page === 0 ? "3px solid white" : "none",
            }}
            onClick={() => {
              setPage((prevPage) => 0);
            }}
          >
            <div className="li-num">00</div> HOME
          </li>
          <li
            style={{
              borderBottom: page === 1 ? "3px solid white" : "none",
            }}
            onClick={() => {
              setPage((prevPage) => 1);
            }}
          >
            <div className="li-num">01</div> DESTINATION
          </li>
          <li
            style={{
              borderBottom: page === 2 ? "3px solid white" : "none",
            }}
            onClick={() => {
              setPage((prevPage) => 2);
            }}
          >
            <div className="li-num">02</div> CREW
          </li>
          <li
            style={{
              borderBottom: page === 3 ? "3px solid white" : "none",
            }}
            onClick={() => {
              setPage((prevPage) => 3);
            }}
          >
            <div className="li-num">03</div> TECHNOLOGY
          </li>
        </ul>
      </div>
      <div
        className="mobile-nav-menu"
        style={{
          opacity: navOpened ? "100%" : "0%",
        }}
      >
        <ul className="mobile-nav-list">
          <li
            onClick={() => {
              setPage((prevPage) => 0);
            }}
          >
            <div className="mb-li-num">00</div> HOME
          </li>
          <li
            onClick={() => {
              setPage((prevPage) => 1);
            }}
          >
            <div className="mb-li-num">01</div> DESTINATION
          </li>
          <li
            onClick={() => {
              setPage((prevPage) => 2);
            }}
          >
            <div className="mb-li-num">02</div> CREW
          </li>
          <li
            onClick={() => {
              setPage((prevPage) => 3);
            }}
          >
            <div className="mb-li-num">03</div> TECHNOLOGY
          </li>
        </ul>
      </div>
      <div
        className="hamburger"
        onClick={() => {
          setnavOpenend((prevNav) => !prevNav);
        }}
      >
        <img src={navOpened ? xicon : hamburger} alt="menu" />
      </div>
    </div>
  );
};

export default Navbar;
