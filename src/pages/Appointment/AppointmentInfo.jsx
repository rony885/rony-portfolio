import React from "react";
import { Link } from "react-router-dom";

const AppointmentInfo = () => {
  return (
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
            <h1 className="pagetitle__heading">Appointment</h1>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Appointment
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentInfo;
