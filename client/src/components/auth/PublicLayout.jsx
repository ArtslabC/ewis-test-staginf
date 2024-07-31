import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import MainFooter from "../footer/MainFooter";

const PublicLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <MainFooter />
    </>
  );
};

export default PublicLayout;
