import React from "react";
import "./Card.css";
import person from "../../assets/christiano.jpg";
import fb from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
// import fb from "../../assets/facebook.svg";

const Card = () => {
  return (
    <div className="card">
      <img src={person} className="card-img" alt="Ronaldo" />
      <div className="card__name-box">
        <h1 className="card-name">Christiano Ronaldo</h1>
      </div>
      <div className="card__desc-box">
        <p className="card-desc">Financial Operations</p>
      </div>
      <div className="card__social-box">
        <img src={fb} alt="Facebook" className="card-social" />
        <img src={twitter} alt="Facebook" className="card-social" />
      </div>
    </div>
  );
};

export default Card;
