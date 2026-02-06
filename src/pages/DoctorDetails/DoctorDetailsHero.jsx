
import React from "react";
import { Link } from "react-router-dom";

const DoctorDetailsHero = () => {
  return (
    <section
      className="page-title page-title-layout6"
      style={{
        backgroundImage: "url(/assets/images/backgrounds/7.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-end align-items-center">
            <div className="testimonials__rating mr-30">
              <div className="testimonials__rating-inner d-flex align-items-center">
                <span className="total__rate">4.9</span>
                <div>
                  <span className="overall__rate">Zocdoc Overall Rating</span>
                  <span>, based on 7541 reviews.</span>
                </div>
              </div>
            </div>

            <Link to="/appointment" className="btn btn__white btn__rounded">
              Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetailsHero;
