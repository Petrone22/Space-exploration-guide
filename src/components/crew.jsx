import React, { useState } from "react";
import data from "../data.json";
import douglas from "../assets/crew/image-douglas-hurley.png";
import anousheh from "../assets/crew/image-anousheh-ansari.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
const Crew = () => {
  const [crewPage, setCrewPage] = useState(0);
  console.log(crewPage);
  function getCrewData() {
    return {
      name: data.crew[crewPage].name,
      bio: data.crew[crewPage].bio,
      images: data.crew[crewPage].images.png,
      title: data.crew[crewPage].role,
    };
  }
  function handleCrewBG() {
    if (crewPage === 0) return { backgroundImage: `url(${douglas})` };
    if (crewPage === 1) return { backgroundImage: `url(${mark})` };
    if (crewPage === 2) return { backgroundImage: `url(${victor})` };
    if (crewPage === 3) return { backgroundImage: `url(${anousheh})` };
  }
  return (
    <div className="crew-page">
      <div className="crew-information-panel">
        <div className="meet-your-crew">
          <span className="meet-crew">02</span>MEET YOUR CREW
        </div>
        <div className="crew-selection-panel">
          <div className="commander-info">
            <span className="crew-title">{getCrewData().title}</span>
            <h1 className="crew-name">{getCrewData().name}</h1>
            <p className="crew-paragraph">{getCrewData().bio}</p>
          </div>
          <div className="crew-selection-div">
            <div
              className="selectionPoint"
              style={{
                backgroundColor: crewPage === 0 ? "white" : "#979797",
              }}
              onClick={() => {
                setCrewPage((prevPage) => 0);
              }}
            ></div>
            <div
              className="selectionPoint"
              style={{
                backgroundColor: crewPage === 1 ? "white" : "#979797",
              }}
              onClick={() => {
                setCrewPage((prevPage) => 1);
              }}
            ></div>
            <div
              className="selectionPoint"
              style={{
                backgroundColor: crewPage === 2 ? "white" : "#979797",
              }}
              onClick={() => {
                setCrewPage((prevPage) => 2);
              }}
            ></div>
            <div
              className="selectionPoint"
              style={{
                backgroundColor: crewPage === 3 ? "white" : "#979797",
              }}
              onClick={() => {
                setCrewPage((prevPage) => 3);
              }}
            ></div>
          </div>
        </div>
      </div>
      <hr className="img-hr" />
      <div
        className="crew-image-div"
        style={{ backgroundImage: handleCrewBG().backgroundImage }}
      ></div>
    </div>
  );
};

export default Crew;
