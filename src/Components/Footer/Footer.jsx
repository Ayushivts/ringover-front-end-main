import React from "react";
import "./Footer.css";
import fb from "../../assets/facebook.svg";
import insta from "../../assets/insta.svg";
import twitter from "../../assets/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__heading-box">
        <p className="footer-heading">Stay In touch</p>
      </div>
      <div className="footer-social-links">
        <a href="#Facebook">
          <img src={fb} className="social-link" alt="Facebook" />
        </a>
        <a href="#Instagram">
          <img src={insta} className="social-link" alt="Instagram" />
        </a>
        <a href="#Twitter">
          <img src={twitter} className="social-link" alt="Twitter" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
