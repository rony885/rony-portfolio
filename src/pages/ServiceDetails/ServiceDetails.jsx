import React from "react";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
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
              <h1 className="pagetitle__heading">Service Details</h1>

              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/services">Services</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Service Details
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section id="content" className="pb-80">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8">
              <div className="text-block mb-50">
                <p className="text-block__desc mb-20 font-weight-bold color-secondary">
                  A neurologist is Link medical doctor with specialized training
                  in diagnosing, treating, and managing disorders of the brain
                  and nervous system including, but not limited to, Alzheimer’s
                  disease, amyotrophic lateral sclerosis (ALS), concussion,
                  epilepsy, migraine, multiple sclerosis, Parkinson’s disease,
                  and stroke.
                </p>
                <div className="video-banner-layout3 bg-overlay mb-50">
                  <img src="assets/images/banners/7.jpg" alt="banner" />
                  <Link
                    className="video__btn video__btn-white popup-video"
                    to="https://www.youtube.com/watch?v=nrJtHemSPW4"
                  >
                    <div className="video__player">
                      <i className="fa fa-play"></i>
                    </div>
                  </Link>
                </div>

                <p className="text-block__desc mb-20">
                  These teams are made up of pathologists – who are either
                  doctors with specialist laboratory training or scientists with
                  specialist clinical training – as well as biomedical
                  scientists and support staff. Doctors, nurses, surgeons and
                  other medical staff look to pathologists and consultant
                  clinical scientists for advice on the nature and seriousness
                  of Link patient’s illness, making sure they get the most
                  appropriate treatment. We will work with you to develop
                  individualised care plans, including management of chronic
                  diseases.
                </p>
                <p className="text-block__desc mb-20">
                  If we cannot assist, we can provide referrals or advice about
                  the type of practitioner you require. We are committed to
                  being the region’s premier healthcare network by providing
                  patient-centered care that inspires clinical and service
                  excellence, making us the first and best choice for our
                  patients, employees, physicians, employers, volunteers and
                  communities.
                </p>
              </div>

              <ul className="list-items list-unstyled mb-60 pl-40">
                <li>
                  If your blood doesn’t clot properly – it’s Link haematologist
                  who will conduct the blood tests, confirm if you have
                  haemophilia, and offer treatment.
                </li>
                <li>
                  When there’s an outbreak of infection in Link hospital, it’s
                  Link medical microbiologist or infection doctor who will
                  advise the infection control teams and work hard to contain
                  it.
                </li>
                <li>
                  For those having trouble getting pregnant – it’s Link
                  reproductive scientist who will investigate, diagnose and,
                  where possible, treat any infertility issues.
                </li>
              </ul>
              <div className="widget-plan mb-60">
                <div className="widget__body">
                  <h5 className="widget__title">Health Care Plans</h5>
                  <p>
                    Our doctors include highly qualified male and female
                    practitioners who come from Link range of backgrounds and
                    bring with Link diversity of skills and special interests.
                    Our administration and support staff all have exceptional
                    people skills and trained to assist you with all medical
                    enquiries.
                  </p>
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <div className="plan__items">
                        <ul className="list-items list-items-layout2 list-unstyled mb-0">
                          <li>Review your medical records.</li>
                          <li>Check and test blood pressure.</li>
                          <li>Run tests such as blood tests.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                      <div className="plan__items">
                        <ul className="list-items list-items-layout2 list-unstyled mb-0">
                          <li>Check and test lung function.</li>
                          <li>Narrowing of the arteries.</li>
                          <li>Other specialized tests.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="widget__footer d-flex flex-wrap justify-content-between align-items-center">
                  <div className="plan__price">
                    $50<span className="period">/Month</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <Link
                      to="#"
                      className="btn btn__secondary btn__rounded mr-30"
                    >
                      <span>Purchase Now</span>{" "}
                      <i className="icon-arrow-right"></i>
                    </Link>
                    <Link to="#" className="btn btn__primary btn__link">
                      <i className="icon-arrow-right icon-filled"></i>
                      <span>Explore Other Plans</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="text-block mb-50">
                <h5 className="text-block__title">Our Core Values</h5>
                <p className="text-block__desc mb-20">
                  Today the hospital is recognised as Link world renowned
                  institution, not only providing outstanding care and
                  treatment, but improving the outcomes for all through Link
                  comprehensive medical research. For over 20 years, our
                  hospital has touched lives of millions of people, and provide
                  care and treatment for the sickest in our community including
                  rehabilitation and aged care.
                </p>
              </div>

              <div className="fancybox-layout1">
                <div className="row">
                  <div className="col-md-6">
                    <div className="fancybox-item d-flex">
                      <div className="fancybox__icon">
                        <i className="icon-heart"></i>
                      </div>

                      <div className="fancybox__content">
                        <h4 className="fancybox__title">Medical Check Ups</h4>
                        <p className="fancybox__desc">
                          Recognised as Link world renowned institution, you can
                          consult any of our doctors by visiting our clinic.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="fancybox-item d-flex">
                      <div className="fancybox__icon">
                        <i className="icon-doctor"></i>
                      </div>

                      <div className="fancybox__content">
                        <h4 className="fancybox__title">Medical Treatment</h4>
                        <p className="fancybox__desc">
                          Free or low cost coverage adults with limited income
                          recognised as Link world renowned institution.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="fancybox-item d-flex">
                      <div className="fancybox__icon">
                        <i className="icon-call3"></i>
                      </div>

                      <div className="fancybox__content">
                        <h4 className="fancybox__title">Emergency Help 24/7</h4>
                        <p className="fancybox__desc">
                          Contact our reception staff with any medical enquiry
                          any time for low cost coverage adults.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="fancybox-item d-flex">
                      <div className="fancybox__icon">
                        <i className="icon-drugs"></i>
                      </div>

                      <div className="fancybox__content">
                        <h4 className="fancybox__title">
                          Research Professionals
                        </h4>
                        <p className="fancybox__desc">
                          All medical aspects practice for family, our reception
                          staff with any medical enquiry any time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-block mb-50">
                <h5 className="text-block__title">Health Tips & Info</h5>
                <p className="text-block__desc mb-20">
                  We help create Link care plan that addresses your specific
                  condition and we are here to answer all of your questions &
                  acknowledge your concerns. Today the hospital is recognised as
                  Link world renowned institution, not only providing
                  outstanding care and treatment, but improving the outcomes.
                </p>
              </div>

              <div id="accordion" className="mb-70">
                <div className="accordion-item opened">
                  <div
                    className="accordion__header"
                    data-toggle="collapse"
                    data-target="#collapse3"
                  >
                    <Link className="accordion__title" to="#">
                      What Payment Methods Are Available?
                    </Link>
                  </div>

                  <div
                    id="collapse3"
                    className="collapse show"
                    data-parent="#accordion"
                  >
                    <div className="accordion__body">
                      <p>
                        With any financial product that you buy, it is important
                        that you know you are getting the best advice from Link
                        reputable company as often
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div
                    className="accordion__header"
                    data-toggle="collapse"
                    data-target="#collapse1"
                  >
                    <Link className="accordion__title" to="#">
                      Which Plan Is Right For Me?
                    </Link>
                  </div>

                  <div
                    id="collapse1"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="accordion__body">
                      <p>
                        With any financial product that you buy, it is important
                        that you know you are getting the best advice from Link
                        reputable company as often
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div
                    className="accordion__header"
                    data-toggle="collapse"
                    data-target="#collapse2"
                  >
                    <Link className="accordion__title" to="#">
                      Do I have to commit to Link contract?
                    </Link>
                  </div>

                  <div
                    id="collapse2"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="accordion__body">
                      <p>
                        With any financial product that you buy, it is important
                        that you know you are getting the best advice from Link
                        reputable company as often
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div
                    className="accordion__header"
                    data-toggle="collapse"
                    data-target="#collapse4"
                  >
                    <Link className="accordion__title" to="#">
                      What if I pick the wrong plan?
                    </Link>
                  </div>

                  <div
                    id="collapse4"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="accordion__body">
                      <p>
                        With any financial product that you buy, it is important
                        that you know you are getting the best advice from Link
                        reputable company as often
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div
                    className="accordion__header"
                    data-toggle="collapse"
                    data-target="#collapse5"
                  >
                    <Link className="accordion__title" to="#">
                      Any contracts or commitments?
                    </Link>
                  </div>

                  <div
                    id="collapse5"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="accordion__body">
                      <p>
                        With any financial product that you buy, it is important
                        that you know you are getting the best advice from Link
                        reputable company as often
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-block mb-50">
                <h5 className="text-block__title">Our Core Values</h5>
                <p className="text-block__desc mb-20">
                  Today the hospital is recognised as Link world renowned
                  institution, not only providing outstanding care and
                  treatment, but improving the outcomes for all through Link
                  comprehensive medical research. For over 20 years, our
                  hospital has touched lives of millions of people, and provide
                  care and treatment for the sickest in our community including
                  rehabilitation and aged care.
                </p>
              </div>

              <div className="row">
                <div className="collg-12 col-md-6">
                  <div className="pricing-widget-layout1 mb-70">
                    <h5 className="pricing__title">
                      Investigations Price List
                    </h5>
                    <ul className="pricing__list list-unstyled mb-0">
                      <li>
                        <span>Umbilical Cord Appearance</span>
                        <span className="price">$50</span>
                      </li>
                      <li>
                        <span>Cardiac Electrophysiology</span>
                        <span className="price">$45</span>
                      </li>
                      <li>
                        <span>Repositioning Techniques</span>
                        <span className="price">$60</span>
                      </li>
                      <li>
                        <span>Geriatric Neurology</span>
                        <span className="price">$65</span>
                      </li>
                      <li>
                        <span>Nuclear Cardiology</span>
                        <span className="price">$40</span>
                      </li>
                      <li>
                        <span>Nuclear Cardiology</span>
                        <span className="price">$55</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="collg-12 col-md-6">
                  <div className="pricing-widget-layout2 mb-70">
                    <h5 className="pricing__title">Treatments Price List</h5>
                    <ul className="pricing__list list-unstyled mb-0">
                      <li>
                        <span>Colonoscopy</span>
                        <span className="price">$50</span>
                      </li>
                      <li>
                        <span>Allergy testing</span>
                        <span className="price">$45</span>
                      </li>
                      <li>
                        <span>Gastroscopy</span>
                        <span className="price">$60</span>
                      </li>
                      <li>
                        <span>Bronchoscopy</span>
                        <span className="price">$65</span>
                      </li>
                      <li>
                        <span>Cardiac Ablation</span>
                        <span className="price">$40</span>
                      </li>
                      <li>
                        <span>Holter monitoring</span>
                        <span className="price">$55</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <section className="team-layout2 pt-0 pb-30">
                <div className="heading mb-40">
                  <h3 className="heading__title">Meet Our Doctors</h3>
                  <p className="heading__desc">
                    Our administration and support staff all have exceptional
                    people skills and trained to assist you with all medical
                    enquiries.
                  </p>
                </div>

                <div
                  className="slick-carousel"
                  data-slick='{"slidesToShow": 3, "slidesToScroll": 1, "autoplay": true, "arrows": false, "dots": false, "responsive": [ {"breakpoint": 992, "settings": {"slidesToShow": 2}}, {"breakpoint": 767, "settings": {"slidesToShow": 1}}, {"breakpoint": 480, "settings": {"slidesToShow": 1}}]}'
                >
                  <div className="member">
                    <div className="member__img">
                      <img src="assets/images/team/1.jpg" alt="member img" />
                    </div>

                    <div className="member__info">
                      <h5 className="member__name">
                        <Link to="doctors-single-doctor1.html">
                          Mike Dooley
                        </Link>
                      </h5>
                      <p className="member__job">Cardiology Specialist</p>
                    </div>
                  </div>

                  <div className="member">
                    <div className="member__img">
                      <img src="assets/images/team/2.jpg" alt="member img" />
                    </div>

                    <div className="member__info">
                      <h5 className="member__name">
                        <Link to="doctors-single-doctor1.html">
                          Dermatologists
                        </Link>
                      </h5>
                      <p className="member__job">Cardiology Specialist</p>
                    </div>
                  </div>

                  <div className="member">
                    <div className="member__img">
                      <img src="assets/images/team/3.jpg" alt="member img" />
                    </div>

                    <div className="member__info">
                      <h5 className="member__name">
                        <Link to="doctors-single-doctor1.html">
                          Maria Andaloro
                        </Link>
                      </h5>
                      <p className="member__job">Pediatrician</p>
                    </div>
                  </div>

                  <div className="member">
                    <div className="member__img">
                      <img src="assets/images/team/4.jpg" alt="member img" />
                    </div>

                    <div className="member__info">
                      <h5 className="member__name">
                        <Link to="doctors-single-doctor1.html">
                          Dupree Black
                        </Link>
                      </h5>
                      <p className="member__job">Urologist</p>
                    </div>
                  </div>

                  <div className="member">
                    <div className="member__img">
                      <img src="assets/images/team/5.jpg" alt="member img" />
                    </div>

                    <div className="member__info">
                      <h5 className="member__name">
                        <Link to="doctors-single-doctor1.html">
                          Markus skar
                        </Link>
                      </h5>
                      <p className="member__job">Laboratory</p>
                    </div>
                  </div>

                  <div className="member">
                    <div className="member__img">
                      <img src="assets/images/team/6.jpg" alt="member img" />
                    </div>

                    <div className="member__info">
                      <h5 className="member__name">
                        <Link to="doctors-single-doctor1.html">
                          Kiano Barker
                        </Link>
                      </h5>
                      <p className="member__job">Pathologist</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4">
              <aside className="sidebar has-marign-left sticky-top">
                <div className="widget widget-services">
                  <h5 className="widget__title">Medical Services</h5>
                  <div className="widget-content">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <Link to="#">
                          <span>Neurology Clinic</span>
                          <i className="icon-arrow-right"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span>Cardiology Clinic</span>
                          <i className="icon-arrow-right"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span>Pathology Clinic</span>
                          <i className="icon-arrow-right"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span>Laboratory Clinic</span>
                          <i className="icon-arrow-right"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span>Pediatric Clinic</span>
                          <i className="icon-arrow-right"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span>Cardiac Clinic</span>
                          <i className="icon-arrow-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="widget widget-help bg-overlay bg-overlay-secondary-gradient">
                  <div className="bg-img">
                    <img src="assets/images/banners/5.jpg" alt="background" />
                  </div>
                  <div className="widget-content">
                    <div className="widget__icon">
                      <i className="icon-call3"></i>
                    </div>
                    <h4 className="widget__title">Emergency Cases</h4>
                    <p className="widget__desc">
                      Please feel welcome to contact our friendly reception
                      staff with any general or medical enquiry call us.
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

                <div className="widget widget-reports">
                  <Link to="#" className="btn btn__primary btn__block">
                    <i className="icon-pdf-file"></i>
                    <span>2020 Patient Reports</span>
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
