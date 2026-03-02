import React, { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";

const Header = ({ menuOpen, toggleMenu, closeMenu }) => {
  const [active, setActive] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["/", "about", "skills", "projects", "contacts"];

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
      {/* <div className="header-topbar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-between">
                <ul className="contact__list d-flex flex-wrap align-items-center list-unstyled mb-0">
                  <li className={isOpen ? "active" : ""}>
                    <button
                      type="button"
                      className={`miniPopup-emergency-trigger ${
                        isOpen ? "active" : ""
                      }`}
                      onClick={togglePopup}
                    >
                      24/7 Emergency
                    </button>

                    <div
                      id="miniPopup-emergency"
                      className={`miniPopup miniPopup-emergency text-center ${
                        isOpen ? "active" : ""
                      }`}
                    >
                      <div className="emergency__icon">
                        <i className="icon-call3"></i>
                      </div>

                      <Link to="tel:01936209467" className="phone__number">
                        <i className="icon-phone"></i>
                        <span>01936209467</span>
                      </Link>

                      <p>
                        Please feel free to contact our friendly reception staff
                        with any general or medical enquiry.
                      </p>

                      <Link
                        to="/appointment"
                        className="btn btn__secondary btn__link btn__block"
                      >
                        <span>Make Appointment</span>
                        <i className="icon-arrow-right"></i>
                      </Link>
                    </div>
                  </li>

                  <li>
                    <i className="icon-phone"></i>
                    <Link to="tel:01936209467">01936209467</Link>
                  </li>
                  <li>
                    <i className="icon-location"></i>
                    <Link to="#">Near Circuit House, Gaital, Kishoreganj</Link>
                  </li>
                  <li>
                    <i className="icon-clock"></i>
                    <Link to="#">SAT - THU : 8:00 am - 10:00 pm</Link>
                  </li>
                </ul>

                <div className="d-flex">
                  <ul className="social-icons list-unstyled mb-0 mr-30">
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-x"></i>
                      </Link>
                    </li>
                  </ul>

                  <form className="header-topbar__search">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                    <button className="header-topbar__search-btn">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- /.header-top --> */}
      <nav className="navbar navbar-expand-lg sticky-navbar">
        <div className="container-fluid">
          <a
            href="/"
            className="navbar-brand"
            onClick={() => {
              setActive("home");
              closeMenu();
            }}
          >
            <img
              src="/images/logo_light.png"
              className="logo-light"
              alt="logo"
            />
            <img src="/images/logo_main.png" className="logo-dark" alt="logo" />
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
            {/* <ul className="navbar-nav ml-auto">
              <li className="nav__item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav__item-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `nav__item-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="/skills"
                  className={({ isActive }) =>
                    `nav__item-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  Skills
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `nav__item-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  Projects
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `nav__item-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav__item d-lg-none d-md-block">
                <NavLink
                  to="/resume"
                  className={({ isActive }) =>
                    `nav__item-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  Resume
                </NavLink>
              </li>
            </ul> */}

            {/* <ul className="navbar-nav ml-auto">
              <li className="nav__item">
                <a href="#home" className="nav__item-link" onClick={closeMenu}>
                  Home
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__item-link" onClick={closeMenu}>
                  About
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#skills"
                  className="nav__item-link"
                  onClick={closeMenu}
                >
                  Skills
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#projects"
                  className="nav__item-link"
                  onClick={closeMenu}
                >
                  Projects
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#contacts"
                  className="nav__item-link"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </li>
            </ul> */}

            <ul className="navbar-nav ml-auto">
              <li className="nav__item">
                <a
                  href="/"
                  className={`nav__item-link ${active === "/" ? "active" : ""}`}
                  onClick={() => {
                    setActive("/");
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


