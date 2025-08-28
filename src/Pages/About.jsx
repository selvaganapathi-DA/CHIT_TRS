import React from "react";
import { motion } from "framer-motion";
import founderImg from "../Images/logo.png"; // 👉 Place your image in src/Images/

const About = () => {
  return (
    <main className="container my-5 about-section">
      <motion.h1
        className="fw-bold text-center mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h1>

      <div className="row align-items-center">
        {/* Left Side - Image */}
        <motion.div
          className="col-lg-5 col-md-6 text-center mb-4 mb-md-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={founderImg}
            alt="Founder"
            className="img-fluid rounded-3 shadow"
            style={{ maxHeight: "380px", objectFit: "cover" }}
          />
          <h5 className="mt-3 fw-bold">Mr.T.SivaKumar</h5>
          <p className="text-muted">Founder & Managing Director</p>
        </motion.div>

        {/* Right Side - Details */}
        <motion.div
          className="col-lg-7 col-md-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="fw-bold text-primary mb-3">TRS Chit Funds Pvt. Ltd.</h2>
          <ul className="list-unstyled fs-5">
            <li><strong>📅 Startup Year:</strong> 2017</li>
            <li><strong>📍 Location:</strong> Dharmapuri, Tamil Nadu</li>
            <li><strong>⭐ Good Name:</strong> Trusted Chit Fund Partner</li>
            <li><strong>👥 Services:</strong> Secure chit plans, investment guidance, quick withdrawals</li>
            <li><strong>🤝 People Served:</strong> 5,000+ happy customers</li>
            <li><strong>💰 Cash Payments:</strong> Payouts within <span className="fw-bold text-success">5 Days</span></li>
          </ul>
          <p className="mt-3 text-muted fs-6">
            At TRS Chit Funds, we believe in building trust and transparency with every 
            customer. Our schemes are designed to empower individuals, families, 
            and businesses with financial flexibility and growth opportunities.
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default About;
