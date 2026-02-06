import React from "react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <section className="contact-layout1 pt-0 mt--100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-panel d-flex flex-wrap">
              {/* Contact Form */}
              <form className="contact-panel__form" id="contactForm">
                <div className="row">
                  <div className="col-sm-12">
                    <h4 className="contact-panel__title">How Can We Help?</h4>
                    <p className="contact-panel__desc mb-30">
                      Please feel welcome to contact our friendly reception
                      staff with any general or medical enquiry. Our doctors
                      will receive or return any urgent calls.
                    </p>
                  </div>

                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                      <i className="icon-user form-group-icon"></i>
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

                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                      <i className="icon-email form-group-icon"></i>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        id="contact-email"
                        name="contact-email"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                      <i className="icon-phone form-group-icon"></i>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        id="contact-phone"
                        name="contact-phone"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                      <i className="icon-news form-group-icon"></i>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        id="contact-subject"
                        name="contact-subject"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <i className="icon-alert form-group-icon"></i>
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        id="contact-message"
                        name="contact-message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn__secondary btn__rounded btn__block btn__xhight mt-10"
                    >
                      <span>Submit Request</span>
                      <i className="icon-arrow-right"></i>
                    </button>
                    <div className="contact-result"></div>
                  </div>
                </div>
              </form>

              {/* Contact Info Panel */}
              <div className="contact-panel__info d-flex flex-column justify-content-between bg-overlay bg-overlay-primary-gradient">
                <div className="bg-img">
                  <img src="/assets/images/banners/1.jpg" alt="banner" />
                </div>
                <div>
                  <h4 className="contact-panel__title color-white">
                    Quick Contacts
                  </h4>
                  <p className="contact-panel__desc font-weight-bold color-white mb-30">
                    Please feel free to contact our friendly staff with any
                    medical enquiry.
                  </p>
                </div>
                <div>
                  <ul className="contact__list list-unstyled mb-30">
                    <li>
                      <i className="icon-phone"></i>
                      <Link to="tel:01936209467">01936209467</Link>
                    </li>
                    <li>
                      <i
                        className="icon-email"
                        style={{ fontSize: "12px" }}
                      ></i>
                      <Link to="mailto:info@unityhealthbd.com">
                        info@unityhealthbd.com
                      </Link>
                    </li>

                    <li>
                      <i className="icon-location"></i>
                      <Link to="#">
                        Near Circuit House, Gaital, Kishoreganj
                      </Link>
                    </li>
                    <li>
                      <i className="icon-clock"></i>
                      <Link to="#">SAT - THU : 8:00 am - 10:00 pm</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
