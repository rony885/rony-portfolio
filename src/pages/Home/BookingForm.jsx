const BookingForm = () => {
  return (
    <section className="contact-layout3 bg-overlay bg-overlay-primary-gradient pb-60">
      <div className="container">
        <div className="row">
          {/* LEFT FORM */}
          <div className="col-sm-12 col-md-12 col-lg-7">
            <div className="contact-panel mb-50">
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

                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                      <i className="icon-widget form-group-icon"></i>
                      <select className="form-control">
                        <option value="0">Choose Clinic</option>
                        <option value="1">Pathology Clinic</option>
                        <option value="2">Pathology Clinic</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-6 col-lg-6">
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
                        required
                      />
                    </div>
                  </div>

                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <div className="form-group">
                      <i className="icon-phone form-group-icon"></i>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <div className="form-group form-group-date">
                      <i className="icon-calendar form-group-icon"></i>
                      <input type="date" className="form-control" required />
                    </div>
                  </div>

                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <div className="form-group form-group-date">
                      <i className="icon-clock form-group-icon"></i>
                      <input type="time" className="form-control" required />
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn__secondary btn__rounded btn__block btn__xhight mt-10"
                    >
                      <span>Book Appointment</span>
                      <i className="icon-arrow-right"></i>
                    </button>
                    <div className="contact-result"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-sm-12 col-md-12 col-lg-5">
            <div className="heading heading-light mb-30">
              <h3 className="heading__title mb-30">
                Supporting Mental Health & Recovery
              </h3>
              <p className="heading__desc">
                Our team is committed to making every interaction respectful,
                clear, supportive, and compassionate.
              </p>
            </div>

            <div className="d-flex align-items-center">
              <a href="/contact" className="btn btn__white btn__rounded mr-30">
                <i className="fas fa-heart"></i>
                <span> Get Support</span>
              </a>

              <a
                className="video__btn video__btn-white popup-video"
                href="https://www.youtube.com/watch?v=nrJtHemSPW4"
              >
                <div className="video__player">
                  <i className="fa fa-play"></i>
                </div>
                <span className="video__btn-title color-white">
                  Watch Video
                </span>
              </a>
            </div>

            <div className="text__block">
              <p className="text__block-desc color-white font-weight-bold">
                We provide ethical psychiatric care guided by medical standards
                and compassion. We support addiction recovery through structured
                treatment and therapy programs. We help individuals and families
                build stability, healing, and long-term wellness.
              </p>

              <div className="sinature color-white">
                <span className="font-weight-bold">Unity Health Centre</span>
                <span>, Management Team</span>
              </div>
            </div>

            <div className="">{/* <button>Button</button> */}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
