import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation></MainNavigation>
      <Outlet></Outlet>
    </>
  );
};

export default RootLayout;
