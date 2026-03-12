import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaGithub, FaListUl, FaArrowRight } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { HiOutlineCode } from "react-icons/hi";
import Tooltip from "@mui/material/Tooltip";

import projectArray from "../../projects.js";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [view, setView] = useState("grid"); // 🔥 grid | list

  useEffect(() => {
    setProjects(projectArray);
  }, []);

  return (
    <Wrapper style={{ paddingTop: "0", paddingBottom: "0" }}>
      <section
        className="page-title page-title-layout5"
        style={{
          //   backgroundImage: "url(/assets/images/backgrounds/6.jpg)",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   backgroundColor: "#1F2933",
          backgroundColor: "#1D2A4D",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="pagetitle__heading text-white">Projects</h1>

              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/" className="breadcrumb-home">
                      Home
                    </Link>
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

      <section className="projects-section py-5" id="projects">
        <div className="container">
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

          {/* ======== GRID VIEW ======== */}
          {view === "grid" && (
            <div className="row g-4">
              {projects.map((project) => (
                <div key={project.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="project-card h-100">
                    <div className="project-img">
                      <img src={project.image} alt={project.title} />
                      <div className="project-overlay">
                        <Tooltip title="Github" arrow>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="icon-btn"
                          >
                            <FaGithub className="fs-4" />
                          </a>
                        </Tooltip>

                        <Tooltip title="Live Project" arrow>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="icon-btn"
                          >
                            <FiExternalLink className="fs-4" />
                          </a>
                        </Tooltip>
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

          {/* ======== LIST VIEW ======== */}
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
  .breadcrumb-home {
    color: #a78bfa;
    font-weight: 600;
    text-decoration: none;
    position: relative;
    padding: 4px 10px;
    border-radius: 6px;
    animation: homeGlow 1.8s ease-in-out infinite;
    transition: all 0.3s ease;
  }

  /* hover effect */
  .breadcrumb-home:hover {
    background: #7c3aed;
    color: #fff;
    animation: none;
  }

  /* glowing animation */
  @keyframes homeGlow {
    0% {
      box-shadow: 0 0 0px rgba(167, 139, 250, 0.6);
    }
    50% {
      box-shadow: 0 0 12px rgba(167, 139, 250, 0.9);
    }
    100% {
      box-shadow: 0 0 0px rgba(167, 139, 250, 0.6);
    }
  }
`;

export default AllProjects;
