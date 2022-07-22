import React from "react";
import "./Shoe.css";
import shoe from "../../assets/shoe.jpg";
// import shoe2 from "../../assets/shoe2.png";

const Shoe = () => {
  return (
    <div className="shoe">
      <div className="img-container">
        <img src={shoe} alt="Shoe" className="shoe-img" />
      </div>
      <div className="heading-box">
        <h1 className="heading">Shoe 1</h1>
      </div>
      <div className="desc-box">
        <p className="description">Rs. 2000/-</p>
      </div>
    </div>
  );
};

export default Shoe;
