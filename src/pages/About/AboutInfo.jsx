import React from "react";
import { Link } from "react-router-dom";

const AboutInfo = () => {
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
          <div className="row">
            <div className="col-12">
              <h1 className="pagetitle__heading">About Us</h1>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="about-layout1 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="heading-layout2">
                <h3 className="heading__title mb-40">
                  Compassionate Mental Health & Addiction Recovery Care
                </h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="about__Text">
                <p className="mb-30 text-justify">
                  Unity Health Centre is a specialized mental health,
                  psychiatric, and addiction treatment hospital committed to
                  ethical care, confidentiality, and long-term recovery through
                  evidence-based and holistic treatment approaches.
                </p>
                <p className="mb-30 text-justify">
                  Unity Health Centre is a professional mental health and
                  addiction treatment hospital dedicated to ethical care,
                  confidentiality, and long-term recovery. Our experienced team
                  ensures compassionate treatment following international
                  standards.
                </p>
                <p className="mb-30 text-justify">
                  Unity Health Centre provides comprehensive psychiatric care,
                  addiction rehabilitation, and psychological counseling in a
                  safe and supportive environment. Our multidisciplinary team
                  ensures personalized treatment plans for every patient,
                  promoting dignity, healing, and sustainable recovery.
                </p>
                <div className="d-flex align-items-center mb-30">
                  <Link
                    to="/doctors"
                    className="btn btn__primary btn__outlined btn__rounded mr-30"
                  >
                    Meet Our Consultants
                  </Link>
                  {/* <img
                    src="/assets/images/about/singnture.png"
                    alt="singnture"
                  /> */}
                  <Link
                    to="/appointment"
                    className="btn btn__primary btn__rounded mr-30"
                  >
                    <span>Make Appointment</span>
                    <i className="icon-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="video-banner">
                <img src="/assets/images/about/1.jpg" alt="about" />
                <Link
                  className="video__btn video__btn-white popup-video"
                  to="https://www.youtube.com/watch?v=nrJtHemSPW4"
                >
                  <div className="video__player">
                    <i className="fa fa-play"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutInfo;
