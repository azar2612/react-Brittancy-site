import React from "react";
import "./Menu.css";

const Menu = ({ list }) => (
  <div className="menu">
    <ul>
      <li className="home">home</li>
      {list.map(d => (
        <li>{d}</li>
      ))}
    </ul>
  </div>
);

export default Menu;
