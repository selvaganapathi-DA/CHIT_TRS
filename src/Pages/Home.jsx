import React, { useEffect, useState } from "react"; 
import imagesr from '../assets/Images/a4.jpg';
import image1 from  '../assets/Images/a2.jpg'
import image3 from '../assets/Images/a10.jpg'
import image5 from '../assets/Images/a12.jpg'
const Home = () => {
  // ✅ Slideshow images WITH text
  const slides = [
    {
      img: image1,
      title: "Save Money, Secure Future",
      text: "Small savings today lead to big dreams tomorrow."
    },
    {
      img: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Smart Investments",
      text: "Invest wisely and watch your wealth grow."
    },
    {
      img: image3,
      title: "Trusted Chit Funds",
      text: "Join hands with TRS Chits for safe and steady returns."
    },
    {
      img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Wealth in Coins",
      text: "Every coin saved is a step towards financial freedom."
    },
    {
      img:image5,
      title: "Plan & Prosper",
      text: "Consistency and planning bring prosperity."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <main className="container-fluid my-5">
      {/* ✅ Automatic Slideshow with text */}
      <div className="mb-5 position-relative">
        <img
          src={slides[currentIndex].img}
          alt="Slideshow"
          className="img-fluid rounded shadow w-100"
          style={{ height: "400px", objectFit: "cover", transition: "0.6s" }}
        />

        {/* Overlay Text */}
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white px-3"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", borderRadius: "10px" }}>
          <h3 className="fw-bold">{slides[currentIndex].title}</h3>
          <p className="lead">{slides[currentIndex].text}</p>
        </div>
      </div>

      {/* ✅ Welcome Section */}
      <div className="row mb-5">
        <div className="col-lg-8 col-md-12 mx-auto text-center">
          <h1 className="fw-bold">Welcome to TRS Chits</h1>
          <p className="lead">
            This is the Home page. Manage your chits easily with us.
          </p>
          <p className="fs-6 text-muted">
            TRS Chits is committed to providing safe and transparent chit fund
            services. Our mission is to support people in saving and growing
            their wealth with trust and reliability.
          </p>
        </div>
      </div>

      {/* ✅ 3 Benefit Cards */}
      <div className="container">
        {/* Card 1 */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src={imagesr}
              alt="Chit Savings"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold">Save and Grow</h3>
            <p>
              Chits help you save money systematically while allowing you to
              access funds when needed. With disciplined savings, you can plan
              for the future with confidence.
            </p>
            <blockquote className="fst-italic text-primary">
              “A penny saved is a penny earned.”
            </blockquote>
          </div>
        </div>

        {/* Card 2 */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Chit Schemes"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold">Flexible Schemes</h3>
            <p>
              TRS Chits offers flexible chit schemes to match your budget and
              financial goals. Choose from a variety of options that suit your
              needs.
            </p>
            <blockquote className="fst-italic text-success">
              “Small drops make an ocean.”
            </blockquote>
          </div>
        </div>

        {/* Card 3 */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Trust & Reliability"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold">Trust & Reliability</h3>
            <p>
              With TRS Chits, your investments are in safe hands. We are
              dedicated to providing reliable and transparent services, ensuring
              your peace of mind.
            </p>
            <blockquote className="fst-italic text-danger">
              “Trust is the glue of life.”
            </blockquote>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
