import React from "react";
// import BookingSystem from "../components/Booking/BookingSystem";
import { Shield, Clock, Users, Award } from "lucide-react";

const Booking = () => {
  const features = [
    {
      icon: <Shield />,
      title: "Fully Insured",
      description: "Your belongings are protected with comprehensive insurance",
    },
    {
      icon: <Clock />,
      title: "On Time Guarantee",
      description: "We value your time with our punctuality guarantee",
    },
    {
      icon: <Users />,
      title: "Expert Team",
      description: "Professional movers with years of experience",
    },
    {
      icon: <Award />,
      title: "Quality Service",
      description: "5-star rated moving services across the city",
    },
  ];

  return (
    <div className="page booking-page">
      {/* Hero Section for Booking Page */}
      <section className="booking-hero">
        <div className="container">
          <div className="booking-hero-content">
            <h1>Book Your Move</h1>
            <p>
              Get a free, no-obligation quote for your upcoming move. Fill out
              the form below and we'll get back to you within 24 hours.
            </p>
            <div className="booking-features">
              {features.map((feature, index) => (
                <div key={index} className="booking-feature">
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking System Component */}
      {/* <BookingSystem /> */}

      {/* Additional Info Section */}
      <section className="booking-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <h3>📞 Need Immediate Help?</h3>
              <p>Call us directly for urgent moving inquiries</p>
              <a href="tel:+919770568367" className="btn-primary">
                +91 9770568367
              </a>
              <a href="tel:+916266174946" className="btn-primary">
                +91 6266174946
              </a>
            </div>
            <div className="info-card">
              <h3>💬 Live Chat</h3>
              <p>Get instant answers to your questions</p>
              <button className="btn-secondary">Start Chat</button>
            </div>
            <div className="info-card">
              <h3>📧 Email Us</h3>
              <p>Send us your detailed requirements</p>
              <a href="mailto:indoreompackersmovers@gmail.com" className="btn-secondary">
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;