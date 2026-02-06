import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  // Array of feature items
  const featureItems = [
    {
      title: "Introduction",
      icon: "icon-heart",
      desc: "Over the past two decades, mental illness and substance abuse have increased significantly, affecting individuals, families, and communities across Bangladesh. Unity Health Centre was established to respond to this growing need by delivering professional, ethical, and compassionate mental healthcare services focused on long-term recovery and well-being.",
    },
    {
      title: "Objectives",
      icon: "icon-doctor",
      desc: "Unity Health Centre aims to provide high-quality psychiatric and addiction treatment through medical, psychological, and holistic care approaches. Our objectives include supporting sustainable recovery, reducing stigma surrounding mental illness, and empowering patients and families through education, guidance, and continuous emotional support.",
    },
    {
      title: "Excellence",
      icon: "icon-ambulance",
      desc: "Unity Health Centre maintains excellence by following international standards of treatment and care. Our services are delivered by qualified psychiatrists, psychologists, addiction counselors, trained nurses, and skilled attendants, supported by secure inpatient facilities and comprehensive holistic wellness programs.",
    },
  ];

  return (
    <section
      className="features-layout1 pt-130 pb-50 mt--90"
      style={{
        backgroundImage: 'url("/assets/images/backgrounds/1.jp")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="container">
        <div className="row">
          {featureItems.map((item, index) => (
            <div key={index} className="col-sm-6 col-md-6 col-lg-4">
              <div className="feature-item">
                <div className="feature__content">
                  <div className="feature__icon">
                    <i className={item.icon}></i>
                    <i className={`${item.icon} feature__overlay-icon`}></i>
                  </div>
                  <h4 className="feature__title mb-4 fs-3">{item.title}</h4>
                  <p className="service__desc" style={{ textAlign: "justify" }}>
                    {item.desc}
                  </p>
                </div>

                <Link to="#" className="btn__link">
                  <i className="icon-arrow-right icon-outlined"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
