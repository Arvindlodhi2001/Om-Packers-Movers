import React from "react";
import { Check, X } from "lucide-react";

const PricingTables = () => {
  const plans = [
    {
      name: "Basic Move",
      price: "Amount Not Fix",
      description: " Perfect for small apartments",
      features: [
        "2 Movers & 1 Truck",
        "3 Hours Moving",
        "Basic Packaging",
        "Local Moving",
        "Furniture Disassembly",
        "Insurance Coverage",
      ],
      included: [true, true, true, true, false, false],
      popular: false,
    },
    {
      name: "Standard Move",
      price: "Amount Not Fix",
      description: "Ideal for family homes",
      features: [
        "3 Movers & 1 Large Truck",
        "6 Hours Moving",
        "Professional Packaging",
        "Local & Regional",
        "Furniture Disassembly",
        "Insurance Coverage",
      ],
      included: [true, true, true, true, true, false],
      popular: true,
    },
    {
      name: "Premium Move",
      price: "Amount Not Fix",
      description: "Complete moving solution",
      features: [
        "4 Movers & 2 Trucks",
        "Full Day Service",
        "Premium Packaging",
        "Any Distance",
        "Furniture Disassembly",
        "Insurance Coverage",
      ],
      included: [true, true, true, true, true, true],
      popular: false,
    },
  ];

  return (
    <section className="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Transparent Pricing</h2>
          <p>No hidden costs. Choose the plan that works best for you.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && (
                <div className="popular-badge">Most Popular</div>
              )}

              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <div className="price">{plan.price}</div>
                <p className="price-description">{plan.description}</p>
              </div>

              <ul className="features-list">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={
                      plan.included[featureIndex] ? "included" : "not-included"
                    }
                  >
                    {plan.included[featureIndex] ? (
                      <Check size={16} />
                    ) : (
                      <X size={16} />
                    )}
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`btn-pricing ${
                  plan.popular ? "btn-primary" : "btn-secondary"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        <div className="pricing-note">
          <p>
            * All prices include taxes. Additional services available upon
            request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingTables;
