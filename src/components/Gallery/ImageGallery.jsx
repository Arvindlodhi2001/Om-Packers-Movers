import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1659353741797-9284c3e9b901?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fFBhY2tlcnMlMjBhbmQlMjBtb3ZlcnMlMjBjb3BwbGVzfGVufDB8fDB8fHww",
      title: "Professional Packing",
      category: "packing",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1620455800201-7f00aeef12ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fFBhY2tlcnMlMjBhbmQlMjBtb3ZlcnMlMjBjb3BwbGVzfGVufDB8fDB8fHww",
      title: "Moving Trucks",
      category: "moving",
    },
    {
      id: 3,
      src: "https://plus.unsplash.com/premium_photo-1681433399403-54b91d44512a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
      title: "Storage Facility",
      category: "storage",
    },
    {
      id: 4,
      src: "https://media.istockphoto.com/id/614446662/photo/delivery-men-unloading-boxes-on-street.webp?a=1&b=1&s=612x612&w=0&k=20&c=Tw8UGVYnDSncsDBJ2DNtZ7QNwJI9oe-SK-FygvjPTCM=",
      title: "Team Work",
      category: "team",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1698917414969-feade59e3343?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Office Moving",
      category: "commercial",
    },
    {
      id: 6,
      src: "https://plus.unsplash.com/premium_photo-1678531758996-014bbe82bf81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fFBhY2tlcnMlMjBhbmQlMjBtb3ZlcnN8ZW58MHx8MHx8fDA%3D",
      title: "Careful Handling",
      category: "packing",
    },
    {
      id: 7,
      src: "https://plus.unsplash.com/premium_photo-1723590014121-2d5b1486d080?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fFBhY2tlcnMlMjBhbmQlMjBtb3ZlcnN8ZW58MHx8MHx8fDA%3D",
      title: "International Move",
      category: "international",
    },
    {
      id: 8,
      src: "https://media.istockphoto.com/id/481270358/photo/couple-with-a-brand-new-home.jpg?s=612x612&w=0&k=20&c=c0GokiDncz9bRZj6WmrKn2__CkzYkfvLsJjsKKn9BXs=",
      title: "Happy Customer",
      category: "team",
    },
  ];

  const categories = [
    "all",
    "packing",
    "moving",
    "storage",
    "team",
    "commercial",
    "international",
  ];
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;

    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex =
        (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }

    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section className="gallery">
      <div className="container">
        <div className="section-header">
          <h2>Our Work Gallery</h2>
          <p>See how we make moving easy and efficient</p>
        </div>

        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <img src={image.src} alt={image.title} />
              <div className="gallery-overlay">
                <h4>{image.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="lightbox">
            <div className="lightbox-content">
              <button className="lightbox-close" onClick={closeLightbox}>
                <X size={24} />
              </button>
              <button
                className="lightbox-nav prev"
                onClick={() => navigateImage("prev")}
              >
                <ChevronLeft size={32} />
              </button>
              <img src={selectedImage.src} alt={selectedImage.title} />
              <button
                className="lightbox-nav next"
                onClick={() => navigateImage("next")}
              >
                <ChevronRight size={32} />
              </button>
              <div className="lightbox-caption">
                <h3>{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGallery;
