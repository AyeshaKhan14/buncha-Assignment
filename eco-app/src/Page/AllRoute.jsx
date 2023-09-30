import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Cart } from "./Cart";

export const AllRoute = () => {
  return (
    <div style={{ marginTop: "4.5%" }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
};
