import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import servicesArray from "../../services.js";

const ServiceInfo = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(servicesArray);
  }, []);

  return (
    <Wrapper style={{ paddingTop: "0", paddingBottom: "0" }}>
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
              <h1 className="pagetitle__heading">Services</h1>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Services
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section
        className="services-layout1"
        style={{
          backgroundImage: 'url("/assets/images/backgrounds/2.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div className="heading text-center mb-40">
                <h3 className="heading__title">Our Services</h3>
                <p className="heading__desc">
                  Explore The Best Services We Offer
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {services.map((item, index) => (
              <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
                <div className="service-item">
                  <div className="service__icon">
                    <i className={item.icon}></i>
                    <i className={item.icon}></i>
                  </div>

                  <div className="service__content">
                    <h4 className="service__title fs-5">{item.title}</h4>
                    <p className="service__desc">
                      {item.desc.slice(0, 150)}...
                    </p>

                    <ul className="list-items list-items-layout1 list-unstyled">
                      {item.list.map((li, i) => (
                        <li key={i}>{li}</li>
                      ))}
                    </ul>

                    <Link
                      to="/services/service-details"
                      className="btn btn__secondary btn__outlined btn__rounded"
                    >
                      <span>Read More</span>
                      <i className="icon-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default ServiceInfo;
