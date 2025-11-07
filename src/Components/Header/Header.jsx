import React from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  const li = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/plants">Plants</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-[#d4ffd5] shadow-sm lg:px-20 pl-1 px-5 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-[#7de280]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {" "}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
            </svg>
          </div>
          <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-[#C3F4C4] rounded-box z-1 mt-3 w-52 p-2 shadow">
            {li}
          </ul>
        </div>
        <Link to="/" className="text-xl font-bold text-[#00a700] flex">
          <img className="lg:w-8 w-6 " src="/logo.png" alt="" />
          GreenNest
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">{li}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </nav>
  );
};

export default Header;
