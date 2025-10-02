import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "../Images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light py-2">
          {/* Logo */}
          <div className="navbar-brand">
            <img
              src={logo}
              alt="OM Packers & Movers"
              className="logo-img"
              style={{ height: "45px", width: "auto" }}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Menu */}
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="/services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="/testimonials">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="/blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="/contact">
                  Contact
                </a>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="d-flex align-items-center gap-3 ms-lg-3">
              <div className="d-none d-md-flex align-items-center text-dark">
                <Phone size={18} className="me-2" />
                <span className="fw-semibold">+91 9770568367</span>
              </div>
              <a href="/booking" className="btn btn-primary fw-semibold">
                Get Quote
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
