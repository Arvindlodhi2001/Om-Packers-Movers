import React, { useState } from "react";
import { Calendar, User, Clock, Search, ArrowRight, Tag } from "lucide-react";
import blogPosts from "../data/blogData";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get unique categories
  const categories = [
    "all",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Featured post (first post)
  const featuredPost = filteredPosts[0];
  const recentPosts = filteredPosts.slice(1);

  return (
    <div className="page blog-page">
      {/* Blog Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-content">
            <h1>Moving Tips & Blog</h1>
            <p>
              Expert advice, industry insights, and helpful tips for stress-free
              moving
            </p>

            {/* Search Bar */}
            <div className="blog-search">
              <div className="search-box">
                <Search size={20} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="blog-categories">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <Tag size={16} />
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="featured-blog-post">
          <div className="container">
            <div className="featured-post-card">
              <div className="featured-image">
                <img src={featuredPost.image} alt={featuredPost.title} />
                <div className="featured-badge">Featured</div>
              </div>
              <div className="featured-content">
                <div className="post-meta">
                  <span>
                    <Calendar size={16} /> {featuredPost.date}
                  </span>
                  <span>
                    <User size={16} /> {featuredPost.author}
                  </span>
                  <span>
                    <Clock size={16} /> {featuredPost.readTime}
                  </span>
                  <span
                    className={`category-tag ${featuredPost.category.toLowerCase()}`}
                  >
                    {featuredPost.category}
                  </span>
                </div>
                <h2>{featuredPost.title}</h2>
                <p className="featured-excerpt">{featuredPost.excerpt}</p>
                <p className="full-content">{featuredPost.content}</p>
                <a href={`/blog/${featuredPost.id}`} className="read-more-btn">
                  Read Full Article <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts Grid */}
      <section className="blog-posts">
        <div className="container">
          <div className="posts-header">
            <h2>Recent Articles</h2>
            <p>Discover more helpful moving tips and guides</p>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="blog-grid">
              {recentPosts.map((post) => (
                <article key={post.id} className="blog-post-card">
                  <div className="post-image">
                    <img src={post.image} alt={post.title} />
                    <div
                      className={`category-badge ${post.category.toLowerCase()}`}
                    >
                      {post.category}
                    </div>
                  </div>
                  <div className="post-content">
                    <div className="post-meta">
                      <span>
                        <Calendar size={14} /> {post.date}
                      </span>
                      <span>
                        <User size={14} /> {post.author}
                      </span>
                      <span>
                        <Clock size={14} /> {post.readTime}
                      </span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <a href={`/blog/${post.id}`} className="read-more-link">
                      Read More <ArrowRight size={14} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-posts">
              <h3>No articles found</h3>
              <p>Try adjusting your search or filter criteria</p>
              <button
                className="btn-primary"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="blog-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>
              Get the latest moving tips and exclusive offers delivered to your
              inbox
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                required
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
