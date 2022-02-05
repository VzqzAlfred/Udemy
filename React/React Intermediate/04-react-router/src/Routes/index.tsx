import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../Views/Home";
import { FourOFour } from "../Views/404";

export default function Routes_() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route element={<FourOFour />}></Route>
      </Routes>
    </Router>
  );
}
