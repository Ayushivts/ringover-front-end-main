import React from "react";
import "./ColorBox.css";

const ColorBox = () => {
  return (
    <div className="color__container">
      <div className="heading__container">
        <h1 className="color-heading">Color</h1>
      </div>
      <div className="box__container">
        <div className="color-box" id="red"></div>
        <div className="color-box" id="blue"></div>
        <div className="color-box" id="yellow"></div>
        <div className="color-box" id="green"></div>
        <div className="color-box" id="yellowgreen"></div>
      </div>
    </div>
  );
};

export default ColorBox;
