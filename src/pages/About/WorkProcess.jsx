import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const WorkProcess = () => {
  const processSteps = [
    {
      number: "01",
      icon: "icon-health-report",
      title: "Mission",
      desc: "To become a benchmark of excellence in mental healthcare. To provide affordable, ethical, and patient-centric service. To ensure long-term recovery and relapse prevention",
    },
    {
      number: "02",
      icon: "icon-dna",
      title: "Vision",
      desc: "To be recognized as one of the most trusted mental health and rehabilitation centres in Bangladesh, delivering world-class care with compassion and integrity.",
    },
  ];

  return (
    <Wrapper>
      <section className="work-process pt-130 pb-0 bg-overlay bg-overlay-secondary">
        <div className="container">
          {/* Heading */}
          <div className="row heading-layout2">
            <div className="col-lg-5">
              <h2 className="heading__subtitle color-primary">
                Caring For The Health Of You And Your Family.
              </h2>
              <h3 className="heading__title color-white">
                Why Choose Unity Health Centre?
              </h3>
            </div>

            <div className="col-lg-6 offset-lg-1">
              <ul className="list-items list-items-layout2 list-items-light list-unstyled">
                <li>Experienced Psychiatrists & Specialists</li>
                <li>Evidence-Based Treatment Protocols</li>
                <li>Separate & Secure Units</li>
                <li>Confidential & Ethical Care</li>
                <li>Affordable Treatment Packages</li>
                <li>Family-Centered Recovery Approach</li>
              </ul>
            </div>
          </div>

          <div className="row mt-90">
            {processSteps.map((step, idx) => (
              <div key={idx} className="col-12 col-md-6 mb-4">
                <div className="process-item h-100">
                  <span className="process__number">{step.number}</span>

                  <div className="process__icon">
                    <i className={step.icon}></i>
                  </div>

                  <h4 className="process__title">{step.title}</h4>
                  <p className="process__desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="cta bg-primary">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-2">
                <img
                  src="/assets/images/icons/alert.png"
                  className="cta__img"
                  alt="alert"
                />
              </div>

              <div className="col-md-7">
                <h4 className="cta__title">True Healthcare For Your Family!</h4>
                <p className="cta__desc">
                  Serve the community by improving the quality of life through
                  better health.
                </p>
              </div>

              <div className="col-md-3">
                <Link
                  to="/packages"
                  className="btn btn__secondary btn__secondary-style2 btn__rounded"
                >
                  <span>Our Packages</span>
                  <i className="icon-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 0px;
  padding-bottom: 0px;

  .process-item {
    height: 100%;
  }
`;

export default WorkProcess;
