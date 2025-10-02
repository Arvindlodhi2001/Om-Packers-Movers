import React from "react";
import {
  Award,
  Users,
  Shield,
  Clock,
  MapPin,
  Target,
  Heart,
  ThumbsUp,
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Award size={40} />, number: "5+", label: "Years Experience" },
    { icon: <Users size={40} />, number: "5000+", label: "Happy Customers" },
    { icon: <MapPin size={40} />, number: "50+", label: "Cities Covered" },
    { icon: <ThumbsUp size={40} />, number: "98%", label: "Satisfaction Rate" },
  ];

  const values = [
    {
      icon: <Shield size={32} />,
      title: "Trust & Reliability",
      description:
        "We prioritize the safety and security of your belongings with insured and guaranteed services.",
    },
    {
      icon: <Clock size={32} />,
      title: "Punctuality",
      description:
        "We value your time and ensure all our services are delivered as per committed schedules.",
    },
    {
      icon: <Heart size={32} />,
      title: "Customer Care",
      description:
        "Your satisfaction is our top priority. We provide personalized solutions for every client.",
    },
    {
      icon: <Target size={32} />,
      title: "Excellence",
      description:
        "We maintain the highest standards of quality in packing, moving, and customer service.",
    },
  ];

  const team = [
    {
      name: "Akash Lodhi",
      position: "Founder & CEO",
      experience: "2+ years in logistics",
      description: "Passionate about providing stress-free moving experiences.",
    },
    {
      name: "Mahender Singh",
      position: "Operations Manager",
      experience: "3+ years in moving services",
      description: "Ensures smooth execution of all moving operations.",
    },
    {
      name: "Rohit Lodhi",
      position: "Customer Relations",
      experience: "2.5+ years in client service",
      description: "Dedicated to understanding and fulfilling customer needs.",
    },
  ];

  return (
    <div className="page about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="about-hero-content">
                <h1 className="display-4 fw-bold text-dark mb-4">
                  About{" "}
                  <span className="" style={{ color: "#2C5530" }}>
                    Om Packers & Movers
                  </span>
                </h1>
                <p className="lead text-muted mb-4">
                  For over 2 years, Om Packers & Movers has been the trusted
                  choice for relocation services in Indore and across Madhya
                  Pradesh. We transform the stressful experience of moving into
                  a smooth, efficient, and hassle-free journey.
                </p>
                <div className="hero-stats row">
                  {stats.map((stat, index) => (
                    <div key={index} className="col-6 col-md-3 mb-4">
                      <div className="text-center">
                        <div
                          className="stat-icon mb-2"
                          style={{ color: "#2C5530" }}
                        >
                          {stat.icon}
                        </div>
                        <h3 className="fw-bold " style={{ color: "#2C5530" }}>
                          {stat.number}
                        </h3>
                        <p className="text-muted small">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-hero-image">
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Om Packers & Movers Team"
                  className="img-fluid rounded-3 shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our Story"
                className="img-fluid rounded-3 shadow"
              />
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-5">
                <h2 className="display-5 fw-bold text-dark mb-4">Our Story</h2>
                <p className="text-muted mb-4">
                  Founded in 2024, Om Packers & Movers started as a small local
                  moving service in Indore. What began as a single truck
                  operation has now grown into one of the most reliable and
                  trusted moving companies in Central India.
                </p>
                <p className="text-muted mb-4">
                  Our journey is built on the foundation of trust, reliability,
                  and exceptional customer service. We understand that moving is
                  more than just transporting belongings—it's about
                  transitioning lives, memories, and dreams.
                </p>
                <p className="text-muted">
                  Today, we serve residential and commercial clients across
                  Madhya Pradesh, offering comprehensive moving solutions with
                  the same dedication and personal touch that defined our humble
                  beginnings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="our-values py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">Our Values</h2>
            <p className="lead text-muted">
              The principles that guide everything we do
            </p>
          </div>
          <div className="row g-4">
            {values.map((value, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="value-card text-center p-4 h-100">
                  <div className="value-icon mb-3 text-primary">
                    {value.icon}
                  </div>
                  <h4 className="fw-bold text-dark mb-3">{value.title}</h4>
                  <p className="text-muted">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">Why Choose Us?</h2>
            <p className="lead text-muted">
              What makes us different from other moving companies
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="feature-card p-4 h-100">
                <h4 className="fw-bold text-dark mb-3">
                  🏠 Residential Moving Experts
                </h4>
                <p className="text-muted">
                  We specialize in home relocations with careful handling of
                  your personal belongings and furniture.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-card p-4 h-100">
                <h4 className="fw-bold text-dark mb-3">🏢 Commercial Moving</h4>
                <p className="text-muted">
                  Minimize business downtime with our efficient office and
                  commercial relocation services.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-card p-4 h-100">
                <h4 className="fw-bold text-dark mb-3">📦 Packing Services</h4>
                <p className="text-muted">
                  Professional packing using high-quality materials to ensure
                  the safety of your items during transit.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-card p-4 h-100">
                <h4 className="fw-bold text-dark mb-3">
                  🛡️ Insurance Coverage
                </h4>
                <p className="text-muted">
                  Comprehensive insurance options to protect your valuable
                  belongings throughout the moving process.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-card p-4 h-100">
                <h4 className="fw-bold text-dark mb-3">📞 24/7 Support</h4>
                <p className="text-muted">
                  Round-the-clock customer support to address your queries and
                  concerns at any time.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-card p-4 h-100">
                <h4 className="fw-bold text-dark mb-3">
                  💰 Transparent Pricing
                </h4>
                <p className="text-muted">
                  No hidden costs. We provide detailed quotes and stick to the
                  agreed pricing without surprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="our-team py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">Meet Our Team</h2>
            <p className="lead text-muted">
              The experienced professionals behind our success
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {team.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="team-card text-center p-4 h-100">
                  <div className="team-member-image mb-3">
                    <div className="avatar-placeholder bg-primary rounded-circle mx-auto d-flex align-items-center justify-content-center text-white fw-bold fs-3">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>
                  <h4 className="fw-bold text-dark mb-2">{member.name}</h4>
                  <p className="text-primary fw-semibold mb-2">
                    {member.position}
                  </p>
                  <p className="text-muted small mb-2">{member.experience}</p>
                  <p className="text-muted">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta py-5 bg-primary text-white">
        <div className="container">
          <div className="text-center">
            <h2 className="display-5 fw-bold mb-4">
              Ready to Move With Confidence?
            </h2>
            <p className="lead mb-4 opacity-75">
              Join thousands of satisfied customers who trust Om Packers &
              Movers for their relocation needs.
            </p>
            <div className="cta-buttons">
              <a
                href="/booking"
                className="btn btn-light btn-lg fw-semibold me-3"
              >
                Get Free Quote
              </a>
              <a
                href="/contact"
                className="btn btn-outline-light btn-lg fw-semibold"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
