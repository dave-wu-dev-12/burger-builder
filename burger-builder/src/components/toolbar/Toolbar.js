import React from "react";
import "./Toolbar.css";
import burgerLogo from "../../assets/27.1 burger-logo.png";
import Navigation from "../navigation/Navigation";

function Toolbar() {
  return (
    <div className="toolbar">
      <div>MENU</div>
      <div
        style={{
          backgroundColor: "white",
          padding: "1em",
          borderRadius: "10px",
        }}
      >
        <img
          src={burgerLogo}
          alt=""
          style={{
            height: "30px",
          }}
        />
      </div>
      <Navigation />
    </div>
  );
}

export default Toolbar;
