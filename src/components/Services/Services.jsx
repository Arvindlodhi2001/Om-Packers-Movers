import React from "react";
import { Truck, Home, Package, Shield, Warehouse, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Home />,
      title: "Residential Moving",
      description:
        "Safe and efficient home relocation services with careful handling of your belongings.",
    },
    {
      icon: <Truck />,
      title: "Commercial Moving",
      description:
        "Office and business relocation solutions with minimal downtime.",
    },
    {
      icon: <Package />,
      title: "Packing Services",
      description:
        "Professional packing and unpacking services using quality materials.",
    },
    {
      icon: <Shield />,
      title: "Insurance Coverage",
      description:
        "Complete insurance coverage for your valuable goods during transit.",
    },
    {
      icon: <Warehouse />,
      title: "Storage Solutions",
      description: "Secure short-term and long-term storage facilities.",
    },
    {
      icon: <Globe />,
      title: "International Moving",
      description:
        "Global relocation services with customs clearance assistance.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive moving solutions tailored to your specific needs</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="/booking" className="service-link">
                Get Quote →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
