import React from "react";
import Navbar from "./Navbar";
import Home from "./home";
import Crew from "./crew";
import Destination from "./destination";
import Technology from "./technology";
import { useState } from "react";
// import data from "./data.json";
const Space = () => {
  const [page, setPage] = useState(0);

  function navDisplay() {
    return <Navbar setPage={setPage} page={page} />;
  }

  function pageDisplay() {
    if (page === 0) {
      return <Home />;
    } else if (page === 1) {
      return <Destination page={page} />;
    } else if (page === 2) {
      return <Crew />;
    } else {
      return <Technology />;
    }
  }
  return (
    <div className="space">
      <div className="nav-capsule">{navDisplay()}</div>
      <div className="main-content">{pageDisplay()}</div>
    </div>
  );
};

export default Space;
