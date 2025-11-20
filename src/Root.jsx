import React from "react";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Plants from "./Components/Plants/Plants";
import Profile from "./Components/Authentication/Profile/Profile";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet>
        <Home></Home>
        <Plants></Plants>
        <Profile></Profile>
      </Outlet>
      <Footer></Footer>
      <ToastContainer position="top-center" autoClose={2000}></ToastContainer>
    </div>
  );
};

export default Root;
