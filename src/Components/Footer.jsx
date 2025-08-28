import React from "react";
import { FaWhatsapp, FaFacebook, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer text-center p-3 bg-dark text-white mt-auto">
      <p className="mb-1">
        © {new Date().getFullYear()} Developed By SELVAGANAPATHI. All rights reserved.
      </p>
      <div className="d-flex justify-content-center gap-3">
        <a
          href="https://wa.me/919444545907"
          target="_blank"
          rel="noopener noreferrer"
          className="text-success fs-4"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://facebook.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary fs-4"
        >
          <FaFacebook />
        </a>
        <a href="tel:+917200120078" className="text-warning fs-4">
          <FaPhone />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
