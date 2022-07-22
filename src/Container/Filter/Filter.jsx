import React from "react";
import CheckBox from "../../Components/CheckBox/CheckBox";
import ColorBox from "../../Components/ColorBox/ColorBox";
import "./Filter.css";

const Filter = () => {
  return (
    <div className="filter__container">
      <div className="heading__container">
        <h1 className="filter-heading">Filters</h1>
      </div>
      <CheckBox />
      <ColorBox />
      <CheckBox />
      <CheckBox />
    </div>
  );
};

export default Filter;
