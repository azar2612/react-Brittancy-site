import React from "react";
import "./App.css";
import Header from "./header/Header";
import Menu from "./menu/Menu";
import Slider from "./slider/Slider";
import Price from "./prices/Price";
import About from "./about/About";

const App = () => (
  <div className="brittancy">
    <Header h="110px" />
    <Menu list={["about me", "services", "gallery", "contacts", "pages"]} />
    <Slider />
    <Price />
    <About />
  </div>
);
export default App;
