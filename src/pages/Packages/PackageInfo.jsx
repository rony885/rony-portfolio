import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import packagesArray from "../../packages.js";

const PackageInfo = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    setPackages(packagesArray);
  }, []);

  return (
    <>
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
              <h1 className="pagetitle__heading">Packages</h1>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Packages
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="team-layout1 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div className="heading text-center mb-40">
                <h3 className="heading__title">Our Packages</h3>
                <p className="heading__desc">The Best Packages We Offer</p>
              </div>
            </div>
          </div>

          <div className="row">
            {packages.map((member) => (
              <div className="col-sm-6 col-md-4 col-lg-4" key={member.id}>
                <div className="member">
                  <div className="member__img">
                    <img src={member.img} alt={member.name} />
                  </div>

                  <div className="member__info">
                    <h5 className="member__name">
                      <Link to={`/packages/package-details/${member.id}`}>
                        {member.name}
                      </Link>
                    </h5>
                    <p className="member__job">{member.job}</p>
                    <Link
                      to={`/packages/package-details/${member.id}`}
                      className="btn btn__secondary btn__link btn__rounded"
                    >
                      <span>More Details</span>
                      <i className="icon-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="row d-none">
            <div className="col-12 text-center">
              <nav className="pagination-area">
                <ul className="pagination justify-content-center">
                  <li>
                    <Link className="current" to="#">
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="#">2</Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icon-arrow-right"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackageInfo;
