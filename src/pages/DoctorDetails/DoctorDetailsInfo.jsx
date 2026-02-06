import React from "react";
import { Link } from "react-router-dom";

const DoctorDetailsInfo = () => {
  return (
    <section className="pt-120 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4">
            <aside className="sidebar has-marign-right">
              <div className="widget widget-member shifted-top">
                <div className="member mb-0">
                  <div className="member__img">
                    <img src="/assets/images/team/3.jpg" alt="member img" />
                  </div>

                  <div className="member__info">
                    <h5 className="member__name">
                      <Link to="/doctors-single-doctor1">Maria Andaloro</Link>
                    </h5>
                    <p className="member__job">Cardiology Specialist</p>
                    <p className="member__desc">
                      Brian specializes in treating skin, hair, nail, and mucous
                      membrane. He also address cosmetic issues, helping to
                      revitalize the appearance of the skin
                    </p>
                    <div className="mt-20 d-flex flex-wrap justify-content-between align-items-center">
                      <ul className="social-icons list-unstyled mb-0">
                        <li>
                          <Link to="#" className="facebook">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="twitter">
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="phone">
                            <i className="fas fa-phone-alt"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="widget widget-help bg-overlay bg-overlay-primary-gradient">
                <div className="bg-img">
                  <img src="/assets/images/banners/5.jpg" alt="background" />
                </div>
                <div className="widget-content">
                  <div className="widget__icon">
                    <i className="icon-call3"></i>
                  </div>
                  <h4 className="widget__title">Emergency Cases</h4>
                  <p className="widget__desc">
                    Please feel welcome to contact our friendly reception staff
                    with any general or medical enquiry call us.
                  </p>
                  <Link to="tel:+201061245741" className="phone__number">
                    <i className="icon-phone"></i> <span>01061245741</span>
                  </Link>
                </div>
              </div>

              <div className="widget widget-schedule">
                <div className="widget-content">
                  <div className="widget__icon">
                    <i className="icon-charity2"></i>
                  </div>
                  <h4 className="widget__title">Opening Hours</h4>
                  <ul className="time__list list-unstyled mb-0">
                    <li>
                      <span>Monday - Friday</span>
                      <span>8.00 - 7:00 pm</span>
                    </li>
                    <li>
                      <span>Saturday</span>
                      <span>9.00 - 10:00 pm</span>
                    </li>
                    <li>
                      <span>Sunday</span>
                      <span>10.00 - 12:00 pm</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div className="widget widget-reports">
                <Link to="#" className="btn btn__primary btn__block">
                  <i className="icon-pdf-file"></i>
                  <span>2020 Patient Reports</span>
                </Link>
              </div> */}
            </aside>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-8">
            <ul className="details-list list-unstyled mb-60">
              <li>
                <h5 className="details__title">Speciality</h5>
                <div className="details__content">
                  <p className="mb-0">Cardiology</p>
                </div>
              </li>
              <li>
                <h5 className="details__title">Degrees</h5>
                <div className="details__content">
                  <p className="mb-0">M.D. of Medicine</p>
                </div>
              </li>
              <li>
                <h5 className="details__title">Areas of Expertise</h5>
                <div className="details__content">
                  <ul className="list-items list-items-layout2 list-unstyled mb-0">
                    <li>Cardiac Imaging – Non-invasive.</li>
                    <li>Cardiac Rehabilitation and Exercise.</li>
                    <li>Hypertrophic Cardiomyopathy.</li>
                    <li>Inherited Heart Diseases.</li>
                  </ul>
                </div>
              </li>
              <li>
                <h5 className="details__title">Office</h5>
                <div className="details__content">
                  <p className="mb-0">
                    2307 Beverley Rd Brooklyn, New York 11226 United States.
                  </p>
                </div>
              </li>
              <li>
                <h5 className="details__title">University</h5>
                <div className="details__content">
                  <p className="mb-0">Harvard University</p>
                </div>
              </li>
            </ul>

            <div className="fancybox-layout2">
              <div className="row">
                <div className="col-sm-6">
                  <div className="fancybox-item d-flex">
                    <div className="fancybox__icon">
                      <i className="icon-diploma"></i>
                    </div>

                    <div className="fancybox__content">
                      <h4 className="fancybox__title">Edison Awards</h4>
                      <p className="fancybox__desc">
                        Honoring excellence in innovation
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="fancybox-item d-flex">
                    <div className="fancybox__icon">
                      <i className="icon-diploma"></i>
                    </div>

                    <div className="fancybox__content">
                      <h4 className="fancybox__title">Edwin Grant Medal</h4>
                      <p className="fancybox__desc">
                        Research in developmental biology
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="fancybox-item d-flex">
                    <div className="fancybox__icon">
                      <i className="icon-diploma"></i>
                    </div>

                    <div className="fancybox__content">
                      <h4 className="fancybox__title">Robert L. Noble Prize</h4>
                      <p className="fancybox__desc">Canadian Cancer Society</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="fancybox-item d-flex">
                    <div className="fancybox__icon">
                      <i className="icon-diploma"></i>
                    </div>

                    <div className="fancybox__content">
                      <h4 className="fancybox__title">
                        National Prize for Medicine
                      </h4>
                      <p className="fancybox__desc">
                        Chilean Academy of Medicine etc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-block mb-40">
              <h5 className="text-block__title">Medical Education</h5>
            </div>

            <div className="timeline-wrapper mb-60">
              <div className="timeline-item d-flex">
                <span className="timeline__year">2020</span>
                <div className="timeline__body">
                  <h4 className="timeline__title">
                    Royal College of Surgeons of Harvard
                  </h4>
                  <p className="timeline__desc mb-0">
                    We partner with you to enable your technology so that you
                    can focus on your organization’s mission leverage our
                    talent, and creativity to help your business succeed above
                    all your business competitors.
                  </p>
                </div>
              </div>

              <div className="timeline-item d-flex">
                <span className="timeline__year">2015</span>
                <div className="timeline__body">
                  <h4 className="timeline__title">
                    Fellowship, Royal College of Physicians of Harvard
                  </h4>
                  <p className="timeline__desc mb-0">
                    After relocating to Louisiana she served as Director of the
                    Cardiac Catheterization Lab at Regional Medical Center of
                    Acadiana. She was honored by the Medical Association for
                    Physician's Recognition Award from March of 2015 through May
                    2016.
                  </p>
                </div>
              </div>

              <div className="timeline-item d-flex">
                <span className="timeline__year">2015</span>
                <div className="timeline__body">
                  <h4 className="timeline__title">
                    Residency, St. Harvard University Hospital
                  </h4>
                  <p className="timeline__desc mb-0">
                    Dr has also had professional accomplishments at the
                    University of Southern California School of Medicine and
                    Medical Center including Instructor of Medicine, Chief
                    Administrative Fellow, Division of Cardiology University of
                    Southern California.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-block mb-40">
              <h5 className="text-block__title">Doctor’s Skills</h5>
              <p className="text-block__desc mb-20">
                He completed his Internal Medicine Residency at the University
                of Alabama in Birmingham, AL where he was selected as Link Chief
                Internal Medicine Resident. He then went to LSU Medical School
                in New Orleans where he was an Honors Program Graduate and
                finished in the top quartile of his graduating class.
              </p>
            </div>

            <div className="animated-Progressbars mb-60">
              <div className="progress-item">
                <h5 className="progress__title">Cardiac Rehabilitation</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    role="progressbar"
                  >
                    <span className="progress__percentage"></span>
                  </div>
                </div>
              </div>

              <div className="progress-item">
                <h5 className="progress__title">Nuclear Cardiology</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    aria-valuenow="87"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    role="progressbar"
                  >
                    <span className="progress__percentage"></span>
                  </div>
                </div>
              </div>

              <div className="progress-item">
                <h5 className="progress__title">Neurocritical Care</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    aria-valuenow="81"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    role="progressbar"
                  >
                    <span className="progress__percentage"></span>
                  </div>
                </div>
              </div>
            </div>

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
                          <option value="1">Ahmed Abdallah</option>
                          <option value="2">Mahmoud Begha</option>
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
  );
};

export default DoctorDetailsInfo;
