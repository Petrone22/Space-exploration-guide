import React from "react";
import Navbar from "./Navbar";
import Home from "./home";
import Crew from "./crew";
import Destination from "./destination";
import Technology from "./technology";
import { useState } from "react";
import homeBGdesktop from "../assets/home/background-home-desktop.jpg";
import destinationdesktop from "../assets/destination/background-destination-desktop.jpg";
import crewBGdesktop from "../assets/crew/background-crew-desktop.jpg";
import technologyBGdesktop from "../assets/technology/background-technology-desktop.jpg";
import homeBGtablet from "../assets/home/background-home-tablet.jpg";
import destinationtablet from "../assets/destination/background-destination-tablet.jpg";
import crewBGtablet from "../assets/crew/background-crew-tablet.jpg";
import technologyBGtablet from "../assets/technology/background-technology-tablet.jpg";
import homeBGmobile from "../assets/home/background-home-mobile.jpg";
import destinationmobile from "../assets/destination/background-destination-mobile.jpg";
import crewBGmobile from "../assets/crew/background-crew-mobile.jpg";
import technologyBGmobile from "../assets/technology/background-technology-mobile.jpg";

// import data from "./data.json";
const Space = () => {
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const [page, setPage] = useState(0);

  function navDisplay() {
    return <Navbar setPage={setPage} page={page} />;
  }
  // function getProperImage() {
  //   if (dimensions.width > 1100) {
  //     return {
  //       homeBGdesktop,
  //       crewBGdesktop,
  //       technologyBGdesktop,
  //       destinationdesktop,
  //     };
  //   }
  //   if (dimensions.width < 1100) {
  //     return {
  //       homeBGdesktablet,
  //       crewBGtablet,
  //       technologyBGtablet,
  //       destinationtablet,
  //     };
  //   }
  //   if (dimensions.width < 700) {
  //     return {
  //       homeBGmobile,
  //       crewBGmobile,
  //       technologyBGmobiel,
  //       destinationmobile,
  //     };
  //   }
  // }
  // const setSpaceBG = () => {
  //   if (page === 0) return { backgroundImage: `url(${homeBGdesktop})` };
  //   if (page === 1) return { backgroundImage: `url(${destinationdesktop})` };
  //   if (page === 2) return { backgroundImage: `url(${crewBGdesktop})` };
  //   if (page === 3) return { backgroundImage: `url(${technologyBGdesktop})` };
  // };

  const setSpaceBG = () => {
    if (page === 0) {
      if (dimensions.width > 1100) {
        return { backgroundImage: `url(${homeBGdesktop})` };
      } else if (dimensions.width < 1100 && dimensions.width > 700) {
        return { backgroundImage: `url(${homeBGtablet})` };
      } else {
        return { backgroundImage: `url(${homeBGmobile})` };
      }
    }
    if (page === 1) {
      if (dimensions.width > 1100) {
        return { backgroundImage: `url(${destinationdesktop})` };
      } else if (dimensions.width < 1100 && dimensions.width > 700) {
        return { backgroundImage: `url(${destinationtablet})` };
      } else {
        return { backgroundImage: `url(${destinationmobile})` };
      }
    }
    if (page === 2) {
      if (dimensions.width > 1100) {
        return { backgroundImage: `url(${crewBGdesktop})` };
      } else if (dimensions.width < 1100 && dimensions.width > 700) {
        return { backgroundImage: `url(${crewBGtablet})` };
      } else {
        return { backgroundImage: `url(${crewBGmobile})` };
      }
    }
    if (page === 3) {
      if (dimensions.width > 1100) {
        return { backgroundImage: `url(${technologyBGdesktop})` };
      } else if (dimensions.width < 1100 && dimensions.width > 700) {
        return { backgroundImage: `url(${technologyBGtablet})` };
      } else {
        return { backgroundImage: `url(${technologyBGmobile})` };
      }
    }
  };
  function pageDisplay() {
    if (page === 0) {
      return <Home setPage={setPage} />;
    } else if (page === 1) {
      return <Destination page={page} />;
    } else if (page === 2) {
      return <Crew />;
    } else {
      return <Technology />;
    }
  }
  return (
    <div
      className="space"
      style={{
        backgroundImage: setSpaceBG().backgroundImage,
        padding: page === 3 ? "0" : "",
      }}
    >
      <div className="nav-capsule">{navDisplay()}</div>
      <div className="main-content">{pageDisplay()}</div>
    </div>
  );
};

export default Space;
