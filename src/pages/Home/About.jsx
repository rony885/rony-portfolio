import React from "react";
import styled from "styled-components";
import { FaLaptopCode } from "react-icons/fa";
import { BsMortarboard } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";

const About = () => {
  return (
    <section id="about" className="my-0 py-0 text-sm">
      <Wrapper>
        <div className="container-lg">
          <div className="row align-items-center g-5">
            {/* <!-- LEFT IMAGE --> */}
            <div className="col-lg-5 d-none d-lg-flex position-relative justify-content-center ">
              <a
                href="/Muhammad Rony Mia Resume.pdf"
                download="Muhammad Rony Mia Resume.pdf"
                className="btn btn-lg position-absolute top-0 end-0 translate-middle-y fw-semibold d-flex align-items-center gap-2 cv-btn text-white"
              >
                My CV
                <FiDownload size={18} strokeWidth={2} />
              </a>

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

              {/* <p className="text-muted fs-6 px-2 px-lg-0">
                I’m a Frontend Developer who loves turning ideas into clean,
                responsive, and user-focused web experiences. I specialize in
                crafting modern interfaces using React and the MERN stack, and
                I’m also exploring Next.js to enhance performance and
                scalability.
              </p> */}

              <p
                className="text-muted fs-6 px-2 px-lg-0"
                style={{ textAlign: "justify" }}
              >
                I’m a Frontend Developer passionate about creating clean,
                responsive, and user-focused web experiences. I build modern
                interfaces with React and develop scalable applications using
                Python and Django, while exploring Next.js to improve
                performance and efficiency.
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
                <a
                  href="/Muhammad Rony Mia Resume.pdf"
                  download="Muhammad Rony Mia Resume.pdf"
                  className="btn btn-lg cv-btn text-white"
                >
                  My CV
                </a>
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
