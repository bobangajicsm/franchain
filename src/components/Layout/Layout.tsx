import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import "./Layout.css";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="d-flex main">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
