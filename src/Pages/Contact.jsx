// src/Pages/Contact.jsx
import React from "react";
import { FaWhatsapp, FaFacebook, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Form from './Form'
const Contact = () => {
  return (
    <main className="container my-5">
      <div className="row">
        {/* ✅ Left Side - Contact Form */}
        <div className="col-lg-6 col-md-12 mb-4">
          <h1 className="fw-bold text-center mb-4">Contact Us</h1>
          
          <Form/>
        </div>

        {/* ✅ Right Side - Corporate Office */}
        <div className="col-lg-6 col-md-12">
          <h2 className="fw-bold mb-3">Corporate Office</h2>
          <p>
            <FaMapMarkerAlt className="me-2 text-danger" />
            TRS Chit Funds Pvt.Ltd, 2B,Chinna samy Naidu Street,Dharmapuri - 636701
          </p>
          <p>
            <FaPhone className="me-2 text-success" />
            <a href="tel:+919876543210" className="text-decoration-none">
              +91 7200120078
            </a>
          </p>
          <p>
            <FaWhatsapp className="me-2 text-success" />
            <a
              href="https://wa.me/919444545907"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              Chat on WhatsApp
            </a>
          </p>
          <p>
            <FaFacebook className="me-2 text-primary" />
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              Visit our Facebook Page
            </a>
          </p>

          {/* ✅ Embedded Google Map */}
          <div className="mt-2 shadow rounded overflow-hidden">
            <iframe
  title="Google Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.69596733919!2d78.16095707325587!3d12.132942588110643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac170720d44919%3A0x3eff3c128cd6c634!2sRameshkumar%20saloon%20%26%20Musical%20Band%20Orchestra!5e0!3m2!1sen!2sin!4v1755864250357!5m2!1sen!2sin"
  width="600"
  height="260"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
