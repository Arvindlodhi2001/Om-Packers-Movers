import React, { useState } from "react";
import {
  Star,
  Quote,
  Filter,
  Calendar,
  MapPin,
  ThumbsUp,
  MessageCircle,
} from "lucide-react";

const Testimonials = () => {
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // 30 Dummy Customer Reviews with Ratings
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, NY",
      rating: 5,
      comment:
        "Om Packers & Movers made our relocation absolutely stress-free! The team was professional, punctual, and handled all our belongings with extreme care. Our antique furniture was packed so securely. Highly recommended!",
      date: "2025-03-15",
      service: "Residential Moving",
      helpful: 12,
      verified: true,
    },
    {
      id: 2,
      name: "Mike Chen",
      location: "San Francisco, CA",
      rating: 5,
      comment:
        "Outstanding service! They packed our entire tech office over the weekend and we were back in business on Monday morning. The IT equipment handling was exceptional.",
      date: "2025-03-14",
      service: "Commercial Moving",
      helpful: 8,
      verified: true,
    },
    {
      id: 3,
      name: "Emily Davis",
      location: "Chicago, IL",
      rating: 5,
      comment:
        "The movers were punctual, efficient, and very careful with our furniture. The pricing was transparent with no hidden costs. Will definitely use again for our next move!",
      date: "2025-03-12",
      service: "Residential Moving",
      helpful: 15,
      verified: true,
    },
    {
      id: 4,
      name: "Robert Wilson",
      location: "Miami, FL",
      rating: 5,
      comment:
        "International move handled perfectly! They took care of all customs paperwork and our belongings arrived exactly on time. Excellent communication throughout the process.",
      date: "2025-03-10",
      service: "International Moving",
      helpful: 6,
      verified: true,
    },
    {
      id: 5,
      name: "Jennifer Martinez",
      location: "Los Angeles, CA",
      rating: 4,
      comment:
        "Great service overall. The team worked quickly and efficiently. Only minor issue was one box was mislabeled, but everything was accounted for. Good value for money.",
      date: "2025-03-08",
      service: "Packing Services",
      helpful: 9,
      verified: true,
    },
    {
      id: 6,
      name: "David Brown",
      location: "Seattle, WA",
      rating: 5,
      comment:
        "Best moving experience ever! The crew went above and beyond to make sure everything was perfect. They even helped reassemble furniture that other movers would charge extra for.",
      date: "2025-03-05",
      service: "Residential Moving",
      helpful: 20,
      verified: true,
    },
    {
      id: 7,
      name: "Lisa Anderson",
      location: "Boston, MA",
      rating: 5,
      comment:
        "As a senior citizen, I was worried about moving. The Om Packers & Movers team was so patient and helpful. They handled everything with care and made the process easy for me.",
      date: "2025-03-03",
      service: "Residential Moving",
      helpful: 14,
      verified: true,
    },
    {
      id: 8,
      name: "James Thompson",
      location: "Austin, TX",
      rating: 4,
      comment:
        "Good service with professional staff. The move was completed on time and within budget. Would recommend for local moves.",
      date: "2025-03-01",
      service: "Commercial Moving",
      helpful: 7,
      verified: true,
    },
    {
      id: 9,
      name: "Amanda White",
      location: "Denver, CO",
      rating: 5,
      comment:
        "Absolutely fantastic! The packing service saved us so much time. Everything arrived in perfect condition. Worth every penny!",
      date: "2025-02-28",
      service: "Packing Services",
      helpful: 11,
      verified: true,
    },
    {
      id: 10,
      name: "Kevin Lee",
      location: "Portland, OR",
      rating: 5,
      comment:
        "Emergency move handled beautifully! Called on Friday, moved on Saturday. The team worked efficiently and everything was set up by evening. Amazing!",
      date: "2025-02-25",
      service: "Residential Moving",
      helpful: 18,
      verified: true,
    },
    {
      id: 11,
      name: "Michelle Garcia",
      location: "Phoenix, AZ",
      rating: 4,
      comment:
        "Professional and reliable service. The storage facility was clean and secure. Good communication from the team.",
      date: "2025-02-22",
      service: "Storage Solutions",
      helpful: 5,
      verified: true,
    },
    {
      id: 12,
      name: "Brian Clark",
      location: "Atlanta, GA",
      rating: 5,
      comment:
        "Cross-country move executed flawlessly. The GPS tracking kept us updated throughout the journey. Everything arrived on schedule and in perfect condition.",
      date: "2025-02-20",
      service: "Long Distance",
      helpful: 13,
      verified: true,
    },
    {
      id: 13,
      name: "Nicole Rodriguez",
      location: "Dallas, TX",
      rating: 5,
      comment:
        "The team handled our piano and artwork with such care! Specialized items require specialized movers, and Om Packers & Movers delivered excellence.",
      date: "2025-02-18",
      service: "Residential Moving",
      helpful: 16,
      verified: true,
    },
    {
      id: 14,
      name: "Steven Harris",
      location: "Las Vegas, NV",
      rating: 4,
      comment:
        "Good value moving service. The crew was friendly and worked hard. Minor delay due to traffic but they communicated well about it.",
      date: "2025-02-15",
      service: "Residential Moving",
      helpful: 8,
      verified: true,
    },
    {
      id: 15,
      name: "Rachel King",
      location: "San Diego, CA",
      rating: 5,
      comment:
        "Outstanding customer service from start to finish! The quote was accurate, the team was professional, and the move was seamless. Highly recommend!",
      date: "2025-02-12",
      service: "Commercial Moving",
      helpful: 10,
      verified: true,
    },
    {
      id: 16,
      name: "Daniel Wright",
      location: "Philadelphia, PA",
      rating: 5,
      comment:
        "Moved our medical practice with minimal disruption. The team understood the sensitivity of medical equipment and handled everything perfectly.",
      date: "2025-02-10",
      service: "Commercial Moving",
      helpful: 7,
      verified: true,
    },
    {
      id: 17,
      name: "Jessica Scott",
      location: "Houston, TX",
      rating: 4,
      comment:
        "Efficient and professional service. The packing materials were high quality. Would have given 5 stars if the final bill matched the initial quote exactly.",
      date: "2025-02-08",
      service: "Packing Services",
      helpful: 9,
      verified: true,
    },
    {
      id: 18,
      name: "Matthew Green",
      location: "Orlando, FL",
      rating: 5,
      comment:
        "International relocation specialists! Moved our family from UK to USA. Handled all documentation and made the transition smooth. Excellent service!",
      date: "2025-02-05",
      service: "International Moving",
      helpful: 11,
      verified: true,
    },
    {
      id: 19,
      name: "Samantha Hall",
      location: "Nashville, TN",
      rating: 5,
      comment:
        "The storage solution was perfect for our temporary housing situation. Climate-controlled unit kept our belongings in perfect condition.",
      date: "2025-02-03",
      service: "Storage Solutions",
      helpful: 6,
      verified: true,
    },
    {
      id: 20,
      name: "Christopher Young",
      location: "Detroit, MI",
      rating: 5,
      comment:
        "Last-minute move handled with professionalism. Called on Wednesday, moved on Friday. The team worked efficiently and everything was perfect.",
      date: "2025-02-01",
      service: "Residential Moving",
      helpful: 14,
      verified: true,
    },
    {
      id: 21,
      name: "Lauren Allen",
      location: "Minneapolis, MN",
      rating: 4,
      comment:
        "Good moving service with careful handlers. The team took extra care with our fragile items. Reasonable pricing for the quality of service.",
      date: "2025-01-28",
      service: "Residential Moving",
      helpful: 8,
      verified: true,
    },
    {
      id: 22,
      name: "Andrew Baker",
      location: "Salt Lake City, UT",
      rating: 5,
      comment:
        "Exceptional service during peak moving season! Despite being busy, they provided top-notch service and completed the move ahead of schedule.",
      date: "2025-01-25",
      service: "Commercial Moving",
      helpful: 12,
      verified: true,
    },
    {
      id: 23,
      name: "Megan Nelson",
      location: "Charlotte, NC",
      rating: 5,
      comment:
        "The insurance coverage gave us peace of mind. While we didn't need to use it, knowing our valuable antiques were protected was worth it.",
      date: "2025-01-22",
      service: "Insurance Coverage",
      helpful: 5,
      verified: true,
    },
    {
      id: 24,
      name: "Joshua Carter",
      location: "Kansas City, MO",
      rating: 4,
      comment:
        "Professional team with good equipment. The move was efficient and everything arrived safely. Good communication throughout the process.",
      date: "2025-01-20",
      service: "Residential Moving",
      helpful: 7,
      verified: true,
    },
    {
      id: 25,
      name: "Stephanie Mitchell",
      location: "Columbus, OH",
      rating: 5,
      comment:
        "Absolutely wonderful experience! The team was cheerful, hardworking, and careful with all our belongings. Made moving day enjoyable!",
      date: "2025-01-18",
      service: "Residential Moving",
      helpful: 19,
      verified: true,
    },
    {
      id: 26,
      name: "Brandon Perez",
      location: "Indianapolis, IN",
      rating: 5,
      comment:
        "Corporate relocation handled perfectly. Moved 50 employees with minimal disruption. Excellent project management and execution.",
      date: "2025-01-15",
      service: "Commercial Moving",
      helpful: 9,
      verified: true,
    },
    {
      id: 27,
      name: "Rebecca Roberts",
      location: "San Antonio, TX",
      rating: 4,
      comment:
        "Good packing service with quality materials. The unpacking service saved us a lot of time. Professional and efficient team.",
      date: "2025-01-12",
      service: "Packing Services",
      helpful: 10,
      verified: true,
    },
    {
      id: 28,
      name: "Justin Turner",
      location: "Baltimore, MD",
      rating: 5,
      comment:
        "Military family move handled with precision. Understood our unique needs and timeline. Excellent service for service members!",
      date: "2025-01-10",
      service: "Long Distance",
      helpful: 13,
      verified: true,
    },
    {
      id: 29,
      name: "Olivia Phillips",
      location: "Milwaukee, WI",
      rating: 5,
      comment:
        "The team went above and beyond! Helped us with items that weren't even part of the original quote. Exceptional customer service!",
      date: "2025-01-08",
      service: "Residential Moving",
      helpful: 21,
      verified: true,
    },
    {
      id: 30,
      name: "Tyler Evans",
      location: "Tucson, AZ",
      rating: 5,
      comment:
        "Perfect 5-star experience from start to finish. Accurate quote, professional team, careful handling, and on-time delivery. What more could you ask for?",
      date: "2025-01-05",
      service: "Residential Moving",
      helpful: 17,
      verified: true,
    },

    {
      id: 31,
      name: "Rajesh Verma",
      location: "Indore, MP",
      rating: 5,
      comment:
        "बहुत बढ़िया service! Om Packers & Movers team ने हमारा पूरा घर shift किया और एक भी चीज damage नहीं हुई। Very professional staff.",
      date: "2025-03-15",
      service: "Residential Moving",
      helpful: 25,
      verified: true,
    },
    {
      id: 32,
      name: "Priya Singh",
      location: "Bhopal, MP",
      rating: 5,
      comment:
        "Excellent service! टीम on time आई और सारा काम perfectly complete किया। खासकर हमारे fragile items का बहुत ध्यान रखा।",
      date: "2025-03-14",
      service: "Packing Services",
      helpful: 18,
      verified: true,
    },
    {
      id: 33,
      name: "Amit Patel",
      location: "Ujjain, MP",
      rating: 4,
      comment:
        "Good service mili। टीम cooperative थी और rates भी reasonable थे। बस थोड़ा delay hua वरना सब अच्छा रहा।",
      date: "2025-03-12",
      service: "Residential Moving",
      helpful: 12,
      verified: true,
    },
    {
      id: 34,
      name: "Sneha Sharma",
      location: "Jabalpur, MP",
      rating: 5,
      comment:
        "Best moving experience! टीम ने हमारे सारे furniture को बहुत care से handle किया। Packing quality भी बहुत अच्छी थी।",
      date: "2025-03-10",
      service: "Residential Moving",
      helpful: 20,
      verified: true,
    },
    {
      id: 35,
      name: "Vikram Rao",
      location: "Gwalior, MP",
      rating: 5,
      comment:
        "Office shifting बहुत smoothly complete हुई। Team professional थी और minimal disturbance में काम पूरा किया। Highly recommended!",
      date: "2025-03-08",
      service: "Commercial Moving",
      helpful: 15,
      verified: true,
    },
    {
      id: 36,
      name: "Anjali Gupta",
      location: "Ratlam, MP",
      rating: 4,
      comment:
        "सस्ती और अच्छी service। टीम hard working थी। थोड़ा time लगा पर काम अच्छा हुआ। Price बहुत reasonable था।",
      date: "2025-03-05",
      service: "Residential Moving",
      helpful: 10,
      verified: true,
    },
    {
      id: 37,
      name: "Rahul Malviya",
      location: "Dewas, MP",
      rating: 5,
      comment:
        "हमारे village से city move करना था। Team ने बहुत help की और सारा सामान safely deliver किया। Very satisfied!",
      date: "2025-03-03",
      service: "Long Distance",
      helpful: 22,
      verified: true,
    },
    {
      id: 38,
      name: "Pooja Jain",
      location: "Sagar, MP",
      rating: 5,
      comment:
        "Packing service outstanding थी। सारे items properly packed और labeled थे। Unpacking में भी help मिली। Excellent!",
      date: "2025-03-01",
      service: "Packing Services",
      helpful: 16,
      verified: true,
    },
    {
      id: 39,
      name: "Sanjay Thakur",
      location: "Rewa, MP",
      rating: 4,
      comment:
        "Good service for the price. टीम ने मेरे old parents की बहुत help की। Furniture assembly भी अच्छा किया।",
      date: "2025-02-28",
      service: "Residential Moving",
      helpful: 14,
      verified: true,
    },
    {
      id: 40,
      name: "Neha Chouhan",
      location: "Satna, MP",
      rating: 5,
      comment:
        "Last minute move था फिर भी team ने manage कर लिया। Very flexible और cooperative staff। Thank you Om Packers & Movers!",
      date: "2025-02-25",
      service: "Residential Moving",
      helpful: 19,
      verified: true,
    },
    {
      id: 41,
      name: "Mohan Bhargav",
      location: "Katni, MP",
      rating: 5,
      comment:
        "Storage facility बहुत clean और secure है। Monthly charges भी affordable हैं। बहुत अच्छी service provide करते हैं।",
      date: "2025-02-22",
      service: "Storage Solutions",
      helpful: 11,
      verified: true,
    },
    {
      id: 42,
      name: "Kavita Joshi",
      location: "Khandwa, MP",
      rating: 4,
      comment:
        "Satisfactory service। टीम polite थी और काम properly किया। Rate थोड़ा high था पर quality अच्छी मिली।",
      date: "2025-02-20",
      service: "Residential Moving",
      helpful: 9,
      verified: true,
    },
    {
      id: 43,
      name: "Alok Trivedi",
      location: "Khargone, MP",
      rating: 5,
      comment:
        "International move बहुत smoothly handle किया। Customs clearance में भी help मिली। Great international service!",
      date: "2025-02-18",
      service: "International Moving",
      helpful: 8,
      verified: true,
    },
    {
      id: 44,
      name: "Sunita Rao",
      location: "Dhar, MP",
      rating: 5,
      comment:
        "हमारे सारे electronic items safely move हुए। Team technically knowledgeable थी। Very impressed with their service.",
      date: "2025-02-15",
      service: "Residential Moving",
      helpful: 17,
      verified: true,
    },
    {
      id: 45,
      name: "Ramesh Yadav",
      location: "Mandsaur, MP",
      rating: 4,
      comment:
        "Overall good experience। टीम disciplined थी। कुछ boxes mislabeled थे पर quickly sorted out। Decent service।",
      date: "2025-02-12",
      service: "Packing Services",
      helpful: 13,
      verified: true,
    },
    {
      id: 46,
      name: "Suman Tiwari",
      location: "Neemuch, MP",
      rating: 5,
      comment:
        "Emergency moving service बहुत helpful रही। रात में भी team available थी। Really appreciate their support।",
      date: "2025-02-10",
      service: "Residential Moving",
      helpful: 21,
      verified: true,
    },
    {
      id: 47,
      name: "Vishal Dubey",
      location: "Singrauli, MP",
      rating: 5,
      comment:
        "Commercial office move perfectly executed। Minimal business disruption। Team very professional और efficient थी।",
      date: "2025-02-08",
      service: "Commercial Moving",
      helpful: 15,
      verified: true,
    },
    {
      id: 48,
      name: "Madhu Shukla",
      location: "Shivpuri, MP",
      rating: 4,
      comment:
        "Reasonable rates के साथ good service। टीम experienced थी। कुछ communication gap था पर overall satisfied।",
      date: "2025-02-05",
      service: "Residential Moving",
      helpful: 10,
      verified: true,
    },
    {
      id: 49,
      name: "Arun Pandey",
      location: "Vidisha, MP",
      rating: 5,
      comment:
        "Insurance coverage ने peace of mind दिया। Claim process भी simple है। Safe और secure moving experience।",
      date: "2025-02-03",
      service: "Insurance Coverage",
      helpful: 7,
      verified: true,
    },
    {
      id: 50,
      name: "Geeta Mishra",
      location: "Chhindwara, MP",
      rating: 5,
      comment:
        "हमारे सारे kitchen items perfectly packed हुए। कोई breakage नहीं हुई। Packing quality really impressive है।",
      date: "2025-02-01",
      service: "Packing Services",
      helpful: 18,
      verified: true,
    },
    {
      id: 51,
      name: "Rohit Solanki",
      location: "Narsinghpur, MP",
      rating: 4,
      comment:
        "Satisfactory moving service। टीम hard working थी। कुछ delays हुए पर final result अच्छा रहा। OK service।",
      date: "2025-01-28",
      service: "Residential Moving",
      helpful: 11,
      verified: true,
    },
    {
      id: 52,
      name: "Anita Verma",
      location: "Sehore, MP",
      rating: 5,
      comment:
        "हमारे बच्चों के toys और books specially packed हुए। Team बहुत caring थी। Family-friendly service मिली।",
      date: "2025-01-25",
      service: "Packing Services",
      helpful: 16,
      verified: true,
    },
    {
      id: 53,
      name: "Dinesh Agrawal",
      location: "Burhanpur, MP",
      rating: 5,
      comment:
        "Long distance move बिना किसी problem के complete हुआ। GPS tracking से real-time updates मिलते रहे। Excellent!",
      date: "2025-01-22",
      service: "Long Distance",
      helpful: 14,
      verified: true,
    },
    {
      id: 54,
      name: "Sarika Patel",
      location: "Harda, MP",
      rating: 4,
      comment:
        "Good value for money। टीम cooperative थी। थोड़ा better communication होता तो और अच्छा रहता। Overall fine।",
      date: "2025-01-20",
      service: "Residential Moving",
      helpful: 9,
      verified: true,
    },
    {
      id: 55,
      name: "Nitin Sharma",
      location: "Betul, MP",
      rating: 5,
      comment:
        "Village से city move करना easy हो गया Om Packers & Movers की वजह से। Team ने सारी challenges handle की। Great job!",
      date: "2025-01-18",
      service: "Long Distance",
      helpful: 20,
      verified: true,
    },
    {
      id: 56,
      name: "Meena Deshmukh",
      location: "Hoshangabad, MP",
      rating: 5,
      comment:
        "Storage solution बहुत useful रहा। Temporary storage के लिए perfect option। Facility clean और maintained है।",
      date: "2025-01-15",
      service: "Storage Solutions",
      helpful: 12,
      verified: true,
    },
    {
      id: 57,
      name: "Akhilesh Nair",
      location: "Damoh, MP",
      rating: 4,
      comment:
        "Decent service at reasonable price। टीम ने proper equipment use किया। कुछ improvements possible हैं।",
      date: "2025-01-12",
      service: "Residential Moving",
      helpful: 8,
      verified: true,
    },
    {
      id: 58,
      name: "Bhavna Reddy",
      location: "Shahdol, MP",
      rating: 5,
      comment:
        "Team very professional और well-trained थी। Special items like piano safely move हुआ। Highly skilled staff।",
      date: "2025-01-10",
      service: "Residential Moving",
      helpful: 19,
      verified: true,
    },
    {
      id: 59,
      name: "Chetan Malhotra",
      location: "Anuppur, MP",
      rating: 5,
      comment:
        "Complete home relocation smoothly हुई। From packing to unpacking, everything perfectly managed। Outstanding service!",
      date: "2025-01-08",
      service: "Residential Moving",
      helpful: 23,
      verified: true,
    },
    {
      id: 60,
      name: "Divya Saxena",
      location: "Alirajpur, MP",
      rating: 4,
      comment:
        "Good service with minor issues। टीम responsive थी और problems quickly solve की। Overall positive experience।",
      date: "2025-01-05",
      service: "Residential Moving",
      helpful: 10,
      verified: true,
    },
  ];

  // Services for filter
  const services = [
    "all",
    "Residential Moving",
    "Commercial Moving",
    "Packing Services",
    "Storage Solutions",
    "International Moving",
    "Long Distance",
    "Insurance Coverage",
  ];

  // Filter and sort testimonials
  const filteredTestimonials = testimonials
    .filter((testimonial) => filter === "all" || testimonial.service === filter)
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.date) - new Date(a.date);
        case "oldest":
          return new Date(a.date) - new Date(b.date);
        case "highest-rated":
          return b.rating - a.rating;
        case "most-helpful":
          return b.helpful - a.helpful;
        default:
          return 0;
      }
    });

  // Calculate average rating
  const averageRating = (
    testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0) /
    testimonials.length
  ).toFixed(1);

  // Render stars
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        fill={i < rating ? "#f59e0b" : "none"}
        color="#f59e0b"
        className="star"
      />
    ));
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="page testimonials-page">
      {/* Testimonials Hero Section */}
      <section className="testimonials-hero">
        <div className="container">
          <div className="testimonials-hero-content">
            <h1>Customer Reviews</h1>
            <p>
              See what our customers have to say about their moving experiences
              with Om Packers & Movers
            </p>

            <div className="rating-overview">
              <div className="average-rating">
                <div className="rating-number">{averageRating}</div>
                <div className="rating-stars">
                  {renderStars(Math.round(averageRating))}
                </div>
                <div className="rating-count">
                  Based on {testimonials.length} reviews
                </div>
              </div>

              <div className="rating-breakdown">
                {[5, 4, 3, 2, 1].map((stars) => {
                  const count = testimonials.filter(
                    (t) => t.rating === stars
                  ).length;
                  const percentage = (count / testimonials.length) * 100;
                  return (
                    <div key={stars} className="rating-bar">
                      <span className="stars">{stars} stars</span>
                      <div className="bar-container">
                        <div
                          className="bar-fill"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="count">({count})</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Sorting */}
      <section className="testimonials-filters">
        <div className="container">
          <div className="filters-container">
            <div className="filter-group">
              <Filter size={20} />
              <label>Filter by Service:</label>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="filter-select"
              >
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service === "all" ? "All Services" : service}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="highest-rated">Highest Rated</option>
                <option value="most-helpful">Most Helpful</option>
              </select>
            </div>

            <div className="results-count">
              Showing {filteredTestimonials.length} of {testimonials.length}{" "}
              reviews
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="testimonials-grid-section">
        <div className="container">
          <div className="testimonials-grid">
            {filteredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <Quote className="quote-icon" />

                <div className="testimonial-header">
                  <div className="customer-info">
                    <h3>{testimonial.name}</h3>
                    <div className="customer-meta">
                      <MapPin size={14} />
                      <span>{testimonial.location}</span>
                      <Calendar size={14} />
                      <span>{formatDate(testimonial.date)}</span>
                    </div>
                  </div>

                  <div className="rating-service">
                    <div className="stars">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="service-badge">{testimonial.service}</span>
                    {testimonial.verified && (
                      <span className="verified-badge">Verified</span>
                    )}
                  </div>
                </div>

                <p className="testimonial-comment">{testimonial.comment}</p>

                <div className="testimonial-footer">
                  <button className="helpful-btn">
                    <ThumbsUp size={16} />
                    Helpful ({testimonial.helpful})
                  </button>

                  <button className="reply-btn">
                    <MessageCircle size={16} />
                    Reply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Review CTA */}
      <section className="add-review-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Share Your Experience</h2>
            <p>
              Moved with us recently? We'd love to hear about your experience!
            </p>
            <button className="btn-primary">Write a Review</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
