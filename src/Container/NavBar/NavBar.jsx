import React from "react";
import logo from "../../logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo-box">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <div className="nav__link-box">
        <a href="home" className="nav__link">
          Home
        </a>
        <a href="journey" className="nav__link">
          The Journey
        </a>
        <a href="team" className="nav__link">
          Team
        </a>
        <a href="store" className="nav__link">
          Store
        </a>
        <a href="contact" className="nav__link">
          Contact
        </a>
      </div>
      <div className="user__details-box">
        <p className="user__details">User</p>
      </div>
    </nav>
  );
};

export default NavBar;
