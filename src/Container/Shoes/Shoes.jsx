import React from "react";
import Shoe from "../../Components/Shoe/Shoe";
import "./Shoes.css";

const Shoes = () => {
  return (
    <div className="shoes__container">
      <div className="shoes-heading">
        <h1 className="heading">Shoes</h1>
        <button className="btn">sort by</button>
      </div>
      <Shoe />
      <Shoe />
      <Shoe />
      <Shoe />
      <Shoe />
      <Shoe />
      {/* <div className="shoe-box">
      </div> */}
    </div>
  );
};

export default Shoes;
