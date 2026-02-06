import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ v11+
import "swiper/css";
import "swiper/css/navigation";

const DoctorTeam = () => {
  const members = [
    {
      name: "Mike Dooley",
      job: "Chairman",
      desc: "Muldoone obtained his undergraduate degree in Biomedical Engineering at Tulane University prior to attending St George's University School of Medicine",
      img: "/assets/images/team/1.jpg",
    },
    {
      name: "Dermatologists",
      job: "Managing Director",
      desc: "Brian specializes in treating skin, hair, nail, and mucous membrane. He also address cosmetic issues, helping to revitalize the appearance of the skin",
      img: "/assets/images/team/2.jpg",
    },
    {
      name: "Maria Andaloro",
      job: "Director",
      desc: "Andaloro graduated from medical school and completed 3 years residency program in pediatrics. She passed rigorous exams by the American Board of Pediatrics.",
      img: "/assets/images/team/3.jpg",
    },
    {
      name: "Dupree Black",
      job: "Director",
      desc: "Black diagnose and treat diseases of the urinary tract in both men and women. He also diagnose and treat anything involving the reproductive tract in men.",
      img: "/assets/images/team/4.jpg",
    },
    {
      name: "Markus skar",
      job: "Executive Director",
      desc: "Skar play a very important role in your health care. People working in the clinical laboratory are responsible for conducting tests that provide crucial information.",
      img: "/assets/images/team/5.jpg",
    },
    {
      name: "Kiano Barker",
      job: "Executive Director",
      desc: "Barker help care for patients every day by providing their doctors with the information needed to ensure appropriate care. He also valuable resources for other physicians.",
      img: "/assets/images/team/6.jpg",
    },
  ];

  return (
    <Wrapper style={{ paddingTop: "0", paddingBottom: "0" }}>
      <section className="team-layout2">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div className="heading text-center mb-40">
                <h3 className="heading__title">Meet Our Management Team</h3>
                <p className="heading__desc">
                  Our Administration and Support Staff
                </p>
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
                {members.map((member, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="member">
                      <div className="member__img">
                        <img src={member.img} alt={member.name} />
                      </div>
                      <div className="member__info">
                        <h5 className="member__name">
                          <Link to="#">{member.name}</Link>
                        </h5>
                        <p className="member__job">{member.job}</p>
                        {/* <p className="member__desc">{member.desc}</p> */}
                        <div className="mt-20 flex-wrap justify-content-between align-items-center d-none">
                          <Link
                            to="#"
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
