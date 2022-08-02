import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddToken from "../pages/AddToken/index";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addToken" element={<AddToken />} />
    </Routes>
  );
}
