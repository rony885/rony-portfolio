import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ContactInfo = () => {
  return (
    <Wrapper style={{ paddingTop: "0", paddingBottom: "0" }}>
      <section className="contact-info py-0">
        <div className="container">
          <div className="row row-no-gutter boxes-wrapper">
            <div className="col-sm-12 col-md-4">
              <div className="contact-box d-flex">
                <div className="contact__icon">
                  <i className="icon-call3"></i>
                </div>
                {/* <!-- /.contact__icon --> */}
                <div className="contact__content">
                  <h2 className="contact__title">Emergency Cases</h2>
                  <p className="contact__desc">
                    Please feel free to contact our friendly reception staff
                    with any general or medical enquiry.
                  </p>
                  <a href="tel:+01936209467" className="phone__number">
                    <i className="icon-phone"></i> <span>01936209467</span>
                  </a>
                </div>
                {/* <!-- /.contact__content --> */}
              </div>
              {/* <!-- /.contact-box --> */}
            </div>
            {/* <!-- /.col-md-4 --> */}
            <div className="col-sm-12 col-md-4">
              <div className="contact-box d-flex">
                <div className="contact__icon">
                  <i className="icon-health-report"></i>
                </div>
                {/* <!-- /.contact__icon --> */}
                <div className="contact__content">
                  <h2 className="contact__title">Doctors Timetable</h2>
                  <p className="contact__desc">
                    Qualified doctors available six days a week, view our
                    timetable to make an appointment.
                  </p>
                  <Link
                    to="/time-table"
                    className="btn btn__white btn__outlined btn__rounded"
                  >
                    <span>View Timetable</span>
                    <i className="icon-arrow-right"></i>
                  </Link>
                </div>
                {/* <!-- /.contact__content --> */}
              </div>
              {/* <!-- /.contact-box --> */}
            </div>
            {/* <!-- /.col-md-4 --> */}
            <div className="col-sm-12 col-md-4">
              <div className="contact-box d-flex">
                <div className="contact__icon">
                  <i className="icon-heart2"></i>
                </div>
                {/* <!-- /.contact__icon --> */}
                <div className="contact__content">
                  <h2 className="contact__title">Opening Hours</h2>
                  <ul className="time__list list-unstyled mb-0">
                    <li>
                      <span>Monday - Friday</span>&nbsp;
                      <span>8.00 - 7:00</span>
                    </li>
                    <li>
                      <span>Saturday</span>
                      <span>9.00 - 10:00</span>
                    </li>
                    <li>
                      <span>Sunday</span>
                      <span>10.00 - 12:00</span>
                    </li>
                  </ul>
                </div>
                {/* <!-- /.contact__content --> */}
              </div>
              {/* <!-- /.contact-box --> */}
            </div>
            {/* <!-- /.col-md-4 --> */}
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container --> */}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default ContactInfo;
