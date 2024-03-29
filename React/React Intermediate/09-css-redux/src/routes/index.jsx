import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../Views/Home";
import Results from "../Views/Results";
import Detail from "../Views/Detail";

const RoutesComponents = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results/:title" element={<Results />} />
      <Route path="/detail/:movieId" element={<Detail />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesComponents;
