import React, { use, useState } from "react";
import { Link, Links, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { toast } from "react-toastify";

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

  const { user, logOut } = use(AuthContext);

  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logged out.");
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  };

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

      <div className="navbar-end flex gap-1.5">
        {user ? (
          <div className="flex items-center gap-2">
            <button onClick={handleDropdown} className="flex gap-2 bg-[#b1ffb1] btn shadow-none border-none h-12 px-2">
              <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className="btn bg-transparent px-0 border-none">
                  <img src={`${user.photoURL}`} alt="user photo" className="w-10 h-10 object-cover rounded-full"></img> <div>{dropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
                </div>
                <div className="dropdown-content bg-[#e8ffe8] rounded-box z-1 whitespace-nowrap p-3 shadow-sm w-[200px]">
                  <Link to="/profile">
                    <img src={user.photoURL} alt="" className="m-auto w-[170px] h-[170px] object-cover rounded-full border-2 border-[#5fdf61]" />
                    <p className="mt-2 text-xl font-bold">{user.displayName}</p>
                  </Link>
                </div>
              </div>
            </button>
            <button onClick={handleLogOut} className="h-8 btn bg-[#00a700] text-white border-none hover:shadow-none ">
              Logout
            </button>
          </div>
        ) : (
          <div className="">
            <Link to="/auth/login" className="h-8 btn bg-transparent text-[#00a700] border-none hover:shadow-none">
              Login
            </Link>
            <Link to="/auth/register" className="h-8 btn bg-transparent text-[#00a700] border-[#00a700] hover:shadow-none">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
