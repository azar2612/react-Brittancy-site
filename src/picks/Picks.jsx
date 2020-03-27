import React from "react";
import "./Picks.css";
import img1 from "./images/01.jpg";
import img2 from "./images/02.jpg";
import img3 from "./images/03.jpg";
import img4 from "./images/04.jpg";

const Picks = () => (
  <div className="picks-section">
    <PicksBlock />

    <p>
      FOLLOW ME
      <span> @ INSTAGRAM</span>
    </p>
  </div>
);

const PicksBlock = () => (
  <div className="picks-block">
    <Img image={img1} />
    <Img image={img2} />
    <Img image={img3} />
    <Img image={img4} />
  </div>
);

const Img = ({ image }) => (
  <div className="img">
    <img src={image} alt="" />
  </div>
);
export default Picks;
