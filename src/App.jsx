import React from "react";
import "./App.css";
import Header from "./header/Header";
import Menu from "./menu/Menu";

const App = () => (
  <div className="brittancy">
    <Header h="110px" />
    <Menu list={["about me", "services", "gallery", "contacts", "pages"]} />
  </div>
);
export default App;
