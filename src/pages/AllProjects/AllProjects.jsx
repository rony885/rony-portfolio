import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaGithub, FaListUl, FaArrowRight } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { HiOutlineCode } from "react-icons/hi";

const projects = [
  {
    id: 1,
    title: "Active Club",
    image: "/assets/image/active-club.jpg",
    description:
      "Active Club is a full-stack sports club management web application that allows users to view and book courts, participate in activities, and stay informed...",
    tech: ["React", "Vite", "Bootstrap", "Express", "MongoDB", "Firebase"],
    github: "https://github.com/your-repo",
    live: "https://your-live-site.com",
  },
  {
    id: 2,
    title: "Job Nest",
    image: "/assets/image/job_nest-mockup-BVeMda7r.png",
    description:
      "Job Nest is a full-stack job portal application that allows users to search jobs, apply online, and manage applications efficiently...",
    tech: ["React", "Vite", "Bootstrap", "Express", "MongoDB", "Firebase"],
    github: "https://github.com/your-repo",
    live: "https://your-live-site.com",
  },
  {
    id: 3,
    title: "Active Club",
    image: "/assets/image/food-mockup.jpg",
    description:
      "Active Club is a full-stack sports club management web application that allows users to view and book courts, participate in activities, and stay informed...",
    tech: ["React", "Bootstrap", "Express", "Firebase"],
    github: "https://github.com/your-repo",
    live: "https://your-live-site.com",
  },
  {
    id: 4,
    title: "Active Club",
    image: "/assets/image/active-club.jpg",
    description:
      "Active Club is a full-stack sports club management web application that allows users to view and book courts, participate in activities, and stay informed...",
    tech: ["React", "Vite", "Bootstrap", "Express", "MongoDB", "Firebase"],
    github: "https://github.com/your-repo",
    live: "https://your-live-site.com",
  },
  {
    id: 5,
    title: "Job Nest",
    image: "/assets/image/job_nest-mockup-BVeMda7r.png",
    description:
      "Job Nest is a full-stack job portal application that allows users to search jobs, apply online, and manage applications efficiently...",
    tech: ["React", "Vite", "Bootstrap", "Express", "MongoDB", "Firebase"],
    github: "https://github.com/your-repo",
    live: "https://your-live-site.com",
  },
  {
    id: 6,
    title: "Active Club",
    image: "/assets/image/food-mockup.jpg",
    description:
      "Active Club is a full-stack sports club management web application that allows users to view and book courts, participate in activities, and stay informed...",
    tech: ["React", "Bootstrap", "Express", "Firebase"],
    github: "https://github.com/your-repo",
    live: "https://your-live-site.com",
  },
];

const AllProjects = () => {
  const [view, setView] = useState("grid"); // 🔥 grid | list

  return (
    <Wrapper style={{ paddingTop: "0", paddingBottom: "0" }}>
      <section
        className="page-title page-title-layout5"
        style={{
          //   backgroundImage: "url(/assets/images/backgrounds/6.jpg)",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   backgroundColor: "#1F2933",
          backgroundColor: "#626e8a18",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="pagetitle__heading text-white">Projects</h1>

              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="/" className="text-white">
                      Home
                    </a>
                  </li>

                  <li
                    className="breadcrumb-item active text-white"
                    aria-current="page"
                  >
                    View All Project
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="content" className="pb-80">
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
                  <img src="/assets/images/banners/7.jpg" alt="banner" />
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
                      <img src="/assets/images/team/1.jpg" alt="member img" />
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
                      <img src="/assets/images/team/2.jpg" alt="member img" />
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
                      <img src="/assets/images/team/3.jpg" alt="member img" />
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
                      <img src="/assets/images/team/4.jpg" alt="member img" />
                    </div>

                    <div className="member__info">
                      <h5 className="member__name">
                        <Link to="/doctors-single-doctor1">Dupree Black</Link>
                      </h5>
                      <p className="member__job">Urologist</p>
                    </div>
                  </div>

                  <div className="member">
                    <div className="member__img">
                      <img src="/assets/images/team/5.jpg" alt="member img" />
                    </div>

                    <div className="member__info">
                      <h5 className="member__name">
                        <Link to="/doctors-single-doctor1">Markus skar</Link>
                      </h5>
                      <p className="member__job">Laboratory</p>
                    </div>
                  </div>

                  <div className="member">
                    <div className="member__img">
                      <img src="/assets/images/team/6.jpg" alt="member img" />
                    </div>

                    <div className="member__info">
                      <h5 className="member__name">
                        <Link to="/doctors-single-doctor1">Kiano Barker</Link>
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
                    <img src="/assets/images/banners/5.jpg" alt="background" />
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
      </section> */}

      <section className="projects-section py-5" id="projects">
        <div className="container">
          {/* ===== Title ===== */}
          <div className="text-center mb-5">
            <h2 className="projects-title">Featured Projects</h2>
            <div className="title-line mx-auto"></div>
          </div>

          {/* ===== View Toggle ===== */}
          <div
            className="d-flex justify-content-center gap-3 flex-wrap"
            style={{ marginBottom: "40px" }}
          >
            <button
              className={`btn ${view === "grid" ? "btn-violet" : "btn-dark-outline"}`}
              onClick={() => setView("grid")}
            >
              <BsFillGrid3X3GapFill />
              &nbsp; Grid View
            </button>

            <button
              className={`btn ${view === "list" ? "btn-violet" : "btn-dark-outline"}`}
              onClick={() => setView("list")}
            >
              <FaListUl />
              &nbsp; List View
            </button>
          </div>

          {/* ================= GRID VIEW ================= */}
          {view === "grid" && (
            <div className="row g-4">
              {projects.map((project) => (
                <div key={project.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="project-card h-100">
                    <div className="project-img">
                      <img src={project.image} alt={project.title} />
                      <div className="project-overlay">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="icon-btn"
                        >
                          <FaGithub />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="icon-btn"
                        >
                          <FiExternalLink />
                        </a>
                      </div>
                    </div>

                    <div className="p-4">
                      <h5 className="project-title">{project.title}</h5>
                      <p className="project-desc">{project.description}</p>

                      <div className="d-flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ================= LIST VIEW ================= */}
          {view === "list" && (
            <div className="mt-5">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`row align-items-center ${
                    index % 2 ? "flex-lg-row-reverse" : ""
                  }`}
                  style={{ marginBottom: "50px" }}
                >
                  <div className="col-lg-6 mb-4 mb-lg-0 mb-4">
                    <div className="project-card">
                      <img src={project.image} alt={project.title} />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div
                      className="icon-circle"
                      style={{ width: "3rem", height: "3rem" }}
                    >
                      <HiOutlineCode size={24} />
                    </div>
                    <h3 className="project-title mb-3">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="mb-3">
                      {project.tech.map((t, i) => (
                        <span key={i} className="project-badge">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex gap-3">
                      <Link
                        to={project.github}
                        className="btn btn-dark"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub />
                        &nbsp; Code
                      </Link>
                      <Link
                        to={project.live}
                        className="btn btn-gradient"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live &nbsp;
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ===== View All ===== */}
          <div className="text-center d-none" style={{ marginTop: "40px" }}>
            <Link to="/projects" className="btn btn-violet px-4 py-3">
              View All Projects &nbsp;
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .page-title .breadcrumb-item a,
  .page-title .breadcrumb-item.active,
  .page-title .breadcrumb-item + .breadcrumb-item::before {
    /* color: #435ba1; */
    color: #ffff;
  }

  background: #0f172a;
  color: #ffff;

  .projects-section {
    background: transparent;
  }

  .projects-title {
    font-size: 40px;
    font-weight: 600;
    color: #9ca3af;
  }

  .title-line {
    width: 96px;
    height: 4px;
    background: linear-gradient(to right, transparent, #a78bfa, transparent);
    margin-top: 12px;
  }
  .project-desc {
    text-align: justify;
  }

  /* Buttons */
  .btn-violet {
    background: linear-gradient(135deg, #7c3aed, #8b5cf6);
    color: #fff;
    border: none;
  }

  .btn-violet:hover {
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.5);
  }

  .btn-dark-outline {
    background: #1f2933;
    color: #9ca3af;
    border: 1px solid #374151;
  }

  .btn-dark-outline:hover {
    background: #374151;
    color: #fff;
  }

  /* Project Card */
  .project-card {
    background: rgba(17, 24, 39, 0.6);
    border: 1px solid #374151;
    border-radius: 16px;
    overflow: hidden;
    transition: 0.3s;
  }

  .project-card:hover {
    border-color: #8b5cf6;
  }

  /* Image */
  .project-img {
    position: relative;
    height: 220px;
    overflow: hidden;
  }

  .project-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }

  .project-card:hover img {
    transform: scale(1.05);
  }

  /* Overlay */
  .project-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      #111827,
      rgba(17, 24, 39, 0.4),
      transparent
    );
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 16px;
    padding-bottom: 20px;
    opacity: 0;
    transition: 0.4s;
  }

  .project-card:hover .project-overlay {
    opacity: 1;
  }

  .icon-btn {
    background: #7c3aed;
    color: #fff;
    padding: 12px;
    border-radius: 50%;
    transition: 0.3s;
  }

  .icon-btn:hover {
    background: #8b5cf6;
    transform: scale(1.1);
  }

  /* Text */
  .project-title {
    color: #fff;
    font-weight: 600;
  }

  .project-desc {
    color: #9ca3af;
    font-size: 14px;
  }

  /* Tech badges */
  .tech-badge {
    background: rgba(55, 65, 81, 0.6);
    color: #d1d5db;
    padding: 6px 14px;
    border-radius: 999px;
    font-size: 12px;
  }

  /* ====== list css ===== */

  body {
    background-color: #0f172a;
    color: #fff;
  }

  .project-card {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    border: 2px solid #374151;
    transition: all 0.4s ease;
  }

  .project-card img {
    width: 100%;
    height: 340px;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .project-card:hover img {
    transform: scale(1.03);
  }

  .project-card:hover {
    border-color: #8b5cf6;
    box-shadow: 0 15px 40px rgba(139, 92, 246, 0.25);
  }

  .project-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .project-card:hover .project-overlay {
    opacity: 1;
  }

  .project-title {
    font-size: 2rem;
    font-weight: 700;
  }

  .project-description {
    color: #cbd5f5;
    line-height: 1.6;
  }

  .project-badge {
    display: inline-block;
    background: #1e293b;
    color: #cbd5f5;
    padding: 4px 10px;
    margin: 4px;
    border-radius: 8px;
    font-size: 14px;
    border: 1px solid #334155;
    transition: 0.3s;
  }

  .project-badge:hover {
    border-color: #8b5cf6;
    color: #d8b4fe;
  }

  .btn-gradient {
    background: linear-gradient(to right, #8b5cf6, #9333ea);
    color: #fff;
    border: none;
  }

  .btn-gradient:hover {
    box-shadow: 0 10px 25px rgba(139, 92, 246, 0.5);
  }

  .icon-circle {
    background: rgba(139, 92, 246, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
  }
`;

export default AllProjects;
