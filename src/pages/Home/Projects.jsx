import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaGithub, FaListUl, FaArrowRight } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { HiOutlineCode } from "react-icons/hi";
import Tooltip from "@mui/material/Tooltip";

import projectArray from "../../projects.js";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [view, setView] = useState("grid"); // 🔥 grid | list

  useEffect(() => {
    setProjects(projectArray);
  }, []);

  return (
    <Wrapper style={{ paddingTop: "0", paddingBottom: "0" }}>
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

          {/* ======= GRID VIEW ======= */}
          {view === "grid" && (
            <div className="row g-4">
              {projects.slice(0, 6).map((project) => (
                <div key={project.id} className="col-md-6 col-lg-4">
                  <div className="project-card h-100">
                    <div className="project-img">
                      <img
                        src={project.image}
                        alt={project.title}
                        // style={{ width: "600px", height: "400px" }}
                      />
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

          {/* ======= LIST VIEW ======= */}
          {view === "list" && (
            <div className="mt-5">
              {projects.slice(0, 6).map((project, index) => (
                <div
                  key={project.id}
                  className={`row align-items-center ${
                    index % 2 ? "flex-lg-row-reverse" : ""
                  }`}
                  style={{ marginBottom: "50px" }}
                >
                  <div className="col-lg-6 mb-4 mb-lg-0">
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
          <div className="text-center" style={{ marginTop: "40px" }}>
            <Link to="/all-project" className="btn btn-violet px-4 py-3">
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
  background: #0f172a;
  color: #fff;

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
