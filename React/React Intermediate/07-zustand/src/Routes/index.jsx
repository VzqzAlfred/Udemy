import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../Views/Home";
import { FourOFour } from "../Views/404";
import PokeDetail from "../Views/PokeDetail";
import ScrollToTop from "../Components/Hooks/ScrollToTop";

export default function Routers() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/pokemon/:id" element={<PokeDetail />} />
        <Route element={<FourOFour />} />
      </Routes>
    </Router>
  );
}
