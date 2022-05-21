import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../Views/Home";
import Results from "../Views/Results";
import Detail from "../Views/Detail";

const RoutesComponents = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/results" element={<Results />}></Route>
      <Route path="/detail" element={<Detail />}></Route>
    </Routes>
  </BrowserRouter>
);

export default RoutesComponents;
