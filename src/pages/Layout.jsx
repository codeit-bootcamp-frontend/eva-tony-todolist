import React from "react";
import Header from "@components/Header/Header.jsx";
import FooterNav from "@components/FooterNav/Footernav.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <FooterNav />
    </>
  );
};

export default Layout;
