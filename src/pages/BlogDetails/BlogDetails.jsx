import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import blogsArray from "../../blogs.js";

const BlogDetails = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogsArray);
  }, []);

  const findBlogs = blogs.find((pkg) => pkg.id === parseInt(id));

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
              <h1 className="pagetitle__heading">Blog Details</h1>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/blog">Blogs</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Blog Details
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="blog blog-single pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="post-item mb-0">
                <div className="post__img w-100">
                  <Link to="#">
                    <img
                      src={findBlogs && findBlogs.img}
                      alt="post imagee"
                      loading="lazy"
                      className="w-100"
                      style={{ height: "500px" }}
                    />
                  </Link>
                </div>

                <div className="post__body pb-0">
                  <div className="post__meta-cat">
                    {findBlogs &&
                      findBlogs.categories.map((cat, index) => (
                        <Link to="#" key={index}>
                          {cat}
                        </Link>
                      ))}
                  </div>

                  <div className="post__meta d-flex align-items-center mb-20">
                    <span className="post__meta-date">
                      {findBlogs && findBlogs.date}
                    </span>
                    <Link className="post__meta-author" to="#">
                      {findBlogs && findBlogs.author}
                    </Link>
                  </div>

                  <h1 className="post__title mb-30">
                    {findBlogs && findBlogs.title}
                  </h1>
                  <div className="post__desc">
                    <p>{findBlogs && findBlogs.desc1}</p>
                    <p>{findBlogs && findBlogs.desc2}</p>
                    <p>{findBlogs && findBlogs.desc3}</p>
                    <p>{findBlogs && findBlogs.desc4}</p>
                    <p>{findBlogs && findBlogs.desc5}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
