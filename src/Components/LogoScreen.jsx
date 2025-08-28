// src/Components/LogoScreen.jsx
import React from "react";
import logo from "../Images/logo.png"; // Replace with your actual logo path

const LogoScreen = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
      <img src={logo} alt="Logo" style={{ width: "300px" }} />
    </div>
  );
};

export default LogoScreen;
