import React from "react";
import "./Backdrop.css";
function Backdrop({ turnOff }) {
  return <div onClick={turnOff} className="backdrop"></div>;
}

export default Backdrop;
