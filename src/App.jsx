// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ChitSchemes from "./Pages/ChitSchemes";
import Contact from "./Pages/Contact";
import "./App.css"; // ✅ external CSS file
import { FaWhatsapp, FaFacebook, FaPhone } from "react-icons/fa"; // ✅ icons

function App() {
  return (
    <Router>
      <div className="app-layout">
        {/* ✅ Navbar */}
        <Navbar />

        {/* ✅ Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/chits" element={<ChitSchemes />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* ✅ Footer */}
        <footer className="footer text-center p-3 bg-dark text-white">
          <p>© {new Date().getFullYear()} Developed By SELVAGANAPATHI All rights reserved.</p>

          {/* ✅ Social / Contact Links */}
          <div className="d-flex justify-content-center gap-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919444545907"
              target="_blank"
              rel="noopener noreferrer"
              className="text-success fs-4"
            >
              <FaWhatsapp />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary fs-4"
            >
              <FaFacebook />
            </a>

            {/* Phone */}
            <a href="tel:+917200120078" className="text-warning fs-4">
              <FaPhone />
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
