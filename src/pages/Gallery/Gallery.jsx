import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const galleryImages = [
  { id: 1, img: "/assets/images/gallery/1.jpg", name: "Reception Area" },
  { id: 2, img: "/assets/images/gallery/2.jpg", name: "Consultation Room" },
  { id: 3, img: "/assets/images/gallery/3.jpg", name: "Patient Room" },
  { id: 4, img: "/assets/images/gallery/4.jpg", name: "Therapy Room" },
  { id: 5, img: "/assets/images/gallery/5.jpg", name: "Outdoor Area" },
  { id: 6, img: "/assets/images/gallery/6.jpg", name: "Reception Area" },
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openPopup = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <section
        className="page-title page-title-layout5 bg-overlay bg-img"
        style={{
          backgroundImage: 'url("/assets/images/page-titles/8.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <h1 className="pagetitle__heading">Gallery</h1>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">Gallery</li>
            </ol>
          </nav>
        </div>
      </section>

      <Wrapper>
        <section className="gallery-layout2">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
                <div className="heading text-center mb-40">
                  <h3 className="heading__title">Our Gallery</h3>
                  <p className="heading__desc">
                    Explore Our Images, Videos & Clients
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              {galleryImages.map(({ id, img, name }, index) => (
                <div className="col-sm-6 col-md-4 col-lg-4" key={id}>
                  <div className="gallery-card">
                    <div
                      className="gallery-img"
                      onClick={() => openPopup(index)}
                    >
                      <span className="popup-gallery-item">
                        <i className="fas fa-eye text-dark"></i>
                      </span>
                      <img src={img} alt={`Gallery ${id}`} />
                    </div>

                    <h5 className="member__name">
                      <Link to="#" className="text-dark">
                        {name}
                      </Link>
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popup Slider */}
          {isOpen && (
            <div className="popup-overlay">
              <button className="popup-close" onClick={() => setIsOpen(false)}>
                ×
              </button>

              <Swiper
                modules={[Navigation]}
                navigation
                initialSlide={activeIndex}
                slidesPerView={1}
                className="popup-swiper"
              >
                {galleryImages.map(({ img, name }, index) => (
                  <SwiperSlide key={index}>
                    <img src={img} alt={name} className="popup-img" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  padding-top: 0px;
  padding-bottom: 0px;

  .gallery-card {
    margin-bottom: 30px;
    text-align: center;
  }

  .gallery-img {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: 12px;
  }

  .gallery-img img {
    width: 100%;
    transition: transform 0.4s ease;
    border-radius: 12px;
  }

  .gallery-img:hover img {
    transform: scale(1.05);
  }

  .popup-gallery-item {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 2;
  }

  .gallery-img:hover .popup-gallery-item {
    opacity: 1;
  }

  .popup-gallery-item i {
    color: #fff;
    font-size: 30px;
  }

  .member__name {
    margin-top: 12px;
    font-size: 16px;
    font-weight: 600;
  }

  .member__name a {
    text-decoration: none;
    color: #222;
  }

  .member__name a:hover {
    color: var(--color-primary);
  }

  /* Popup Overlay */
  .popup-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.9);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
  }

  .popup-close {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 40px;
    color: #fff;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 10000;
  }

  .popup-swiper {
    width: 80%;
    max-width: 900px;
  }

  .popup-img {
    width: 100%;
    border-radius: 12px;
  }
`;

export default Gallery;
