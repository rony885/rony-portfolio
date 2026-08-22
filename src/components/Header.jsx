import React, { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const Header = ({ menuOpen, toggleMenu, closeMenu }) => {
  const [active, setActive] = useState("/");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActive("home");
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contacts"];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header header-layout1">
      <nav className="navbar navbar-expand-lg sticky-navbar">
        <div className="container-fluid">
          {/* <a
            href="#home"
            className="navbar-brand"
            onClick={() => {
              setActive("home");
              closeMenu();
            }}
          >
            <img
              src="/assets/images/logo/logo-dark.png"
              src="/assets/images/logo/rony logo"
              className="logo-light"
              alt="logo"
            />
            <img
              src="/assets/images/logo/logo-dark.png"
              className="logo-dark"
              alt="logo"
            />
          </a> */}

          {/* <a
            href="#home"
            className="navbar-brand fw-bold fs-2"
            onClick={() => {
              setActive("home");
              closeMenu();
            }}
            style={{ color: "#213360" }}
          >
            Rony<span className="text-primary">Dev</span>
            Rony
          </a> */}
          <a
  href="#home"
  className="navbar-brand"
  onClick={() => {
    setActive("home");
    closeMenu();
  }}
>
  <img
    src="/assets/images/logo/rony-logo.png"
    className="rony-logo"
    alt="Rony Logo"
    style={{ width: "185px", height: "100px"}}
  />
</a>

          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="menu-lines">
              <span></span>
            </span>
          </button>

          <div
            className={`collapse navbar-collapse ${menuOpen ? "menu-opened" : ""}`}
            id="mainNavigation"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav__item">
                <a
                  href="#home"
                  className={`nav__item-link ${active === "home" ? "active" : ""}`}
                  onClick={() => {
                    setActive("home");
                    closeMenu();
                  }}
                >
                  Home
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#about"
                  className={`nav__item-link ${active === "about" ? "active" : ""}`}
                  onClick={() => {
                    setActive("about");
                    closeMenu();
                  }}
                >
                  About
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#skills"
                  className={`nav__item-link ${active === "skills" ? "active" : ""}`}
                  onClick={() => {
                    setActive("skills");
                    closeMenu();
                  }}
                >
                  Skills
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#projects"
                  className={`nav__item-link ${active === "projects" ? "active" : ""}`}
                  onClick={() => {
                    setActive("projects");
                    closeMenu();
                  }}
                >
                  Projects
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#contacts"
                  className={`nav__item-link ${active === "contacts" ? "active" : ""}`}
                  onClick={() => {
                    setActive("contacts");
                    closeMenu();
                  }}
                >
                  Contact
                </a>

                <a
                  href="/Muhammad Rony Mia Resume.pdf"
                  download="Muhammad Rony Mia Resume.pdf"
                  className="btn btn__primary btn__rounded ml-30 d-lg-none d-md-block"
                >
                  <span>Resume</span>
                  <FiDownload size={18} />
                </a>
              </li>
            </ul>

            <button
              onClick={closeMenu}
              className="close-mobile-menu d-block d-lg-none"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="d-none d-xl-flex align-items-center position-relative ml-30">
            <a
              href="/Muhammad Rony Mia Resume.pdf"
              download="Muhammad Rony Mia Resume.pdf"
              className="btn btn__primary btn__rounded ml-30"
            >
              <span>Resume</span>
              <FiDownload size={18} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
