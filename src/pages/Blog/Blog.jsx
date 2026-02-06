import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogsArray from "../../blogs.js";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogsArray);
  }, []);

  return (
    <>
      <section
        className="page-title page-title-layout5 bg-overlay"
        style={{
          backgroundImage: 'url("/assets/images/page-titles/8.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="pagetitle__heading">Blogs</h1>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Blogs
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-grid">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div className="heading text-center mb-40">
                <h3 className="heading__title">Our Blogs</h3>
                <p className="heading__desc">Explore News & Feed</p>
              </div>
            </div>
          </div>

          <div className="row">
            {blogs.map((post) => (
              // <div className="col-sm-12 col-md-6 col-lg-4" key={post.id}>
              <div className="col-sm-12 col-md-6 col-lg-6" key={post.id}>
                <div className="post-item">
                  <div className="post__img">
                    <Link to={`/blog/blog-details/${post.id}`}>
                      <img src={post.img} alt={post.title} loading="lazy" />
                    </Link>
                  </div>

                  <div className="post__body">
                    <div className="post__meta-cat">
                      {post.categories.map((cat, index) => (
                        <Link to="#" key={index}>
                          {cat}
                        </Link>
                      ))}
                    </div>

                    <div className="post__meta d-flex">
                      <span className="post__meta-date">{post.date}</span>
                      <Link
                        className="post__meta-author"
                        to={`/blog/blog-details/${post.id}`}
                      >
                        {post.author}
                      </Link>
                    </div>

                    <h4 className="post__title">
                      <Link to={`/blog/blog-details/${post.id}`}>
                        {post.title.slice(0, 40)}...
                      </Link>
                    </h4>

                    <p className="post__desc">{post.desc1.slice(0, 120)}...</p>
                    <Link
                      to={`/blog/blog-details/${post.id}`}
                      className="btn btn__secondary btn__link btn__rounded"
                    >
                      <span>Read More</span>
                      <i className="icon-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="row d-none">
            <div className="col-12 text-center">
              <nav className="pagination-area">
                <ul className="pagination justify-content-center">
                  <li>
                    <Link className="current" to="#">
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="#">2</Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icon-arrow-right"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
