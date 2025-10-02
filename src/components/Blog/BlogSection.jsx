import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import blogPosts from "../../data/blogData";

const BlogSection = () => {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <section className="blog">
      <div className="container">
        <div className="section-header">
          <h2>Moving Tips & Blog</h2>
          <p>Expert advice and latest news from the moving industry</p>
        </div>

        <div className="blog-featured">
          <div className="featured-post">
            <img src={featuredPost.image} alt={featuredPost.title} />
            <div className="featured-content">
              <div className="post-meta">
                <span>
                  <Calendar size={16} /> {featuredPost.date}
                </span>
                <span>
                  <User size={16} /> {featuredPost.author}
                </span>
              </div>
              <h3>{featuredPost.title}</h3>
              <p>{featuredPost.excerpt}</p>
              <a href={`/blog/${featuredPost.id}`} className="read-more">
                Read More <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="blog-grid">
          {recentPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <img src={post.image} alt={post.title} />
              <div className="blog-content">
                <div className="post-meta">
                  <span>
                    <Calendar size={14} /> {post.date}
                  </span>
                  <span>
                    <User size={14} /> {post.author}
                  </span>
                </div>
                <h4>{post.title}</h4>
                <p>{post.excerpt}</p>
                <a href={`/blog/${post.id}`} className="read-more">
                  Read More <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <button
            className="btn-primary"
            onClick={() => (window.location.href = "/blog")}
          >
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
