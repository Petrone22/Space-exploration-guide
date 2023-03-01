import React, { useState } from "react";
import navImg from "../assets/icon.svg";
import hamburger from "../assets/hamburgerMenu.svg";
import xicon from "../assets/xicon.svg";

const Navbar = ({ page, setPage }) => {
  const [navOpened, setnavOpenend] = useState(false);
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  console.log(dimensions.width);
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);
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
          right: navOpened ? "0px" : "-390px",
        }}
      >
        <ul className="mobile-nav-list">
          <li>
            <div className="mb-li-num">00</div> HOME
          </li>
          <li>
            <div className="mb-li-num">01</div> DESTINATION
          </li>
          <li>
            <div className="mb-li-num">02</div> CREW
          </li>
          <li>
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
