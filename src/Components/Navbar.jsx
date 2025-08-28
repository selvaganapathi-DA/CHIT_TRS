import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import companylogo from "../Images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container-fluid px-3 px-md-5">
        {/* ✅ Left side logo + company name */}
        <Link
          className="navbar-brand d-flex align-items-center fw-bold fs-5 fs-md-4"
          to="/"
          onClick={closeMenu}
        >
          <img
            src={companylogo}
            alt="Logo"
            width="70"
            height="55"
            className="me-2"
            style={{ objectFit: "contain" }}
          />
          <span className="company-name">TRS Chit Funds Pvt. Ltd</span>
        </Link>

        {/* ✅ Mobile toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ✅ Right side links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto text-center text-lg-start">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/chits" onClick={closeMenu}>
                Chit Schemes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
