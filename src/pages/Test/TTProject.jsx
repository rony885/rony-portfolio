import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Active Club",
    image: "/assets/image/active-club-5JPtGbGQ.jpg",
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
    image: "/assets/image/active-club-5JPtGbGQ.jpg",
    description:
      "Active Club is a full-stack sports club management web application that allows users to view and book courts, participate in activities, and stay informed...",
    tech: ["React", "Bootstrap", "Express", "Firebase"],
    github: "https://github.com/your-repo",
    live: "https://your-live-site.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" class="projects-section py-5">
      <Wrapper>
        <div class="container">
          {/* <!-- Title --> */}
          <div class="text-center mb-5">
            <h2 class="projects-title">Featured Projects</h2>
            <div class="title-line mx-auto"></div>
          </div>

          {/* <!-- View Buttons --> */}
          <div class="d-flex justify-content-center gap-3 mb-4 flex-wrap">
            <button class="btn btn-violet d-flex align-items-center gap-2">
              <BsFillGrid3X3GapFill size={18} /> Grid View
            </button>
            <button class="btn btn-dark-outline d-flex align-items-center gap-2">
              <FaListUl size={18} /> List View
            </button>
          </div>

          {/* <!-- Projects Grid --> */}
          {/* <div class="row g-4">
      
            <div class="col-md-6 col-lg-4 d-flex">
              <div class="project-card">
                <div class="project-img">
                  <img
                    src="/assets/image/active-club-5JPtGbGQ.jpg"
                    alt="Active Club"
                  />
                  <div class="project-overlay">
                    <Link to="#" class="icon-btn">
                      <FaGithub size={22} color="#fff" />
                    </Link>
                    <Link to="#" class="icon-btn">
                      <FiExternalLink size={22} color="#fff" />
                    </Link>
                  </div>
                </div>

                <div class="p-4">
                  <h5 class="project-title">Active Club</h5>
                  <p class="project-desc">
                    Active Club is Link full-stack sports club management web
                    application that allows users to view and book courts,
                    participate in activities, and stay informed...
                  </p>

                  <div class="d-flex flex-wrap gap-2">
                    <span class="tech-badge">React</span>
                    <span class="tech-badge">Vite</span>
                    <span class="tech-badge">Bootstrap</span>
                    <span class="tech-badge">Express</span>
                    <span class="tech-badge">MongoDB</span>
                    <span class="tech-badge">Firebase</span>
                  </div>

                  <div className="d-flex gap-3 mt-4 d-lg-none">
                    <a
                      href="https://github.com/your-repo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark-outline w-100 d-flex justify-content-center align-items-center"
                      aria-label="View Code"
                    >
                      View Code &nbsp;
                      <FaGithub size={22} color="#fff" />
                    </a>

                    <a
                      href="https://your-live-site.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-violet w-100 d-flex justify-content-center align-items-center"
                      aria-label="View Live"
                    >
                      View Project &nbsp;
                      <FaArrowRight size={22} color="#fff" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 d-flex">
              <div class="project-card">
                <div class="project-img">
                  <img
                    src="/assets/image/job_nest-mockup-BVeMda7r.png"
                    alt="Active Club"
                  />
                  <div class="project-overlay">
                    <Link to="#" class="icon-btn">
                      <FaGithub size={22} color="#fff" />
                    </Link>
                    <Link to="#" class="icon-btn">
                      <FiExternalLink size={22} color="#fff" />
                    </Link>
                  </div>
                </div>

                <div class="p-4">
                  <h5 class="project-title">Job Nest</h5>
                  <p class="project-desc">
                    Job Nest is Link full-stack sports club management web
                    application that allows users to view and book courts,
                    participate in activities, and stay informed...
                  </p>

                  <div class="d-flex flex-wrap gap-2">
                    <span class="tech-badge">React</span>
                    <span class="tech-badge">Vite</span>
                    <span class="tech-badge">Bootstrap</span>
                    <span class="tech-badge">Express</span>
                    <span class="tech-badge">MongoDB</span>
                    <span class="tech-badge">Firebase</span>
                  </div>

                  <div className="d-flex gap-3 mt-4 d-lg-none">
                    <a
                      href="https://github.com/your-repo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark-outline w-100 d-flex justify-content-center align-items-center"
                      aria-label="View Code"
                    >
                      View Code &nbsp;
                      <FaGithub size={22} color="#fff" />
                    </a>

                    <a
                      href="https://your-live-site.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-violet w-100 d-flex justify-content-center align-items-center"
                      aria-label="View Live"
                    >
                      View Project &nbsp;
                      <FaArrowRight size={22} color="#fff" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 d-flex">
              <div class="project-card">
                <div class="project-img">
                  <img
                    src="/assets/image/active-club-5JPtGbGQ.jpg"
                    alt="Active Club"
                  />
                  <div class="project-overlay">
                    <Link to="#" class="icon-btn">
                      <FaGithub size={22} color="#fff" />
                    </Link>
                    <Link to="#" class="icon-btn">
                      <FiExternalLink size={22} color="#fff" />
                    </Link>
                  </div>
                </div>

                <div class="p-4">
                  <h5 class="project-title">Active Club</h5>
                  <p class="project-desc">
                    Active Club is Link full-stack sports club management web
                    application that allows users to view and book courts,
                    participate in activities, and stay informed...
                  </p>

                  <div class="d-flex flex-wrap gap-2">
                    <span class="tech-badge">React</span>
                    <span class="tech-badge">Bootstrap</span>
                    <span class="tech-badge">Express</span>
                    <span class="tech-badge">Firebase</span>
                  </div>

                  <div className="d-flex gap-3 mt-4 d-lg-none">
                    <a
                      href="https://github.com/your-repo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark-outline w-100 d-flex justify-content-center align-items-center"
                      aria-label="View Code"
                    >
                      View Code &nbsp;
                      <FaGithub size={22} color="#fff" />
                    </a>

                    <a
                      href="https://your-live-site.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-violet w-100 d-flex justify-content-center align-items-center"
                      aria-label="View Live"
                    >
                      View Project &nbsp;
                      <FaArrowRight size={22} color="#fff" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="d-flex justify-content-center"
              style={{
                opacity: 1,
                transform: "none",
                marginBlockStart: "40px",
              }}
            >
              <Link to="/projects">
                <button
                  className="btn btn-violet d-flex align-items-center gap-2 px-4 py-3"
                  tabIndex={0}
                  style={{ transform: "none" }}
                >
                  View All Projects <FaArrowRight />
                </button>
              </Link>
            </div>
          </div> */}

          <div className="row g-4">
            {projects.map((project) => (
              <div key={project.id} className="col-md-6 col-lg-4 d-flex">
                <div className="project-card">
                  <div className="project-img">
                    <img src={project.image} alt={project.title} />

                    <div className="project-overlay">
                      <Link
                        to={project.github}
                        className="icon-btn"
                        target="_blank"
                      >
                        <FaGithub size={22} color="#fff" />
                      </Link>
                      <Link
                        to={project.live}
                        className="icon-btn"
                        target="_blank"
                      >
                        <FiExternalLink size={22} color="#fff" />
                      </Link>
                    </div>
                  </div>

                  <div className="p-4">
                    <h5 className="project-title">{project.title}</h5>

                    <p className="project-desc">{project.description}</p>

                    <div className="d-flex flex-wrap gap-2">
                      {project.tech.map((item, index) => (
                        <span key={index} className="tech-badge">
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Mobile Buttons */}
                    <div className="d-flex gap-3 mt-4 d-lg-none">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-dark-outline w-100 d-flex justify-content-center align-items-center"
                      >
                        View Code &nbsp;
                        <FaGithub size={22} color="#fff" />
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-violet w-100 d-flex justify-content-center align-items-center"
                      >
                        View Project &nbsp;
                        <FaArrowRight size={22} color="#fff" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* View All Button */}
            <div className="d-flex justify-content-center mt-5">
              <Link to="/projects">
                <button className="btn btn-violet d-flex align-items-center gap-2 px-4 py-3">
                  View All Projects <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>

          {/* ===== Project 1 ===== */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="project-card">
                <img
                  src="/assets/image/active-club-5JPtGbGQ.jpg"
                  alt="Active Club"
                />
                <div className="project-overlay"></div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="d-flex align-items-center mb-3">
                <div
                  className="icon-circle"
                  style={{ width: "3rem", height: "3rem" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="project-title">Active Club</h3>
              </div>

              <p className="project-description">
                Active Club is a full-stack sports club management web
                application that allows users to book courts, join activities,
                and receive announcements.
              </p>

              <div className="mb-3">
                <span className="project-badge">React</span>
                <span className="project-badge">Bootstrap</span>
                <span className="project-badge">React Router</span>
                <span className="project-badge">Express</span>
                <span className="project-badge">MongoDB</span>
                <span className="project-badge">Firebase</span>
              </div>

              <div className="d-flex gap-2">
                <a
                  href="https://github.com/Elora21y/active-club"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark"
                >
                  <i className="bi bi-github"></i> View Code
                </a>

                <a
                  href="https://active-club-cb1de.web.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-gradient"
                >
                  View Project <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* ===== Project 2 (Reverse) ===== */}
          <div className="row align-items-center mb-5 flex-lg-row-reverse">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="project-card">
                <img
                  src="/assets/image/job_nest-mockup-BVeMda7r.png"
                  alt="Fresh Alert"
                />
                <div className="project-overlay"></div>
              </div>
            </div>

            <div className="col-lg-6">
              <h3 className="project-title mb-3">Fresh Alert</h3>

              <p className="project-description">
                FreshAlert is a food sharing platform designed to reduce food
                waste by sharing nearly expired food items.
              </p>

              <div className="mb-3">
                <span className="project-badge">React</span>
                <span className="project-badge">Bootstrap</span>
                <span className="project-badge">Vite</span>
                <span className="project-badge">MongoDB</span>
                <span className="project-badge">Firebase</span>
              </div>

              <div className="d-flex gap-2">
                <a
                  href="https://github.com/Elora21y/food-expiry-client"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark"
                >
                  <i className="bi bi-github"></i> View Code
                </a>

                <a
                  href="https://food-expiry-tracker-2b052.web.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-gradient"
                >
                  View Project <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* ===== Project 3 ===== */}
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="project-card">
                <img
                  src="/assets/image/job_nest-mockup-BVeMda7r.png"
                  alt="Job Nest"
                />
                <div className="project-overlay"></div>
              </div>
            </div>

            <div className="col-lg-6">
              <h3 className="project-title mb-3">Job Nest</h3>

              <p className="project-description">
                JobNest is a modern job portal helping job seekers find
                opportunities across multiple companies.
              </p>

              <div className="mb-3">
                <span className="project-badge">React</span>
                <span className="project-badge">Bootstrap</span>
                <span className="project-badge">Firebase</span>
                <span className="project-badge">Vite</span>
              </div>

              <div className="d-flex gap-2">
                <a
                  href="https://github.com/Elora21y/job-nest"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark"
                >
                  <i className="bi bi-github"></i> View Code
                </a>

                <a
                  href="https://jobnest-web.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-gradient"
                >
                  View Project <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <Link to="/projects" className="btn btn-lg btn-primary">
              View All Projects <FaArrowRight />
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.section`
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

export default Projects;
