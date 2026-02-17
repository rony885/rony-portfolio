// import React from "react";
// import { Link } from "react-router-dom";

// const About = () => {
//   return (
//     <section className="about-layout2 pb-0">
//       <div className="container">
//         <div className="row">
//           <div className="col-sm-12 col-md-12 col-lg-7 offset-lg-1">
//             <div className="heading-layout2">
//               <h3 className="heading__title mb-60">
//                 Compassionate Mental Health & Addiction Recovery Care
//               </h3>
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           {/* LEFT SIDE */}
//           <div className="col-sm-12 col-md-12 col-lg-5">
//             <div className="text-with-icon">
//               <div className="text__icon">
//                 <i className="icon-doctor"></i>
//               </div>

//               <div className="text__content">
//                 <p className="heading__desc font-weight-bold color-secondary mb-30">
//                   Unity Health Centre is a specialized mental health,
//                   psychiatric, and addiction treatment hospital committed to
//                   ethical care, confidentiality, and long-term recovery through
//                   evidence-based and holistic treatment approaches.
//                 </p>

//                 <Link
//                   to="/appointment"
//                   className="btn btn__secondary btn__rounded mb-70"
//                 >
//                   <span>Make Appointment</span>
//                   <i className="icon-arrow-right"></i>
//                 </Link>
//               </div>
//             </div>

//             <div className="video-banner-layout2 bg-overlay">
//               <img
//                 src="/assets/images/about/2.jpg"
//                 alt="about"
//                 className="w-100"
//               />

//               <Link
//                 className="video__btn video__btn-white popup-video"
//                 to="https://www.youtube.com/watch?v=nrJtHemSPW4"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <div className="video__player">
//                   <i className="fa fa-play"></i>
//                 </div>
//                 <span className="video__btn-title color-white">
//                   Watch Our Video!
//                 </span>
//               </Link>
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="col-sm-12 col-md-12 col-lg-7">
//             <div className="about__text bg-white">
//               <p className="heading__desc mb-30">
//                 Unity Health Centre is a professional mental health and
//                 addiction treatment hospital dedicated to ethical care,
//                 confidentiality, and long-term recovery. Our experienced team
//                 ensures compassionate treatment following international
//                 standards.
//               </p>

//               <p className="heading__desc mb-30">
//                 Unity Health Centre provides comprehensive psychiatric care,
//                 addiction rehabilitation, and psychological counseling in a safe
//                 and supportive environment. Our multidisciplinary team ensures
//                 personalized treatment plans for every patient, promoting
//                 dignity, healing, and sustainable recovery.
//               </p>

//               <ul className="list-items list-unstyled">
//                 <li>Experienced Psychiatrists & Specialists</li>
//                 <li>Evidence-Based Treatment Protocols</li>
//                 <li>Separate & Secure Units</li>
//                 <li>Confidential & Ethical Care</li>
//                 <li>Affordable Treatment Packages</li>
//                 <li>Family-Centered Recovery Approach</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";
import styled from "styled-components";
import { FaLaptopCode } from "react-icons/fa";
import { BsMortarboard } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="my-0 py-0 text-sm">
      <Wrapper>
        <div className="container-lg">
          <div className="row align-items-center g-5">
            {/* <!-- LEFT IMAGE --> */}
            <div className="col-lg-5 d-none d-lg-flex position-relative justify-content-center ">
              <Link
                to="Elora_Yasmin_CV.pdf"
                download
                className="btn btn-lg position-absolute top-0 end-0 translate-middle-y fw-semibold d-flex align-items-center gap-2 cv-btn text-white"
              >
                My CV
                <FiDownload size={18} strokeWidth={2} />
              </Link>

              <div className="profile-wrapper p-3">
                <img
                  src="/assets/image/rony formal pic.jpg"
                  alt="Elora"
                  className="img-fluid profile-img"
                  style={{ height: "480px" }}
                />
              </div>
            </div>

            {/* <!-- RIGHT CONTENT --> */}
            <div className="col-lg-7 text-center text-lg-start">
              {/* <!-- TITLE --> */}
              <h2 className="display-6 fw-semibold text-secondary">About Me</h2>
              <div className="divider mx-auto mx-lg-0 my-3"></div>

              <p className="text-muted fs-6 px-2 px-lg-0">
                I’m a Frontend Developer who loves turning ideas into clean,
                responsive, and user-focused web experiences. I specialize in
                crafting modern interfaces using React and the MERN stack, and
                I’m also exploring Next.js to enhance performance and
                scalability.
              </p>

              {/* <!-- CARDS --> */}
              <div className="row g-4  mt-4">
                <div className="col-md-6">
                  <div className="card h-100 about-card">
                    <div className="text-primary mb-3">
                      <FaLaptopCode className="fs-4" />
                    </div>
                    <h5 className="fw-semibold text-white">
                      Programming Journey
                    </h5>
                    <p className="small">
                      My programming journey began after I got admitted to
                      honors. Though I started as a fresher, I was lucky to have
                      guidance from my brother. What started as curiosity soon
                      became passion.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card h-100 about-card">
                    <div className="text-primary mb-3">
                      <BsMortarboard className="fs-3" />
                    </div>
                    <h5 className="fw-semibold text-white">
                      Education & Creativity
                    </h5>
                    <p className="small">
                      I’m studying BBA in Accounting at National University of
                      Bangladesh. Alongside studies, I love design, teamwork,
                      sports, and arts & crafts.
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- MOBILE CV BUTTON --> */}
              <div className="text-center mt-4 d-lg-none">
                <Link
                  to="Elora_Yasmin_CV.pdf"
                  download
                  className="btn btn-lg cv-btn text-white"
                >
                  My CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.section`
  .cv-btn {
    background: linear-gradient(to right, #a78bfa, #7c3aed);
    border: none;
    border-radius: 50px;
    box-shadow: 0 8px 20px rgba(139, 92, 246, 0.5);
    color: #111;
  }

  .profile-wrapper {
    background: #374151;
    border-radius: 40px 0 40px 40px;
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
  }

  .profile-img {
    border-radius: 60px 0 40px 40px;
  }

  .divider {
    width: 100px;
    height: 4px;
    background: linear-gradient(to right, transparent, #a78bfa, transparent);
  }

  .about-card {
    background: rgba(17, 24, 39, 0.85);
    border-left: 6px solid #6366f1;
    color: #d1d5db;
    padding: 20px;
    transition: 0.4s ease;
  }

  .about-card:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4);
  }
`;

export default About;
