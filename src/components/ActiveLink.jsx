import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 text-2xl to-pink-600" : "")}>
      {children}
    </NavLink>
  );
};

export default ActiveLink;
