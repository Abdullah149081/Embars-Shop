import React, { useState } from "react";
import { FiCommand } from "react-icons/fi";
import { TiTimesOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="md:sticky top-0 z-10">
        <nav className="lg:px-32 nav justify-between items-center pl-4 bg-gray-800 ">
          <div>
            <Link to="/">
              <h2 className="text-4xl font-bold text-[#ffff]">
                Embars <span className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-lime-600 to-slate-700">S</span>h
                <span className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-lime-600 to-slate-700">O</span>p
              </h2>
            </Link>
          </div>

          <div>
            <div
              onClick={() => {
                setOpen(!open);
              }}
            >
              <span className="pr-12 md:pr-0 ">
                {open ? <TiTimesOutline className="h-6 w-7 mt-7 md:hidden text-lime-400  cursor-pointer" /> : <FiCommand className="h-7 w-7 mt-7 md:hidden text-zinc-200  cursor-pointer" />}
              </span>
            </div>

            <div
              className={`flex  flex-col md:py-0 md:space-x-10  font-bold text-[#ffff]  md:static md:flex-row  md:block ${
                open ? "top-22 left-0 h-1/2 w-full text-center bg-gray-800 py-12  pl-12 pr-6 space-y-6  rounded-bl-lg absolute" : "hidden"
              }`}
            >
              <ActiveLink to="/order">Order</ActiveLink>
              <ActiveLink to="/about">About</ActiveLink>
              <ActiveLink to="/Order-review">Order Review</ActiveLink>
              <ActiveLink to="/sing-in">Sing in</ActiveLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
