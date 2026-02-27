import React from "react";
import { FaEnvelope, FaPaperPlane, FaUser, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Lotties from "../../components/Lottie/Lottie.jsx";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contacts" className="py-5">
      <div className="container">
        <div className="row align-items-center justify-content-center g-4">
          {/* LEFT CONTENT */}
          <div className="col-lg-6 text-center text-lg-start">
            <h2 className="fw-bold mb-2 text-primary">Let&apos;s Connect</h2>
            <p className="text-secondary mb-4">
              Feel free to reach out for collaborations or just a friendly chat
            </p>
            <div className="d-flex flex-column gap-3">
              <Link
                to="https://wa.me/017000520885"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center gap-3 p-3 rounded-4 border bg-dark bg-opacity-75 text-decoration-none text-white contact-card"
              >
                <FaWhatsapp size={22} className="text-success" />
                <span>+017000520885</span>
              </Link>

              <Link
                to="mailto:ha2ronyahamed@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center gap-3 p-3 rounded-4 border bg-dark bg-opacity-75 text-decoration-none text-white contact-card"
              >
                <MdEmail size={22} className="text-primary" />
                <span>ha2ronyahamed@gmail.com</span>
              </Link>
            </div>

            <Lotties />
          </div>

          {/* RIGHT IMAGE / ANIMATION */}
          <div className="col-lg-5 text-center">
            <form className="bg-dark bg-opacity-75 p-4 p-md-5 rounded-4 border border-secondary shadow">
              <h3 className="text-white fw-semibold fs-5 mb-4">
                Send a Message
              </h3>

              <div className="mb-3">
                <label className="form-label text-secondary w-100 d-block text-start">
                  Your Name
                </label>
                <div className="position-relative">
                  <FaUser className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" />
                  <input
                    type="text"
                    name="name"
                    required
                    className="form-control bg-black text-white ps-5 border-secondary rounded-4"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label text-secondary w-100 d-block text-start">
                  Your Email
                </label>
                <div className="position-relative">
                  <FaEnvelope className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" />
                  <input
                    type="email"
                    name="email"
                    required
                    className="form-control bg-black text-white ps-5 border-secondary rounded-4"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label text-secondary w-100 d-block text-start">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell me about your project..."
                  className="form-control bg-black text-white border-secondary"
                />
              </div>

              <button
                type="submit"
                className="btn w-100 text-white d-flex align-items-center justify-content-center gap-2"
                style={{
                  background: "linear-gradient(90deg, #7c3aed, #8b5cf6)",
                  border: "none",
                }}
              >
                Send Message <FaPaperPlane size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
