import React from "react";

const Profile1 = ({ txt, image, h3, h6, span }) => (
  <div className="author">
    <div className="head">
      <div className="left">
        <div className="pic" style={{ backgroundImage: `url(${image})` }} />
      </div>
      <div className="right">
        <h3>{h3}</h3>
      </div>
    </div>

    <p>{txt}</p>
    <h6>
      <div></div>
      {h6}
      <span>{span}</span>
    </h6>
  </div>
);
export default Profile1;
