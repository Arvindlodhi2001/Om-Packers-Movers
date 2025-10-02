import React from "react";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import PricingTables from "../components/Pricing/PricingTables";
import Testimonials from "../components/Testimonials/Testimonials";
import Gallery from "../components/Gallery/ImageGallery";
import BlogSection from "../components/Blog/BlogSection";
import ContactForm from "../components/Contact/ContactForm";

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <PricingTables />
      <Testimonials />
      <Gallery />
      <BlogSection />
      <ContactForm />
    </main>
  );
};

export default Home;
