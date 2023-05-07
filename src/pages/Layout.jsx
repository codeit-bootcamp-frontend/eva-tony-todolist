import React from "react";
import Header from "@components/Header";
import FooterNav from "@components/FooterNav";
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
