import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../Views/Home";
import { FourOFour } from "../Views/404";
import PokeDetail from "../Views/PokeDetail";

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/pokemon/:id" element={<PokeDetail />} />
        <Route element={<FourOFour />} />
      </Routes>
    </Router>
  );
}
