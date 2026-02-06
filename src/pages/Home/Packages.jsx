import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ v11+
import "swiper/css";
import "swiper/css/navigation";
import packagesArray from "../../packages.js";

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    setPackages(packagesArray);
  }, []);

  return (
    <Wrapper style={{ paddingBottom: "0" }}>
      <section className="team-layout1 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div className="heading text-center mb-40">
                <h3 className="heading__title">Our Packages</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <Swiper
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                spaceBetween={30}
                slidesPerView={3} // default for large screens
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
                {packages.map((member, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="member">
                      <div className="member__img">
                        <img src={member.img} alt={member.name} />
                      </div>
                      <div className="member__info">
                        <h5 className="member__name">
                          <Link to={`/packages/package-details/${member.id}`}>
                            {member.name}
                          </Link>
                        </h5>
                        <p className="member__job">{member.job}</p>

                        <Link
                          to={`/packages/package-details/${member.id}`}
                          className="btn btn__secondary btn__link btn__rounded"
                        >
                          <span>More Details</span>
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

export default Packages;
