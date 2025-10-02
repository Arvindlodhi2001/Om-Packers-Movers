import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Professional Packers & Movers</h1>
          <p>
            Reliable, Safe, and Affordable Moving Services for Your Peace of
            Mind. We make moving easy and stress-free.
          </p>
          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => (window.location.href = "/booking")}
            >
              Get Free Quote
            </button>
            <button
              className="btn-secondary"
              onClick={() => (window.location.href = "/services")}
            >
              Our Services
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>5000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Customer Support</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://plus.unsplash.com/premium_photo-1661488210189-58ae0a300f90?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Moving Services"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
