import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Om Packers & Movers</h3>
            <p>
              Professional packing and moving services you can trust. Making
              your relocation journey smooth and stress-free.
            </p>
            <div className="social-links">
              <a href="#">
                <Facebook size={20} />
              </a>
              <a href="#">
                <Twitter size={20} />
              </a>
              <a href="#">
                <Instagram size={20} />
              </a>
              <a href="#">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <a href="/services">Residential Moving</a>
            <a href="/services">Commercial Moving</a>
            <a href="/services">Packing Services</a>
            <a href="/services">Storage Solutions</a>
            <a href="/services">International Moving</a>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <Phone size={16} />
              <span>+91 9770568367</span>
            </div>
            <div className="contact-item">
              <Phone size={16} />
              <span>+91 6266174946</span>
            </div>
            <div className="contact-item">
              <Mail size={16} />
              <span>indoreompackersmovers@gmail.com</span>
            </div>
            <div className="contact-item">
              <MapPin size={16} />
              <span>
                101, chitra nagar near medanta hospital Vijay Nagar Indore
                (452010)
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2025 Om Packers & Movers. All rights reserved. | Designed
            with ❤️ for stress-free moving
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
