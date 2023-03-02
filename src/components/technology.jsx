import React, { useState } from "react";
import data from "../data.json";
import rocketPortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import rocketLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import capsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";
import capsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg";
import spaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg";
const Technology = () => {
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
      return { backgroundImage: `url(${rocketPortrait})` };
    }
    if (techPage === 1) {
      return { backgroundImage: `url(${spaceportPortrait})` };
    }
    if (techPage === 2) {
      return { backgroundImage: `url(${capsulePortrait})` };
    }
  }
  return (
    <div className="technology-page">
      <div className="tech-info-panel">
        <div className="tech-number-div">
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
      <div className="tech-image-panel">
        <div
          className="tech-image-div"
          style={{ backgroundImage: handleTechBG().backgroundImage }}
        ></div>
      </div>
    </div>
  );
};

export default Technology;
