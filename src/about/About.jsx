import React from "react";
import "./About.css";
import img1 from "./images/bg.png";
import img2 from "./images/01.jpg";

const About = () => (
  <div className="about-section">
    <AboutBlock />
  </div>
);
const AboutBlock = () => (
  <div className="about-block">
    <Left txt1="about me" />
    <Right image1={img1} image2={img2} />
  </div>
);
const Left = ({ txt1 }) => (
  <div className="left-block">
    <h1>{txt1}</h1>
    <h5>
      My name is Brittany Pierce and I’m a professional fine artist based in Los
      Angeles, CA.
    </h5>
    <p>
      I take inspiration from the innovative styles of contemporary and urban
      art, such as graphic and graffiti illustrations. I am always open to new
      artistic challenges and collaborations. Feel free to contact me if you
      need a unique, one-of-a-kind artwork.
    </p>
    <h6>
      weekdays:
      <span>8:00-20:00</span>
      Weekdays
      <span>9:00-18:00</span>
    </h6>
  </div>
);
const Right = ({ image1, image2 }) => (
  <div className="right-block" style={{ backgroundImage: `url(${image1})` }}>
    <img src={image2} alt="" />
  </div>
);
export default About;
