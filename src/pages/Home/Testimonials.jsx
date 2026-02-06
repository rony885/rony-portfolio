import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    id: 1,
    name: "Abdul Karim",
    company: "Patient Family",
    image: "/assets/images/testimonials/thumbs/1.png",
    text: `The doctors and therapists showed deep understanding and
    professionalism throughout the treatment process. Their
    compassionate approach helped our family feel safe, informed,
    and supported during a very difficult time.`,
  },
  {
    id: 2,
    name: "Rahim Uddin",
    company: "Recovered Patient",
    image: "/assets/images/testimonials/thumbs/2.png",
    text: `The medical team provided structured psychiatric care and
    constant monitoring that helped me regain stability. The
    counseling sessions and supportive environment played a major
    role in my recovery journey.`,
  },
  {
    id: 3,
    name: "Sadia Rahman",
    company: "Family Member",
    image: "/assets/images/testimonials/thumbs/3.png",
    text: `Unity Health Centre treated our loved one with dignity and
    respect. The doctors, nurses, and counselors worked together to
    create a clear treatment plan and kept us involved throughout.`,
  },
  {
    id: 4,
    name: "Mahmud Hasan",
    company: "Former Patient",
    image: "/assets/images/testimonials/thumbs/2.png",
    text: `The addiction rehabilitation program was well-structured and
    medically supervised. Therapy sessions helped me understand my
    triggers and develop healthier coping strategies.`,
  },
  {
    id: 5,
    name: "Nusrat Jahan",
    company: "Patient Family",
    image: "/assets/images/testimonials/thumbs/3.png",
    text: `From admission to discharge, the care team maintained
    confidentiality and professionalism. Their guidance and family
    counseling sessions made recovery feel possible and hopeful.`,
  },
];

const Testimonials = () => {
  const leftSwiperRef = useRef(null);
  const rightSwiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="testimonials-layout1 pt-130 pb-80"
      style={{ marginTop: "70px" }}
    >
      <div className="container">
        <div className="testimonials-wrapper">
          <div className="row">
            {/* LEFT AUTHORS SLIDER */}
            <div className="col-lg-5">
              <Swiper
                modules={[Controller]}
                slidesPerView={3}
                spaceBetween={30}
                onSwiper={(swiper) => (leftSwiperRef.current = swiper)}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.activeIndex);
                  rightSwiperRef.current?.slideTo(swiper.activeIndex);
                }}
                className="slider-nav mb-60"
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={item.id}>
                    <div
                      className={`testimonial__meta ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => {
                        setActiveIndex(index);
                        leftSwiperRef.current.slideTo(index);
                        rightSwiperRef.current.slideTo(index);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="testimonial__thmb">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div>
                        <h4 className="testimonial__meta-title">{item.name}</h4>
                        <p className="testimonial__meta-desc">{item.company}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* RIGHT TEXT SLIDER */}
            <div className="col-lg-7">
              <Swiper
                modules={[Controller]}
                slidesPerView={1}
                spaceBetween={30}
                onSwiper={(swiper) => (rightSwiperRef.current = swiper)}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.activeIndex);
                  leftSwiperRef.current?.slideTo(swiper.activeIndex);
                }}
                className="slider-with-navs"
              >
                {testimonials.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="testimonial-item">
                      <h3 className="testimonial__title">“{item.text}”</h3>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Rating */}
              <div className="testimonials__rating">
                <div className="testimonials__rating-inner d-flex align-items-center">
                  <span className="total__rate">4.9</span>
                  <div>
                    <span className="overall__rate">
                      Patient Satisfaction Rating
                    </span>
                    <span>, based on verified feedback.</span>
                  </div>
                </div>
              </div>
            </div>
            {/* END */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
