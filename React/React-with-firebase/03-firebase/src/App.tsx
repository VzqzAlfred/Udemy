import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Components/Admin";
import Inicio from "./Components/Inicio";
import Login from "./Components/Login";
import Menu from "./Components/Menu";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
