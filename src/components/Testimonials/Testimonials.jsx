import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Singh",
      location: "Lucknow",
      rating: 5,
      text: "Om Packers & Movers made our relocation stress-free. The team was professional and handled all our belongings with care. Highly recommended!",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fboy%2520bangladeshi%2520images%2520download%2F&psig=AOvVaw3-8y4vsKqsSBvfzziip6-k&ust=1759515113564000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNjS7tyOhpADFQAAAAAdAAAAABA9",
    },
    {
      name: "Vijay Lodhi",
      location: "Gwalior",
      rating: 5,
      text: "Outstanding service! They packed our entire office over the weekend and we were back in business on Monday. Excellent work!",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fmodel-boy&psig=AOvVaw3-8y4vsKqsSBvfzziip6-k&ust=1759515113564000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNjS7tyOhpADFQAAAAAdAAAAABAz",
    },
    {
      name: "Rohit Singh",
      location: "Bhopal",
      rating: 5,
      text: "The movers were punctual, efficient, and very careful with our furniture. The pricing was transparent with no surprises.",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Findian-boy-hand-head-pune-maharashtra-image112802413&psig=AOvVaw3-8y4vsKqsSBvfzziip6-k&ust=1759515113564000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNjS7tyOhpADFQAAAAAdAAAAABAp",
    },
    {
      name: "Neelesh Rajpoot",
      location: "Ujjain",
      rating: 5,
      text: "International move handled perfectly. They took care of all the paperwork and customs clearance. Smooth process from start to finish.",
      image:
        "https://img.freepik.com/free-photo/indian-business-man-reading-using-smart-phone-office_231208-2569.jpg?semt=ais_hybrid&w=740&q=80",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        fill={i < rating ? "#f59e0b" : "none"}
        color="#f59e0b"
      />
    ));
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <p>
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <Quote className="quote-icon" />
              <div className="stars">{renderStars(testimonial.rating)}</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
