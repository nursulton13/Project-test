import React from "react";
import "antd/dist/antd.css";
import { Footer, Navbar, WebInfo } from "../comps";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
      <WebInfo />
    </div>
  );
};

export default Layout;
