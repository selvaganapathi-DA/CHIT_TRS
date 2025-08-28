import React, { useEffect, useState } from "react";
import imagesr from '../Images/a4.jpg';
import image1 from '../Images/a2.jpg';
import image3 from '../Images/a10.jpg';
import image5 from '../Images/a12.jpg';

const Home = () => {
  const slides = [
    {
      img: image1,
      title: "மிகச்சிறந்த  சீட்டு சேமிப்பு  திட்டங்கள் ₹50,000 ஆயிரம்  முதல் ₹10 லட்சம் வரை.",
      text: "Small savings today lead to big dreams tomorrow.",
    },
    {
      img: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "சீட்டு மதிப்பு ₹1 லட்சம் எந்த மாதம் எடுத்தாலும் ₹96,000 வரை கிடைக்கும்.",
      text: "Invest wisely and watch your wealth grow.",
    },
    {
      img: image3,
      title: "சீட்டு மதிப்பு ₹2 லட்சம் எந்த மாதம் எடுத்தாலும் ₹1,92,000 வரை கிடைக்கும்.",
      text: "Join hands with TRS Chits for safe and steady returns.",
    },
    {
      img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "சீட்டு மதிப்பு ₹5 லட்சம் எந்த மாதம் எடுத்தாலும் ₹4,80,000 வரை கிடைக்கும்.",
      text: "Every coin saved is a step towards financial freedom.",
    },
    {
      img: image5,
      title: "சீட்டு மதிப்பு ₹10 லட்சம் ஏலத்தொகை ₹6,80,000 முதல் ₹8,50,000 வரை கிடைக்கும்.",
      text: "Consistency and planning bring prosperity.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <main className="container-fluid px-0">
      {/* ✅ Slideshow Section */}
      <div className="mb-4 position-relative">
        <img
          src={slides[currentIndex].img}
          alt="Slideshow"
          className="img-fluid rounded shadow w-100"
          style={{ maxHeight: "500px", objectFit: "cover", transition: "1s ease-in-out" }}
        />           

        {/* Overlay Text */}
        <div
          className="position-absolute top-50 start-50 translate-middle text-center text-white p-3"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", borderRadius: "12px", maxWidth: "90%" }}
        >  
        
          <h5 className="fw-bold">{slides[currentIndex].title}</h5>
          <p className="lead d-none d-md-block">{slides[currentIndex].text}</p>
        </div>
      </div>

      {/* ✅ Welcome Section */}
      <section className="text-center mb-5 px-3">
        <h2 className="fw-bold">Welcome to TRS Chits</h2>
        <p className="lead">Manage your chits easily with us.</p>
        <p className="text-muted">
          TRS Chits is committed to providing safe and transparent chit fund services.
          Our mission is to support people in saving and growing their wealth with trust and reliability.
        </p>
      </section>

      {/* ✅ 3 Benefit Cards Section */}
      <section className="container">
        {/* Card 1 */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-3 mb-md-0">
            <img src={imagesr} alt="Chit Savings" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold">Save and Grow</h3>
            <p>
              Chits help you save money systematically while allowing you to access funds when needed.
              With disciplined savings, you can plan for the future with confidence.
            </p>
            <blockquote className="fst-italic text-primary">
              “A penny saved is a penny earned.”
            </blockquote>
          </div>
        </div>

        {/* Card 2 */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6 mb-3 mb-md-0">
            <img
              src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Chit Schemes"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold">Flexible Schemes</h3>
            <p>
              TRS Chits offers flexible chit schemes to match your budget and financial goals.
              Choose from a variety of options that suit your needs.
            </p>
            <blockquote className="fst-italic text-success">
              “Small drops make an ocean.”
            </blockquote>
          </div>
        </div>

        {/* Card 3 */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-3 mb-md-0">
            <img
              src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Trust & Reliability"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold">Trust & Reliability</h3>
            <p>
              With TRS Chits, your investments are in safe hands.
              We are dedicated to providing reliable and transparent services, ensuring your peace of mind.
            </p>
            <blockquote className="fst-italic text-danger">
              “Trust is the glue of life.”
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
