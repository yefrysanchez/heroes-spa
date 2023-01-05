import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", {
        replace: true
      });
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-slate-900 p-2 flex items-center justify-between">
      <ul className=" container mx-auto flex items-center px-4">
        <h1 className="mr-6 font-bold text-gray-50 text-2xl bg-slate-800 p-2 rounded-md select-none">
          HeroSPA
        </h1>
        <li className="mr-6">
          <NavLink
            to="/marvel"
            className={({ isActive }) =>
              `text-gray-400 hover:text-white transition-all duration-200 ${
                isActive ? "text-white" : ""
              }`
            }
          >
            Marvel
          </NavLink>
        </li>
        <li className="mr-6">
          <NavLink
            to="/dc"
            className={({ isActive }) =>
              `text-gray-400 hover:text-white transition-all duration-200 ${
                isActive ? "text-white" : ""
              }`
            }
          >
            DC
          </NavLink>
        </li>
        <li className="mr-6">
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `text-gray-400 hover:text-white transition-all duration-200 ${
                isActive ? "text-white" : ""
              }`
            }
          >
            Search
          </NavLink>
        </li>
      </ul>
      <div>
        <button
          onClick={onLogout}
          className=" hover:bg-slate-800 text-white font-semibold py-2 px-4 border transition-all duration-200 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
