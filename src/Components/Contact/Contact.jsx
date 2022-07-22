import React from "react";
import NavBar from "../../Container/NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="contact">
        <div className="contact-card">
          <div className="contact__heading-box">
            <h1 className="contact-heading">Reach Us At</h1>
          </div>
          <div className="mail__desc-box">
            <div className="mail__container">
              <h1 className="email">support@kicksup.com</h1>
              <p className="mail__desc">for any technical support</p>
            </div>
            <div className="mail__container">
              <h1 className="email">info@kicksup.com</h1>
              <p className="mail__desc">for more information</p>
            </div>
            <div className="mail__container">
              <h1 className="email">feedback@kicksup.com</h1>
              <p className="mail__desc">to send your feedback</p>
            </div>
            <div className="mail__container">
              <h1 className="email">jobs@kicksup.com</h1>
              <p className="mail__desc">to work with us</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
