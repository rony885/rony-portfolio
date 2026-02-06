import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import blogsArray from "../../blogs.js";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogsArray);
  }, []);

  return (
    <section className="blog-grid pb-50">
      <div className="container">
        {/* Heading */}
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="heading text-center mb-40">
              <h3 className="heading__title">LATEST BLOGS</h3>
            </div>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {blogs.map((post) => (
            <SwiperSlide key={post.id}>
              <div className="post-item">
                <div className="post__img">
                  <Link to={`/blog/blog-details/${post.id}`}>
                    <img src={post.img} alt={post.title} loading="lazy" />
                  </Link>
                </div>

                <div className="post__body">
                  <div className="post__meta-cat">
                    {post.categories.map((cat, index) => (
                      <Link key={index} to="#">
                        {cat}
                      </Link>
                    ))}
                  </div>

                  <div className="post__meta d-flex">
                    <span className="post__meta-date">{post.date}</span>
                    <Link className="post__meta-author" to="#">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;
