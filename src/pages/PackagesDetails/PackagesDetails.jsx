import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import packagesArray from "../../packages.js";
import doctorsArray from "../../doctors.js";

const PackagesDetails = () => {
  const { id } = useParams();
  const [packages, setPackages] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    setPackages(packagesArray);
  }, []);

  useEffect(() => {
    setDoctors(doctorsArray);
  }, []);

  const findPackages = packages.find((pkg) => pkg.id === parseInt(id));

  return (
    <>
      <section
        className="page-title page-title-layout5"
        style={{
          backgroundImage: "url(/assets/images/backgrounds/6.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="pagetitle__heading">Package Details</h1>

              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/packages">Packages</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Package Details
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="text-block mb-50">
                <div className="post__img w-100 mb-4">
                  <Link to="#">
                    <img
                      src={findPackages && findPackages.img}
                      alt="post imagee"
                      loading="lazy"
                      className=""
                      style={{ height: "500px" }}
                    />
                  </Link>
                </div>
                <h5 className="text-block__title">
                  {findPackages && findPackages.name} (
                  {findPackages && findPackages.job})
                </h5>
                <p className="text-block__desc">
                  {findPackages && findPackages.description}
                </p>
                <p className="text-block__desc">
                  {findPackages && findPackages.accommodation}
                </p>
              </div>

              <div className="pricing-widget-layout3 mb-70">
                <div className="row">
                  <div className="col-md-6">
                    <h5>Includes</h5>
                    <ul className="pricing__list list-unstyled mb-0">
                      {findPackages &&
                        findPackages.includes.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>Excludes</h5>
                    <ul className="pricing__list list-unstyled mb-0">
                      {findPackages &&
                        findPackages.excludes.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>

              <h5>Terms & Conditions</h5>
              <ul className="details-list list-unstyled mb-60">
                {findPackages &&
                  findPackages.terms.map((item, i) => <li key={i}>{item}</li>)}
              </ul>

              <h5>Related Services</h5>
              <ul className="details-list list-unstyled mb-60">
                {findPackages &&
                  findPackages.relatedServices.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
              </ul>

              <section className="contact-layout4 bg-overlay bg-overlay-secondary-gradient pb-50 pb-50">
                <div className="contact-panel mb-0">
                  <form className="contact-panel__form" id="contactForm">
                    <div className="row">
                      <div className="col-sm-12">
                        <h4 className="contact-panel__title">
                          Book An Appointment
                        </h4>
                        <p className="contact-panel__desc mb-30">
                          Please feel welcome to contact our friendly reception
                          staff with any general or medical enquiry. Our doctors
                          will receive or return any urgent calls.
                        </p>
                      </div>

                      <div className="col-sm-6 col-md-6 col-lg-12">
                        <div className="form-group">
                          <i className="icon-user form-group-icon"></i>
                          <select className="form-control">
                            <option value="0">Choose Doctor</option>
                            {doctors.map((doctor) => {
                              return (
                                <option key={doctor.id} value={doctor.id}>
                                  {doctor.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="form-group">
                          <i className="icon-news form-group-icon"></i>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            id="contact-name"
                            name="contact-name"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-sm-4 col-md-4 col-lg-6">
                        <div className="form-group">
                          <i className="icon-phone form-group-icon"></i>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone"
                            id="contact-Phone"
                            name="contact-phone"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-sm-4 col-md-4 col-lg-6">
                        <div className="form-group form-group-date">
                          <i className="icon-calendar form-group-icon"></i>
                          <input
                            type="date"
                            className="form-control"
                            id="contact-date"
                            name="contact-date"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-sm-4 col-md-4 col-lg-6">
                        <div className="form-group form-group-date">
                          <i className="icon-clock form-group-icon"></i>
                          <input
                            type="time"
                            className="form-control"
                            id="contact-time"
                            name="contact-time"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn__primary btn__rounded btn__block btn__xhight mt-10"
                        >
                          <span>Book Appointment</span>
                          <i className="icon-arrow-right"></i>
                        </button>
                        <div className="contact-result"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackagesDetails;
