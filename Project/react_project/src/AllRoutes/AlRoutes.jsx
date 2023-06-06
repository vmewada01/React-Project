import React from "react";
import { Route, Routes } from "react-router-dom";
import EntireHome from "../Components/EntireHome";
import Products from "../Components/Products";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Cart from "../Components/Cart";
import Checkout from "../Components/Checkout";
import PrivateRoute from "./PrivateRoute";
import About from "../Components/About";

const AlRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EntireHome />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route
        path="/checkout"
        element={
          <PrivateRoute>
            <Checkout />
            </PrivateRoute>
        }
      />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AlRoutes;
