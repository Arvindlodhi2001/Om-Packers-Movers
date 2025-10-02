import React, { useState } from "react";
import {
  Truck,
  Home,
  Package,
  Shield,
  Warehouse,
  Globe,
  Check,
  Clock,
  Users,
  Award,
  ArrowRight,
  Calendar,
  MapPin,
  Phone,
} from "lucide-react";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <Home size={40} />,
      title: "Residential Moving",
      description: "Complete home relocation services with care and precision",
      fullDescription:
        "We specialize in making your residential move smooth and stress-free. Our team handles everything from packing to unpacking, ensuring your belongings are transported safely to your new home. We use specialized equipment and techniques to protect your furniture and fragile items.",
      features: [
        "Professional packing & unpacking",
        "Furniture disassembly & assembly",
        "Specialized equipment for heavy items",
        "Same-day moving available",
        "Storage solutions included",
      ],
      image:
        "https://images.unsplash.com/photo-1624137308591-43f03e6d64c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "Starting from ₹6999",
      duration: "4-8 hours",
      team: "2-4 professional movers",
    },
    {
      icon: <Truck size={40} />,
      title: "Commercial Moving",
      description: "Efficient office and business relocation solutions",
      fullDescription:
        "Minimize business downtime with our professional commercial moving services. We work around your schedule to ensure a seamless transition. Our team is trained in handling office equipment, electronics, and sensitive documents with utmost care.",
      features: [
        "After-hours & weekend moving",
        "IT equipment handling",
        "Minimal business disruption",
        "Secure document transport",
        "Furniture configuration planning",
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1663045627496-441affafddf1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "Starting from ₹12999",
      duration: "6-12 hours",
      team: "4-6 professional movers",
    },
    {
      icon: <Package size={40} />,
      title: "Packing Services",
      description: "Professional packing and unpacking using quality materials",
      fullDescription:
        "Let our packing experts handle the tedious work. We use high-quality packing materials and proven techniques to protect your valuables. From fragile glassware to bulky electronics, we ensure everything is securely packed for transport.",
      features: [
        "High-quality packing materials",
        "Fragile item specialization",
        "Labeling & inventory management",
        "Custom crating for valuables",
        "Unpacking & setup service",
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1661310008764-f96f09bdb73e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "Starting from ₹22999",
      duration: "2-6 hours",
      team: "2-3 packing specialists",
    },
    {
      icon: <Shield size={40} />,
      title: "Insurance Coverage",
      description: "Comprehensive protection for your valuable belongings",
      fullDescription:
        "Peace of mind comes standard with our moving services. We offer various insurance options to protect your items during transit. Our coverage includes full value protection and released value protection options.",
      features: [
        "Full value protection",
        "Released value protection",
        "Special items coverage",
        "Transit insurance",
        "Storage insurance options",
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1661320820544-65a52ced48f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "Custom quotes",
      duration: "24/7 Coverage",
      team: "Insurance specialists",
    },
    {
      icon: <Warehouse size={40} />,
      title: "Storage Solutions",
      description: "Secure short-term and long-term storage facilities",
      fullDescription:
        "Need flexible storage options? Our climate-controlled facilities provide secure storage for your belongings. Whether you need short-term storage during transition or long-term solutions, we have you covered.",
      features: [
        "Climate-controlled units",
        "24/7 security monitoring",
        "Easy access scheduling",
        "Various unit sizes available",
        "Monthly flexible contracts",
      ],
      image:
        "https://images.unsplash.com/photo-1664193474613-a9aa857e8d73?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "Starting from 6999/month",
      duration: "Flexible terms",
      team: "Storage managers",
    },
    {
      icon: <Globe size={40} />,
      title: "International Moving",
      description: "Global relocation services with customs clearance",
      fullDescription:
        "Moving abroad? Our international moving experts handle everything from customs documentation to overseas logistics. We partner with reliable international carriers to ensure your belongings reach their destination safely.",
      features: [
        "Customs clearance assistance",
        "International documentation",
        "Sea & air freight options",
        "Door-to-door service",
        "Cultural relocation guidance",
      ],
      image:
        "https://images.unsplash.com/photo-1664193474613-a9aa857e8d73?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "Custom quotes",
      duration: "2-8 weeks",
      team: "International coordinators",
    },
  ];

  const stats = [
    { number: "5000+", label: "Happy Customers" },
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Professional Movers" },
    { number: "24/7", label: "Customer Support" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Quote",
      description:
        "We discuss your needs and provide a transparent, detailed quote",
    },
    {
      step: "02",
      title: "Planning & Preparation",
      description: "Our team creates a customized moving plan and schedule",
    },
    {
      step: "03",
      title: "Packing & Loading",
      description:
        "Professional packing and careful loading of your belongings",
    },
    {
      step: "04",
      title: "Transport & Delivery",
      description: "Safe transport and careful unloading at your new location",
    },
  ];

  return (
    <div className="page services-page">
      {/* Services Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>Our Moving Services</h1>
            <p>
              Comprehensive moving solutions tailored to your specific needs.
              From local residential moves to international relocations, we've
              got you covered.
            </p>
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="hero-stat">
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <div className="section-header">
            <h2>Complete Moving Solutions</h2>
            <p>
              We offer a wide range of services to make your moving experience
              seamless and stress-free
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card ${
                  activeService === index ? "active" : ""
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-price">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="service-details">
        <div className="container">
          <div className="details-grid">
            <div className="details-content">
              <div className="service-header">
                <div className="service-title">
                  {services[activeService].icon}
                  <h2>{services[activeService].title}</h2>
                </div>
                <div className="service-meta">
                  <div className="meta-item">
                    <Clock size={20} />
                    <span>{services[activeService].duration}</span>
                  </div>
                  <div className="meta-item">
                    <Users size={20} />
                    <span>{services[activeService].team}</span>
                  </div>
                  <div className="meta-item price">
                    <Award size={20} />
                    <span>{services[activeService].price}</span>
                  </div>
                </div>
              </div>

              <p className="service-full-description">
                {services[activeService].fullDescription}
              </p>

              <div className="service-features">
                <h4>What's Included:</h4>
                <ul>
                  {services[activeService].features.map((feature, index) => (
                    <li key={index}>
                      <Check size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-actions">
                <button
                  className="btn-primary"
                  onClick={() => (window.location.href = "/booking")}
                >
                  <Calendar size={18} />
                  Book This Service
                </button>
                <button className="btn-secondary">
                  <Phone size={18} />
                  Get Free Quote
                </button>
              </div>
            </div>

            <div className="details-image">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Moving Process */}
      <section className="moving-process">
        <div className="container">
          <div className="section-header">
            <h2>Our Moving Process</h2>
            <p>
              Simple, transparent, and efficient - that's how we make moving
              easy
            </p>
          </div>

          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="step-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="service-areas">
        <div className="container">
          <div className="areas-content">
            <div className="areas-info">
              <h2>Service Areas</h2>
              <p>
                We proudly serve the following areas with our professional
                moving services:
              </p>

              <div className="areas-list">
                <div className="area-group">
                  <h4>Local Moving</h4>
                  <ul>
                    <li>Within City Limits</li>
                    <li>Suburban Areas</li>
                    <li>Metro Regions</li>
                    <li>Same City Moves</li>
                  </ul>
                </div>

                <div className="area-group">
                  <h4>Long Distance</h4>
                  <ul>
                    <li>State-to-State</li>
                    <li>Cross Country</li>
                    <li>Regional Moves</li>
                    <li>Nationwide</li>
                  </ul>
                </div>
              </div>

              <div className="areas-cta">
                <p>Not sure if we serve your area?</p>
                <button className="btn-primary">
                  <MapPin size={18} />
                  Check Service Availability
                </button>
              </div>
            </div>

            <div className="areas-map">
              <div className="map-placeholder">
                <Globe size={48} />
                <h3>Nationwide Coverage</h3>
                <p>
                  We serve customers across the country and around the world
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Move?</h2>
            <p>
              Get a free, no-obligation quote for your upcoming move. Our team
              is ready to help you plan the perfect move.
            </p>
            <div className="cta-buttons">
              <button
                className="btn-primary"
                onClick={() => (window.location.href = "/booking")}
              >
                <Calendar size={18} />
                Book Your Move
              </button>
              <button className="btn-secondary">
                <Phone size={18} />
                Call Now: +91 9770568367
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
