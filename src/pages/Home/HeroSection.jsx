// import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// const HeroSection = () => {
//   return (
//     <section
//       className="page-title page-title-layout1 bg-overlay py-0"
//       id="home"
//     >
//       <Wrapper>
//         <div className="container">
//           <div className="row align-items-center flex-column-reverse flex-lg-row g-5">
//             {/* LEFT CONTENT */}
//             <div className="col-lg-6 text-center text-lg-start">
//               <div className="mb-2">
//                 <h3 className="text-secondary fs-4">Hello! Meet</h3>
//                 <h1 className="hero-name mb-2 d-inline-block">Muhammad Rony</h1>
//                 <div className="hero-role">
//                   Frontend Developer<span className="cursor">|</span>
//                 </div>
//               </div>

//               <p className="text-muted fs-6 fs-lg-5 mt-3">
//                 I am Link Frontend Developer who loves transforming ideas into
//                 clean, responsive, and user-focused web experiences. I enjoy
//                 crafting modern interfaces with React and the MERN stack. And
//                 also exploring Next.js.
//               </p>

//               {/* BUTTONS */}
//               <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mt-4">
//                 <Link
//                   to="#projects"
//                   className="btn btn-outline-primary px-4 rounded view_project"
//                 >
//                   View Projects →
//                 </Link>

//                 <Link
//                   to="/Elora_Yasmin_Resume.pdf"
//                   download
//                   className="btn btn-primary px-4 rounded shadow"
//                 >
//                   Resume ⬇
//                 </Link>
//               </div>

//               {/* SOCIAL ICONS */}
//               <div className="d-flex gap-3 justify-content-center justify-content-lg-start mt-4">
//                 <Link to="#" className="social-icon">
//                   <i className="fab fa-linkedin-in"></i>
//                 </Link>
//                 <Link to="#" className="social-icon">
//                   <i className="fab fa-facebook-f"></i>
//                 </Link>
//                 <Link to="#" className="social-icon">
//                   <i className="fab fa-github"></i>
//                 </Link>
//               </div>
//             </div>

//             {/* RIGHT IMAGE */}

//             <div className="col-lg-6 d-flex justify-content-center">
//               <div className="profile-wrapper">
//                 {/* Animated Borders */}
//                 <div className="border-layer border-1"></div>
//                 <div className="border-layer border-2"></div>

//                 {/* Glow */}
//                 <div className="glow-layer"></div>

//                 <img
//                   src="/assets/image/rony.jpg"
//                   alt="Muhammad Rony"
//                   className="profile-img"
//                 />
//                 <Link to="#contacts" className="btn btn-primary contact-btn">
//                   ✉ Contact Me
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Wrapper>
//     </section>
//   );
// };

// const Wrapper = styled.section`
//   /* Gradient Name */
//   .hero-name {
//     font-size: clamp(2.2rem, 4vw, 3.5rem);
//     font-weight: 700;
//     background: linear-gradient(90deg, #8b5cf6, #c4b5fd, #1d2a4d);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }

//   /* Role Text */
//   .hero-role {
//     font-size: clamp(1.4rem, 3vw, 2.2rem);
//     font-weight: 600;
//     color: #c4b5fd;
//     font-style: italic;
//     text-shadow: 8px 6px 12px rgba(0, 0, 0, 0.8);
//   }

//   .cursor {
//     animation: blink 1s infinite;
//   }

//   @keyframes blink {
//     50% {
//       opacity: 0;
//     }
//   }

//   .view_project {
//     border: 1px solid #6563f1 !important;
//   }

//   /* SOCIAL ICON */
//   .social-icon {
//     width: 42px;
//     height: 42px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 10px;
//     background-color: #1d2a4d;
//     border: 1px solid rgba(139, 92, 246, 0.3);
//     color: #ddd;
//     transition: all 0.3s ease;
//   }

//   .social-icon:hover {
//     box-shadow: 0 8px 20px rgba(139, 92, 246, 0.5);
//     transform: translateY(-2px);
//   }

//   /* IMAGE WRAPPER */
//   .hero-img-wrapper {
//     position: relative;
//     width: 100%;
//     max-width: 460px; /* 👈 controls size on large screens */
//     margin: auto;
//   }

//   .hero-img {
//     width: 100%;
//     height: auto;
//     border-radius: 50%;
//     object-fit: cover;
//   }

//   /* Glow Effect */
//   .hero-img-wrapper::before {
//     content: "";
//     position: absolute;
//     inset: -25px;
//     background: #8b5cf6;
//     filter: blur(70px);
//     opacity: 0.18;
//     border-radius: 50%;
//     z-index: -1;
//   }

//   /* Contact Button */
//   .contact-btn {
//     position: absolute;
//     bottom: -18px;
//     left: 50%;
//     transform: translateX(-50%);
//     border-radius: 50px;
//     padding: 8px 18px;
//     font-size: 0.9rem;
//   }

//   /* MOBILE FIX */
//   @media (max-width: 768px) {
//     .hero-img-wrapper {
//       max-width: 300px;
//     }
//   }

//   /* PROFILE IMAGE CONTAINER */
//   .profile-wrapper {
//     position: relative;
//     width: 100%;
//     max-width: 420px;
//     aspect-ratio: 1 / 1;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     transition: all 0.5s ease;
//   }

//   .profile-wrapper:hover {
//     transform: translateY(-4px);
//   }

//   /* IMAGE */
//   .profile-img {
//     width: 100%;
//     height: 100%;
//     border-radius: 50%;
//     object-fit: cover;
//     z-index: 2;
//   }

//   /* BORDER LAYERS */
//   .border-layer {
//     position: absolute;
//     inset: 0;
//     border-radius: 50%;
//     pointer-events: none;
//   }

//   /* TOP BORDER */
//   .border-1 {
//     border: 3px solid rgba(148, 131, 241, 0.45);
//     transform: scale(1.12);
//     animation: rotateCW 12s linear infinite;
//   }

//   /* BOTTOM BORDER */
//   .border-2 {
//     border: 3px solid rgba(148, 131, 241, 0.35);
//     transform: scale(1.22);
//     animation: rotateCCW 18s linear infinite;
//   }

//   /* GLOW */
//   .glow-layer {
//     position: absolute;
//     inset: -25px;
//     background: #8b5cf6;
//     border-radius: 50%;
//     filter: blur(70px);
//     opacity: 0.15;
//     z-index: 0;
//     animation: pulseGlow 4s ease-in-out infinite;
//   }

//   /* CONTACT BUTTON */
//   .contact-btn {
//     position: absolute;
//     bottom: -18px;
//     left: 50%;
//     transform: translateX(-50%);
//     border-radius: 50px;
//     padding: 8px 18px;
//     font-size: 0.9rem;
//     z-index: 3;
//   }

//   /* ANIMATIONS */
//   @keyframes rotateCW {
//     from {
//       transform: scale(1.12) rotate(0deg);
//     }
//     to {
//       transform: scale(1.12) rotate(360deg);
//     }
//   }

//   @keyframes rotateCCW {
//     from {
//       transform: scale(1.22) rotate(360deg);
//     }
//     to {
//       transform: scale(1.22) rotate(0deg);
//     }
//   }

//   @keyframes pulseGlow {
//     0% {
//       opacity: 0.12;
//     }
//     50% {
//       opacity: 0.22;
//     }
//     100% {
//       opacity: 0.12;
//     }
//   }

//   /* MOBILE */
//   @media (max-width: 768px) {
//     .profile-wrapper {
//       max-width: 300px;
//     }
//   }
// `;

// export default HeroSection;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const roles = [
  "Frontend Developer",
  "Web Developer",
  "React Developer",
  "Full Stack Developer",
];

const HeroSection = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const currentWord = roles[wordIndex];

    const typeEffect = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setText(currentWord.substring(0, text.length + 1));
        setSpeed(100);

        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1200); // pause
        }
      } else {
        // Deleting
        setText(currentWord.substring(0, text.length - 1));
        setSpeed(50);

        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(typeEffect);
  }, [text, isDeleting, wordIndex, speed]);

  return (
    <section
      className="page-title page-title-layout1 bg-overlay py-0"
      id="home"
    >
      <Wrapper>
        <div className="container">
          <div className="row align-items-center flex-column-reverse flex-lg-row g-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-6 text-center text-lg-start">
              <div className="mb-2">
                <h3 className="text-secondary fs-4">Hello! Meet</h3>

                <h1 className="hero-name mb-2 d-inline-block">Muhammad Rony</h1>

                {/* 🔥 Animated Role */}
                <div className="hero-role">
                  {text}
                  <span className="cursor">|</span>
                </div>
              </div>

              {/* <p className="text-muted fs-6 fs-lg-5 mt-3">
                I am a Frontend Developer who loves transforming ideas into
                clean, responsive, and user-focused web experiences. I enjoy
                crafting modern interfaces with React and the MERN stack, and
                also exploring Next.js.
              </p> */}

              <p className="text-muted fs-6 fs-lg-5 mt-3">
                I am a Frontend Developer who loves turning ideas into clean,
                responsive, and user-focused web experiences. I build modern
                interfaces with React and also work as a Full Stack Web
                Developer.
              </p>

              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mt-4">
                <a
                  href="#projects"
                  className="btn btn-outline-primary px-4 rounded view_project"
                >
                  View Projects →
                </a>

                <a
                  href="/Muhammad Rony Mia Resume.pdf"
                  download="Muhammad Rony Mia Resume.pdf"
                  className="btn btn-primary px-4 rounded shadow"
                >
                  Resume ⬇
                </a>
              </div>

              <div className="d-flex gap-3 justify-content-center justify-content-lg-start mt-4">
                <Link
                  to="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link
                  to="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link
                  to="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-github"></i>
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="profile-wrapper">
                <div className="border-layer border-1"></div>
                <div className="border-layer border-2"></div>
                <div className="glow-layer"></div>

                <img
                  src="/assets/image/rony ahamed.jpeg"
                  alt="Muhammad Rony"
                  className="profile-img"
                />

                <a href="#contacts" className="btn btn-primary contact-btn">
                  ✉ Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.section`
  .hero-name {
    font-size: clamp(2.2rem, 4vw, 3.5rem);
    font-weight: 700;
    background: linear-gradient(90deg, #8b5cf6, #c4b5fd, #1d2a4d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-role {
    font-size: clamp(1.4rem, 3vw, 2.2rem);
    font-weight: 600;
    color: #1d2a4d;
    font-style: italic;
    text-shadow: 8px 6px 12px rgba(0, 0, 0, 0.8);
    min-height: 50px;
  }

  .cursor {
    animation: blink 1s infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  .view_project {
    border: 1px solid #6563f1 !important;
  }

  .social-icon {
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: #1d2a4d;
    border: 1px solid rgba(139, 92, 246, 0.3);
    color: #ddd;
    transition: all 0.3s ease;
  }

  .social-icon:hover {
    box-shadow: 0 8px 20px rgba(139, 92, 246, 0.5);
    transform: translateY(-2px);
  }

  .profile-wrapper {
    position: relative;
    width: 100%;
    max-width: 420px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .profile-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    z-index: 2;
  }

  .border-layer {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    pointer-events: none;
  }

  .border-1 {
    border: 3px solid rgba(148, 131, 241, 0.45);
    transform: scale(1.12);
    animation: rotateCW 12s linear infinite;
  }

  .border-2 {
    border: 3px solid rgba(148, 131, 241, 0.35);
    transform: scale(1.22);
    animation: rotateCCW 18s linear infinite;
  }

  .glow-layer {
    position: absolute;
    inset: -25px;
    background: #8b5cf6;
    border-radius: 50%;
    filter: blur(70px);
    opacity: 0.15;
    z-index: 0;
    animation: pulseGlow 4s ease-in-out infinite;
  }

  .contact-btn {
    position: absolute;
    bottom: -18px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50px;
    padding: 8px 18px;
    font-size: 0.9rem;
    z-index: 3;
  }

  @keyframes rotateCW {
    from {
      transform: scale(1.12) rotate(0deg);
    }
    to {
      transform: scale(1.12) rotate(360deg);
    }
  }

  @keyframes rotateCCW {
    from {
      transform: scale(1.22) rotate(360deg);
    }
    to {
      transform: scale(1.22) rotate(0deg);
    }
  }

  @keyframes pulseGlow {
    0% {
      opacity: 0.12;
    }
    50% {
      opacity: 0.22;
    }
    100% {
      opacity: 0.12;
    }
  }

  @media (max-width: 768px) {
    .profile-wrapper {
      max-width: 300px;
    }
  }
`;

export default HeroSection;
