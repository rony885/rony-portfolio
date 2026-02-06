import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
import { Autoplay } from "swiper/modules"; // ✅ v11+
import "swiper/css";
import "swiper/css/navigation";
import doctorsArray from "../../doctors.js";

const DoctorTeam = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    setDoctors(doctorsArray);
  }, []);

  return (
    <Wrapper
      style={{
        paddingTop: "0",
        paddingBottom: "0",
        marginBottom: "0",
        marginTop: "0",
      }}
    >
      <section
        className="team-layout2"
        style={{
          // paddingTop: "0",
          paddingBottom: "0",
          marginBottom: "0",
          marginTop: "0",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div className="heading text-center mb-40">
                <h3 className="heading__title">MEET OUR CONSULTANTS</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <Swiper
                // modules={[Navigation, Autoplay]}
                modules={[Autoplay]}
                // navigation
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
                {doctors.map((member, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="member">
                      <div className="member__img">
                        <img src={member.img} alt={member.name} />
                      </div>
                      <div className="member__info">
                        <h5 className="member__name">
                          <Link to="doctor-details">{member.name}</Link>
                        </h5>
                        <p className="member__job">{member.job}</p>
                        {/* <p className="member__desc">{member.desc}</p> */}

                        <Link
                          to={`/appointment-doctor/${member.id}`}
                          className="btn btn__primary btn__link btn__rounded w-100 mt-4"
                        >
                          <span>Appointment</span>
                          <i className="icon-arrow-right"></i>
                        </Link>

                        <div className="mt-20 d-flex flex-wrap justify-content-between align-items-center">
                          <Link
                            to="doctor-details"
                            className="btn btn__secondary btn__link btn__rounded"
                          >
                            <span>Read More</span>
                            <i className="icon-arrow-right"></i>
                          </Link>
                          <ul className="social-icons list-unstyled mb-0">
                            <li>
                              <Link to="#" className="facebook">
                                <i className="fab fa-facebook-f"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="twitter">
                                <i className="fab fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="phone">
                                <i className="fas fa-phone-alt"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
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

export default DoctorTeam;
