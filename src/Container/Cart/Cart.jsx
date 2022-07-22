import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart__container">
      <div className="cart__heading">
        <h1 className="heading">Cart</h1>
      </div>
      <div className="cart__body"></div>
      <div className="cart__footer">
        <div className="cart__footer-link-box">
          <a href="#location" className="cart__footer-link">
            Home
          </a>
          <input type="date" name="Select Date" id="date" className="date" />
        </div>
        <button disabled="disabled" className="btn-d">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
