import React from "react";
import "./Slider.css";
import img1 from "./images/01.jpg";
import img2 from "./images/02.jpg";
import img3 from "./images/03.jpg";
import img4 from "./images/04.jpg";

const Slider = () => (
  <div className="slider-section">
    <Grid image={img1} txt1="dark romantic" txt2="from " txt3="$50" />
    <Grid image={img2} txt1="soul notes" txt2="from " txt3="$50" />
    <Grid image={img3} txt1="orange mood" txt2="from " txt3="$50" />
    <Grid image={img4} txt1="in the spotlight" txt2="from " txt3="$50" />
  </div>
);

const Grid = ({ image, txt1, txt2, txt3 }) => (
  <div className="grid" style={{ backgroundImage: `url(${image})` }}>
    <div className="text">
      <h3>{txt1}</h3>
      <p>
        {txt2}

        <span>{txt3}</span>
      </p>
    </div>
  </div>
);
export default Slider;
