import React, { useState } from "react";
import rocketPortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import rocketLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import capsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";
import capsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg";
import spaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg";
import data from "../data.json";
const Technology = () => {
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
  const [techPage, setTechPage] = useState(0);
  function getTechData() {
    return {
      name: data.technology[techPage].name,
      description: data.technology[techPage].description,
      image: data.technology[techPage].images.png,
    };
  }
  function handleTechBG() {
    if (techPage === 0) {
      if (dimensions.width > 1100) {
        return { backgroundImage: `url(${rocketPortrait})` };
      }
      if (dimensions.width < 1100) {
        return { backgroundImage: `url(${rocketLandscape})` };
      }
    }
    if (techPage === 1) {
      if (dimensions.width > 1100) {
        return { backgroundImage: `url(${spaceportPortrait})` };
      }
      if (dimensions.width < 1100) {
        return { backgroundImage: `url(${spaceportLandscape})` };
      }
    }
    if (techPage === 2) {
      if (dimensions.width > 1100) {
        return { backgroundImage: `url(${capsulePortrait})` };
      }
      if (dimensions.width < 1100) {
        return { backgroundImage: `url(${capsuleLandscape})` };
      }
    }
  }
  return (
    <div className="technology-page">
      <div className="tech-info-panel">
        <div className="tech-nu mber-div">
          <span className="info-number">03</span> SPACE LAUNCH 101
        </div>
        <div className="tech-desc-panel">
          <div className="tech-info-selection">
            <div
              className="tech-info-button"
              style={{
                backgroundColor: techPage === 0 ? "white" : "",
                color: techPage === 0 ? "black" : "white",
              }}
              onClick={() => {
                setTechPage((prevPage) => 0);
              }}
            >
              1
            </div>
            <div
              className="tech-info-button"
              style={{
                backgroundColor: techPage === 1 ? "white" : "",
                color: techPage === 1 ? "black" : "white",
              }}
              onClick={() => {
                setTechPage((prevPage) => 1);
              }}
            >
              2
            </div>
            <div
              className="tech-info-button"
              style={{
                backgroundColor: techPage === 2 ? "white" : "",
                color: techPage === 2 ? "black" : "white",
              }}
              onClick={() => {
                setTechPage((prevPage) => 2);
              }}
            >
              3
            </div>
          </div>
          <div className="tech-description-panel">
            <h6>THE TERMINOLOGY...</h6>
            <h1 className="tech-name">{getTechData().name}</h1>
            <p className="tech-description">{getTechData().description}</p>
          </div>
        </div>
      </div>
      <div
        className="tech-image-div"
        style={{ backgroundImage: handleTechBG().backgroundImage }}
      ></div>
    </div>
  );
};

export default Technology;
