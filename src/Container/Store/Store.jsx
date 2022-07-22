import React from "react";
import Cart from "../Cart/Cart";
import Filter from "../Filter/Filter";
import NavBar from "../NavBar/NavBar";
import Shoes from "../Shoes/Shoes";
import "./Store.css";

const Store = () => {
  return (
    <>
      <NavBar />
      <main className="store__container">
        <Filter />
        <Shoes />
        <Cart />
      </main>
    </>
  );
};

export default Store;
