import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { Autoplay } from "swiper/modules"; // ✅ use /modules
import "swiper/css";
// import "swiper/css/pagination";
import { Link } from "react-router-dom";
import servicesArray from "../../services.js";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(servicesArray);
  }, []);

  return (
    <Wrapper style={{ paddingTop: "0", paddingBottom: "0" }}>
      <section
        className="services-layout1 services-carousel"
        style={{
          backgroundImage: 'url("/assets/images/backgrounds/2.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div className="heading text-center mb-60">
                <h3 className="heading__title">The Best Services We Offer</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <Swiper
                // modules={[Pagination, Autoplay]}
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                spaceBetween={30}
                slidesPerView={3} // default for large screens
                // pagination={{ clickable: true }}
                breakpoints={{
                  0: {
                    slidesPerView: 1, // 320, 375, 425
                  },
                  768: {
                    slidesPerView: 2, // tablets
                  },
                  1024: {
                    slidesPerView: 3, // laptops & desktops (1024, 1440, 2560)
                  },
                }}
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index}>
                    <div className="service-item">
                      <div className="service__icon">
                        <i className={service.icon}></i>
                        <i className={service.icon}></i>
                      </div>
                      <div className="service__content">
                        <h4 className="service__title fs-5">{service.title}</h4>
                        <p className="service__desc">
                          {service.desc.slice(0, 150)}...
                        </p>
                        <ul className="list-items list-items-layout1 list-unstyled">
                          {service.list.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                        <Link
                          to="/services-details"
                          className="btn btn__secondary btn__outlined btn__rounded"
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
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .swiper {
    width: 100%;
  }

  .swiper-slide {
    height: auto;
  }

  .member {
    width: 100%;
  }
`;

export default Services;
