import React from "react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // ✅ Send to WhatsApp
    const whatsappMsg = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    window.open(`https://wa.me/91XXXXXXXXXX?text=${whatsappMsg}`, "_blank");

    // ✅ Send to Email using Formspree
    fetch("https://formspree.io/f/xyzabc", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    })
      .then((res) => {
        if (res.ok) {
          alert("✅ Message sent successfully via Email & WhatsApp!");
          e.target.reset();
        } else {
          alert("❌ Failed to send email. Try again.");
        }
      })
      .catch(() => alert("⚠️ Network error, please try again."));
  };

  return (
    <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" name="name" className="form-control" required />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" name="email" className="form-control" required />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea
          name="message"
          className="form-control"
          rows="4"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-dark w-100">
        🚀 Send Message
      </button>
    </form>
  );
};

export default ContactForm;
