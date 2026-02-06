import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about-layout5 pt-20">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-5">
            <div className="heading-layout2">
              <h3 className="heading__title mb-80">
                Compassionate Mental Health Care
              </h3>
            </div>

            <div className="map-wrapper mb-50">
              <img src="/assets/images/backgrounds/map.png" alt="map" />

              <div className="tooltip-box">
                <div className="tooltip__icon">
                  <i className="fas fa-plus"></i>
                </div>
                <div className="tooltip__panel">
                  <p className="tooltip__title mb-0">
                    Near Circuit House, Gaital, Kishoreganj, Bangladesh
                  </p>
                </div>
              </div>

              <div className="tooltip-box tooltip-hover-left">
                <div className="tooltip__icon">
                  <i className="fas fa-plus"></i>
                </div>
                <div className="tooltip__panel">
                  <p className="tooltip__title mb-0">
                    Near Circuit House, Gaital, Kishoreganj, Bangladesh
                  </p>
                </div>
              </div>

              <div className="tooltip-box">
                <div className="tooltip__icon">
                  <i className="fas fa-plus"></i>
                </div>
                <div className="tooltip__panel">
                  <p className="tooltip__title mb-0">
                    Near Circuit House, Gaital, Kishoreganj, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1">
            <p className="heading__desc color-secondary font-weight-bold mb-30">
              We work closely with patients to develop personalized psychiatric
              and addiction treatment plans. When needed, we also guide families
              with referrals and continued care support.
            </p>

            <p className="heading__desc mb-30">
              Unity Health Centre is committed to providing ethical,
              confidential, and patient-centered mental healthcare. Our goal is
              to promote healing, dignity, and long-term recovery through
              evidence-based treatment and compassionate support.
            </p>

            <div className="d-flex align-items-center mb-60">
              <Link
                to="/contact"
                className="btn btn__secondary btn__rounded mr-30"
              >
                <i className="fas fa-heart"></i>
                <span> Get Support</span>
              </Link>

              <Link
                to="/about"
                className="btn btn__secondary btn__outlined btn__rounded mr-30"
              >
                More About Us
              </Link>
            </div>

            <ul className="list-items list-items-layout3 list-unstyled">
              <li>
                We conduct comprehensive psychiatric assessments to understand
                mental health conditions and treatment needs.
              </li>
              <li>
                Our experienced psychiatrists, psychologists, and care staff
                manage a wide range of mental health and addiction disorders.
              </li>
              <li>
                We provide continuous care and rehabilitation support, from
                diagnosis to recovery and relapse prevention.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
