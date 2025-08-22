import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import companylogo from '../assets/Images/logo.png'

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <div className="container-fluid w-100">
        {/* Left side logo + company name */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={companylogo}
            alt="Logo"
            width="100"
            height="80"
            className="me-0"
          />
          <span>TRS Chit Funds Pvt.Ltd</span>
        </Link>

        {/* Mobile toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right side links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/chits">Chit Schemes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
