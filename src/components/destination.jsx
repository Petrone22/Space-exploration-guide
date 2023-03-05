import React, { useState } from "react";
import data from "../data.json";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import mars from "../assets/destination/image-mars.png";
import moon from "../assets/destination/image-moon.png";

const Destination = ({ page, nav }) => {
  const [planetPage, setPlanetPage] = useState(0);
  function getPlanetData() {
    return {
      name: data.destinations[planetPage].name,
      description: data.destinations[planetPage].description,
      distance: data.destinations[planetPage].distance,
      travel: data.destinations[planetPage].travel,
      image: data.destinations[planetPage].images.png,
    };
  }
  function handleBackground() {
    if (planetPage === 0) return { backgroundImage: `url(${moon})` };
    if (planetPage === 1) return { backgroundImage: `url(${mars})` };
    if (planetPage === 2) return { backgroundImage: `url(${titan})` };
    if (planetPage === 3) return { backgroundImage: `url(${europa})` };
  }

  let name = getPlanetData().name;
  let uppercaseName = name.toUpperCase();
  console.log(getPlanetData().image);
  return (
    <div className="destination-page">
      <div className="pick-destination-div">
        <span className="destination-number">01</span> PICK YOUR DESTINATION
      </div>
      <div className="planet-capsule">
        <div
          className="planet-img-div"
          style={{
            backgroundImage: handleBackground().backgroundImage,
          }}
        ></div>
        <div
          className="planet-selection-div"
          style={{ zIndex: page === 1 ? "100" : "0" }}
        >
          <div className="planet-buttons">
            <button
              className="planet-button"
              style={{
                borderBottom: planetPage === 0 ? "2px solid white" : "none",
                color: planetPage === 0 ? "white" : "#d0d6f9",
              }}
              onClick={() => {
                setPlanetPage((prevPlanet) => 0);
              }}
            >
              MOON
            </button>
            <button
              className="planet-button"
              style={{
                borderBottom: planetPage === 1 ? "2px solid white" : "none",
                color: planetPage === 1 ? "white" : "#d0d6f9",
                zIndex: nav ? "-10" : "10",
              }}
              onClick={() => {
                setPlanetPage((prevPlanet) => 1);
              }}
            >
              MARS
            </button>
            <button
              className="planet-button"
              style={{
                borderBottom: planetPage === 2 ? "2px solid white" : "none",
                color: planetPage === 2 ? "white" : "#d0d6f9",
                zIndex: nav ? "-10" : "10",
              }}
              onClick={() => {
                setPlanetPage((prevPlanet) => 2);
              }}
            >
              EUROPA
            </button>
            <button
              className="planet-button"
              style={{
                borderBottom: planetPage === 3 ? "2px solid white" : "none",
                color: planetPage === 3 ? "white" : "#d0d6f9",
                zIndex: nav ? "-10" : "10",
              }}
              onClick={() => {
                setPlanetPage((prevPlanet) => 3);
              }}
            >
              TITAN
            </button>
          </div>
          <h1 className="planet-name">{uppercaseName}</h1>
          <p className="planet-paragraph">{getPlanetData().description}</p>
          <hr className="planet-hr"></hr>
          <div className="planet-information">
            <div className="planet-distance">
              <span className="distance-span">AVG. DISTANCE</span>
              <span className="distance-data-span">
                {getPlanetData().distance}
              </span>
            </div>
            <div className="planet-arrival-time">
              <span className="arrival-span">EST. ARRIVAL TIME</span>
              <span className="arrival-data-span">
                {getPlanetData().travel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
