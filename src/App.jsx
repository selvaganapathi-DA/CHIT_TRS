import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ChitSchemes from "./Pages/ChitSchemes";
import Contact from "./Pages/Contact";
import LogoScreen from "./Components/LogoScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ✅ Needed for navbar toggle

function App() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(false), 1000); // Show splash logo for 4s
    return () => clearTimeout(timer);
  }, []);

  if (showLogo) return <LogoScreen />;

  return (
    <Router basename="/Chit-Trs"> {/* 👈 Important for GitHub Pages */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="chits" element={<ChitSchemes />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} /> {/* 👈 fallback route */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
