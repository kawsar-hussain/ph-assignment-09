import React from "react";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Plants from "./Components/Plants/Plants";
import Profile from "./Components/Profile/Profile";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet>
        <Home></Home>
        <Plants></Plants>
        <Profile></Profile>
      </Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Root;
