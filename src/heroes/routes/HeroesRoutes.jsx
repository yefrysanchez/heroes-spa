import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../../ui/components/Navbar";
import DcPage from "../pages/DcPage";
import HeroPage from "../pages/HeroPage";
import MarvelPage from "../pages/MarvelPage";
import SearchPage from "../pages/SearchPage";

const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="hero" element={<HeroPage/>} />
        <Route path="search" element={<SearchPage/>} />
        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};

export default HeroesRoutes;
