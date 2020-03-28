import React from "react";
import "./Video.css";

const Video = ({ image }) => (
  <div className="video-section" style={{ backgroundImage: `url(${image})` }}>
    <VideoBlock ff="Poppins" tt="capitalize" />
  </div>
);

const VideoBlock = ({ ff, tt }) => (
  <div className="video-block" style={{ fontFamily: ff, textTransform: tt }}>
    <div className="play-button">
      <span>&#8227;</span>
    </div>
    <div className="circle">
      <i className="far fa-circle" />
    </div>
    <h2>how i create</h2>
    <h6>outstanding paintings</h6>
  </div>
);

export default Video;
