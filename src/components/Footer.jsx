import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Primary */}
      <div className="footer-primary">
        <div className="container">
          <div className="row">
            {/* About */}
            <div className="col-sm-12 col-md-12 col-lg-3">
              <div className="footer-widget-about">
                <img
                  src="/images/logo_light.png"
                  alt="logo"
                  className="mb-30"
                />
                <p className="color-gray" style={{ textAlign: "justify" }}>
                  Unity Health Centre is Link professional mental health and
                  addiction treatment hospital dedicated to ethical care,
                  confidentiality, and long-term recovery. Our experienced team
                  ensures compassionate treatment following international
                  standards.
                </p>
                <Link
                  to="/appointment"
                  className="btn btn__primary btn__primary-style2 btn__link"
                >
                  <span>Make Appointment</span>
                  <i className="icon-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Departments */}
            <div className="col-sm-6 col-md-6 col-lg-2 offset-lg-1">
              <div className="footer-widget-nav">
                <h6 className="footer-widget__title">Quick Links</h6>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/packages">Packages</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/doctors">Our Consultants</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blogs</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Links */}
            <div className="col-sm-6 col-md-6 col-lg-2">
              <div className="footer-widget-nav">
                <h6 className="footer-widget__title">Other Links</h6>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/appointment">Appointment</Link>
                  </li>
                  <li>
                    <Link to="#">Terms</Link>
                  </li>
                  <li>
                    <Link to="#">Conditions</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy</Link>
                  </li>
                  <li>
                    <Link to="#">Policy</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="footer-widget-contact">
                <h6 className="footer-widget__title color-heading">
                  Quick Contacts
                </h6>

                <ul className="contact-list list-unstyled">
                  <li>
                    If you have any questions or need help, feel free to contact
                    our team.
                  </li>
                </ul>

                <ul className="contact__list list-unstyled mb-30 w-bold">
                  <li
                    className="d-flex align-items-center gap-2 mb-1"
                    style={{ color: "#1D2A4D" }}
                  >
                    <span style={{ width: "15px" }}>
                      <i className="icon-phone"></i>
                    </span>
                    <Link
                      className="fw-bold"
                      style={{ color: "#1D2A4D" }}
                      to="tel:01936209467"
                    >
                      01936209467
                    </Link>
                  </li>

                  <li
                    className="d-flex align-items-center gap-2 mb-1"
                    style={{ color: "#1D2A4D" }}
                  >
                    <span style={{ width: "15px" }}>
                      <i
                        className="icon-email"
                        style={{ fontSize: "12px" }}
                      ></i>
                    </span>
                    <Link
                      className="fw-bold"
                      style={{ color: "#1D2A4D" }}
                      to="mailto:info@unityhealthbd.com"
                    >
                      info@unityhealthbd.com
                    </Link>
                  </li>

                  <li
                    className="d-flex align-items-center gap-2 mb-1"
                    style={{ color: "#1D2A4D" }}
                  >
                    <span style={{ width: "15px" }}>
                      <i className="icon-location"></i>
                    </span>
                    <Link
                      className="fw-bold"
                      style={{ color: "#1D2A4D" }}
                      to="#"
                    >
                      Near Circuit House, Gaital, Kishoreganj
                    </Link>
                  </li>

                  <li
                    className="d-flex align-items-center gap-2 mb-1"
                    style={{ color: "#1D2A4D" }}
                  >
                    <span style={{ width: "15px" }}>
                      <i className="icon-clock"></i>
                    </span>
                    <Link
                      className="fw-bold"
                      style={{ color: "#1D2A4D" }}
                      to="#"
                    >
                      SAT - THU : 8:00 am - 10:00 pm
                    </Link>
                  </li>
                </ul>

                <div className="d-flex align-items-center">
                  <Link
                    to="https://www.google.com/maps?ll=24.456752,90.776374&z=20&t=m&hl=bn&gl=BD&mapclient=embed&cid=3887593510894340941"
                    target="_blank"
                    className="btn btn__primary btn__link mr-30"
                  >
                    <i className="icon-arrow-right"></i>
                    <span>Get Directions</span>
                  </Link>

                  <ul className="social-icons list-unstyled mb-0">
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-x"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Secondary */}
      <div className="footer-secondary">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 d-flex justify-content-center align-items-center">
              <span className="fz-14 mr-1 text-center">
                Copyright © 2026{" "}
                <span style={{ color: "#1D2A4D" }}>Unity Health Centre</span>.
                Developed By{" "}
                <Link
                  to="https://www.astrosoftbd.com"
                  target="_blank"
                  className="fz-14"
                  style={{ color: "#1D2A4D" }}
                >
                  ASTROSOFT BD
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
