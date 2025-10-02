import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: ["+91 9770568367", "+91 6266174946"],
      description: "Office : Mon to Sun 9am to 8pm",
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: ["indoreompackersmovers@gmail.com"],
      description: "Send us your query anytime!",
    },
    {
      icon: <MapPin size={24} />,
      title: "Office",
      details: [
        "Kalp Kamdhenu Colony",
        "Ring Road Opposite Shahid Park",
        "Near Vijay Nagar Indore Madhyapradesh (452010)",
      ],
      description: "Visit our office",
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 8:00 PM",
        "Saturday: 9:00 AM - 5:00 PM",
        "Sunday: Emergency moves only",
      ],
      description: "We are here to serve you",
    },
  ];

  const faqs = [
    {
      question: "How much notice do I need to give for booking a move?",
      answer:
        "We recommend booking at least 2 weeks in advance, but we can accommodate last-minute moves depending on availability.",
    },
    {
      question: "Do you provide packing materials?",
      answer:
        "Yes, we offer complete packing services including all necessary materials like boxes, tape, bubble wrap, and packing paper.",
    },
    {
      question: "Are my belongings insured during the move?",
      answer:
        "Absolutely! We provide comprehensive insurance coverage for all your items during transit. Additional coverage options are available.",
    },
    {
      question: "Can you help with international moves?",
      answer:
        "Yes, we specialize in international relocations and handle all customs documentation and logistics.",
    },
  ];

  return (
    <div className="page contact-page">
      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Get In Touch</h1>
            <p>
              We're here to help you with your moving needs. Contact us for a
              free quote or any questions you may have.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Main Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              <p className="section-description">
                Reach out to us through any of these channels. Our team is ready
                to assist you with your moving journey.
              </p>

              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-card">
                    <div
                      className="contact-icon"
                      style={{ height: "55px", width: "55px" }}
                    >
                      {info.icon}
                    </div>
                    <div className="contact-details">
                      <h3>{info.title}</h3>
                      <div className="contact-items">
                        {info.details.map((detail, idx) => (
                          <p key={idx} style={{ lineHeight: "3px" }}>
                            {detail}
                          </p>
                        ))}
                      </div>
                      <p className="contact-description">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="emergency-contact">
                <div className="emergency-icon">
                  <MessageCircle size={32} />
                </div>
                <div className="emergency-content">
                  <h3>Emergency Moving Service</h3>
                  <p>
                    Need to move urgently? Call our 24/7 emergency line for
                    immediate assistance.
                  </p>
                  <a href="tel:+919770568367" className="emergency-btn">
                    <Phone size={18} />
                    +91 9770568367-EMRG
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h2>Send us a Message</h2>
                <p>
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="success-message">
                  <CheckCircle size={48} className="success-icon" />
                  <h3>Thank You!</h3>
                  <p>
                    Your message has been sent successfully. We'll get back to
                    you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general-inquiry">General Inquiry</option>
                        <option value="moving-quote">Moving Quote</option>
                        <option value="packing-services">
                          Packing Services
                        </option>
                        <option value="storage-solutions">
                          Storage Solutions
                        </option>
                        <option value="international-moving">
                          International Moving
                        </option>
                        <option value="complaint">Complaint</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your moving needs, preferred dates, and any special requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`submit-btn ${isSubmitting ? "submitting" : ""}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="container">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions about our moving services</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map">
        <div className="container">
          <div className="map-header">
            <h2>Visit Our Office</h2>
            <p>
              Come see us in person for a detailed consultation about your move
            </p>
          </div>
          <div className="map-container">
            <div className="map-placeholder">
              <MapPin size={48} />
              <h3>Interactive Map</h3>
              <p>
                101, chitra nagar near medanta hospital Vijay Nagar Indore
                (452010)
              </p>
              <button className="btn-secondary">Get Directions</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
