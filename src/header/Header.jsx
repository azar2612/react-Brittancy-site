import React from "react";
import "./Header.css";
import Button from "../Button";

const Header = ({ h }) => (
  <div className="header" style={{ height: h }}>
    <Logo num=" 1-800-1234-567 " c="orange" />
    <Title text="brittancy pierce" />
    <Btn />
  </div>
);

const Logo = ({ num, c }) => (
  <div className="logo">
    <p>
      <i style={{ color: c }} className="fas fa-phone-volume" />
      {num}
    </p>
  </div>
);
const Title = ({ text }) => (
  <div className="title">
    <h1>{text}</h1>
  </div>
);
const Btn = () => (
  <div className="btn">
    <Button name="book now" fs="20px" w="180px" h="52px" ff="archivo black" />
  </div>
);
export default Header;
