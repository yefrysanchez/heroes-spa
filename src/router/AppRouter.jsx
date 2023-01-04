import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../auth/LoginPage";
import DcPage from "../heroes/pages/DcPage";
import MarvelPage from "../heroes/pages/MarvelPage";
import HeroesRoutes from "../heroes/routes/HeroesRoutes";
import Navbar from "../ui/components/Navbar";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes />} />

      </Routes>
    </>
  );
};

export default AppRouter;
