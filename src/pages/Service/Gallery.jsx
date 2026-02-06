import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Only Navigation needed for popup
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Gallery = () => {
  const galleryImages = [
    "/assets/images/gallery/1.jpg",
    "/assets/images/gallery/2.jpg",
    "/assets/images/gallery/3.jpg",
    "/assets/images/gallery/4.jpg",
    "/assets/images/gallery/5.jpg",
    "/assets/images/gallery/6.jpg",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Wrapper style={{ marginTop: "0", paddingTop: "50px" }}>
      <section className="gallery pt-0 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Swiper
                modules={[Navigation]}
                slidesPerView={4}
                spaceBetween={20}
                // navigation
                breakpoints={{
                  320: { slidesPerView: 1 },
                  375: { slidesPerView: 1 },
                  425: { slidesPerView: 1 },
                  767: { slidesPerView: 2 },
                  992: { slidesPerView: 2 },
                  1200: { slidesPerView: 4 },
                }}
              >
                {galleryImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <Link
                      className="popup-gallery-item"
                      onClick={() => {
                        setActiveIndex(index);
                        setIsOpen(true);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <img src={img} alt={`gallery img ${index + 1}`} />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
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
              initialSlide={activeIndex}
              navigation
              slidesPerView={1}
              className="popup-swiper"
            >
              {galleryImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`gallery img ${index + 1}`}
                    className="popup-img"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .gallery .popup-gallery-item img {
    width: 100%;
    border-radius: 12px;
    transition: transform 0.3s ease;
  }
  .gallery .popup-gallery-item:hover img {
    transform: scale(1.05);
  }

  /* Popup Overlay */
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
