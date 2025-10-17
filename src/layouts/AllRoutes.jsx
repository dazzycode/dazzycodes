// src/AllRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Sociial from "../pages/Sociial";


const AllRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
            <Route path="/social" element={<Sociial />} />

    
    </Routes>
  );
};

export default AllRoutes;
