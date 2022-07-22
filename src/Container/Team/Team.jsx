import React from "react";
import Card from "../../Components/Card/Card";
import NavBar from "../NavBar/NavBar";
import "./Team.css";

const Team = () => {
  return (
    <>
      <NavBar />
      <div className="team">
        <div className="team-card">
          <div className="team__heading-box">
            <h1 className="team-heading">
              Without bonding and coordination, every project is a failure. Look
              at who makes KICKS-UP great :)
            </h1>
          </div>
          <div className="team__cards-box">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="team__heading-box">
            <h1 className="team-heading">And You! :)</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
