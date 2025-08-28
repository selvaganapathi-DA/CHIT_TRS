import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Always visible Navbar */}
      <Navbar />

      {/* Page content */}
      <main className="flex-fill">
        <Outlet />
      </main>

      {/* Always visible Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
