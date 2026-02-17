// import React from "react";
// import styled from "styled-components";

// const Skills = () => {
//   const skills = [
//     { name: "HTML5", level: "85%", img: "/assets/image/html.png" },
//     { name: "CSS3", level: "75%", img: "/assets/image/css.png" },
//     { name: "JavaScript", level: "50%", img: "/assets/image/js.png" },
//     { name: "React.js", level: "60%", img: "/assets/image/react.png" },
//     { name: "TailwindCSS", level: "80%", img: "/assets/image/tailwind.png" },
//     {
//       name: "DaisyUI",
//       level: "85%",
//       img: "/assets/image/daisyui-icon-Bmt_1nh_.png",
//     },
//     { name: "Next.js", level: "50%", img: "/assets/image/next.png" },
//     { name: "MongoDB", level: "50%", img: "/assets/image/mongodb.png" },
//     { name: "Express.js", level: "40%", img: "/assets/image/expressjs.png" },
//     { name: "Node.js", level: "35%", img: "/assets/image/nodejs.png" },
//     { name: "Firebase", level: "60%", img: "/assets/image/firebase.png" },
//     { name: "GitHub", level: "80%", img: "/assets/image/github.png" },
//     { name: "GitHub", level: "50%", img: "/assets/image/figma.png" },
//   ];

//   return (
//     <section id="skills" className="skills-section py-5">
//       <Wrapper>
//         <div className="container-lg">
//           {/* Title */}
//           <div className="text-center mb-5">
//             <h2 className="display-6 fw-semibold text-secondary">Skills</h2>
//             <div className="skills-divider mx-auto mt-3"></div>
//           </div>

//           {/* Tabs */}
//           <div
//             className="d-flex justify-content-center gap-3 flex-wrap"
//             style={{ marginBottom: "40px" }}
//           >
//             <button className="btn skills-tab active">All</button>
//             <button className="btn skills-tab">Frontend</button>
//             <button className="btn skills-tab">Backend</button>
//             <button className="btn skills-tab">Tools</button>
//           </div>

//           {/* Skills Grid */}
//           <div className="row g-4">
//             {skills.map((skill, index) => (
//               <div key={index} className="col-sm-6 col-lg-4">
//                 <div className="skill-card h-100">
//                   <div className="d-flex align-items-center gap-3 mb-3">
//                     <div className="skill-icon">
//                       <img src={skill.img} alt={skill.name} />
//                     </div>

//                     <div className="flex-grow-1">
//                       <h6 className="mb-1 text-white fw-semibold">
//                         {skill.name}
//                       </h6>
//                       <small className="text-muted">
//                         {skill.level} Proficiency
//                       </small>
//                     </div>
//                   </div>

//                   {/* Progress Bar */}
//                   <div className="progress skill-progress">
//                     <div
//                       className="progress-bar"
//                       style={{ width: skill.level }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Wrapper>
//     </section>
//   );
// };

// const Wrapper = styled.section`
//   .skills-section {
//     max-width: 1200px;
//     margin: auto;
//     font-size: 14px;
//   }

//   /* Divider */
//   .skills-divider {
//     width: 100px;
//     height: 4px;
//     background: linear-gradient(to right, transparent, #a78bfa, transparent);
//   }

//   /* Tabs */
//   .skills-tab {
//     padding: 10px 24px;
//     border-radius: 50px;
//     background: #1f2937;
//     color: #9ca3af;
//     transition: 0.3s ease;
//   }

//   .skills-tab:hover {
//     background: #374151;
//     color: #fff;
//   }

//   .skills-tab.active {
//     background: linear-gradient(to right, #7c3aed, #6366f1);
//     color: #fff;
//     box-shadow: 0 10px 25px rgba(139, 92, 246, 0.5);
//   }

//   /* Skill Card */
//   .skill-card {
//     background: rgba(17, 24, 39, 0.85);
//     padding: 20px;
//     border-radius: 16px;
//     border: 1px solid #374151;
//     transition: 0.4s ease;
//   }

//   .skill-card:hover {
//     border-color: rgba(99, 102, 241, 0.6);
//   }

//   /* Icon */
//   .skill-icon {
//     width: 48px;
//     height: 48px;
//     background: #374151;
//     border-radius: 10px;
//     padding: 8px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   .skill-icon img {
//     width: 100%;
//     height: 100%;
//     object-fit: contain;
//   }

//   /* Progress */
//   .skill-progress {
//     height: 6px;
//     background: #1f2937;
//     border-radius: 50px;
//     overflow: hidden;
//   }

//   .skill-progress .progress-bar {
//     background: linear-gradient(to right, #7c3aed, #6366f1);
//   }
// `;

// export default Skills;

import React, { useState } from "react";
import styled from "styled-components";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");

  const skills = [
    {
      name: "HTML5",
      level: "85%",
      img: "/assets/image/html.png",
      category: "Frontend",
    },
    {
      name: "CSS3",
      level: "75%",
      img: "/assets/image/css.png",
      category: "Frontend",
    },
    {
      name: "JavaScript",
      level: "50%",
      img: "/assets/image/js.png",
      category: "Frontend",
    },
    {
      name: "React.js",
      level: "60%",
      img: "/assets/image/react.png",
      category: "Frontend",
    },
    {
      name: "TailwindCSS",
      level: "80%",
      img: "/assets/image/tailwind.png",
      category: "Frontend",
    },
    {
      name: "DaisyUI",
      level: "85%",
      img: "/assets/image/daisyui-icon-Bmt_1nh_.png",
      category: "Frontend",
    },
    {
      name: "Next.js",
      level: "50%",
      img: "/assets/image/next.png",
      category: "Frontend",
    },

    {
      name: "MongoDB",
      level: "50%",
      img: "/assets/image/mongodb.png",
      category: "Backend",
    },
    {
      name: "Express.js",
      level: "40%",
      img: "/assets/image/expressjs.png",
      category: "Backend",
    },
    {
      name: "Node.js",
      level: "35%",
      img: "/assets/image/nodejs.png",
      category: "Backend",
    },
    {
      name: "Firebase",
      level: "60%",
      img: "/assets/image/firebase.png",
      category: "Backend",
    },

    {
      name: "GitHub",
      level: "80%",
      img: "/assets/image/github.png",
      category: "Tools",
    },
    {
      name: "Figma",
      level: "50%",
      img: "/assets/image/figma.png",
      category: "Tools",
    },
  ];

  // Filter logic
  const filteredSkills =
    activeTab === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="skills-section py-0 mt-0">
      <Wrapper style={{ paddingTop: "0" }}>
        <div className="container-lg">
          {/* Title */}
          <div className="text-center mb-5">
            <h2 className="display-6 fw-semibold text-secondary">Skills</h2>
            <div className="skills-divider mx-auto mt-3"></div>
          </div>

          {/* Tabs */}
          <div
            className="d-flex justify-content-center gap-3 flex-wrap"
            style={{ marginBottom: "40px" }}
          >
            {["All", "Frontend", "Backend", "Tools"].map((tab) => (
              <button
                key={tab}
                className={`btn skills-tab ${
                  activeTab === tab ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="row g-4">
            {filteredSkills.map((skill, index) => (
              <div key={index} className="col-sm-6 col-lg-4">
                <div className="skill-card h-100">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="skill-icon">
                      <img src={skill.img} alt={skill.name} />
                    </div>

                    <div className="flex-grow-1">
                      <h6 className="mb-1 text-white fw-semibold">
                        {skill.name}
                      </h6>
                      <small className="text-muted">
                        {skill.level} Proficiency
                      </small>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="progress skill-progress">
                    <div
                      className="progress-bar"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.section`
  .skills-section {
    max-width: 1200px;
    margin: auto;
    font-size: 14px;
  }

  .skills-divider {
    width: 100px;
    height: 4px;
    background: linear-gradient(to right, transparent, #a78bfa, transparent);
  }

  .skills-tab {
    padding: 10px 24px;
    border-radius: 50px;
    background: #1f2937;
    color: #9ca3af;
    transition: 0.3s ease;
  }

  .skills-tab:hover {
    background: #374151;
    color: #fff;
  }

  .skills-tab.active {
    background: linear-gradient(to right, #7c3aed, #6366f1);
    color: #fff;
    box-shadow: 0 10px 25px rgba(139, 92, 246, 0.5);
  }

  .skill-card {
    background: rgba(17, 24, 39, 0.85);
    padding: 20px;
    border-radius: 16px;
    border: 1px solid #374151;
    transition: 0.4s ease;
  }

  .skill-card:hover {
    border-color: rgba(99, 102, 241, 0.6);
  }

  .skill-icon {
    width: 48px;
    height: 48px;
    background: #374151;
    border-radius: 10px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .skill-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .skill-progress {
    height: 6px;
    background: #1f2937;
    border-radius: 50px;
    overflow: hidden;
  }

  .skill-progress .progress-bar {
    background: linear-gradient(to right, #7c3aed, #6366f1);
  }
`;

export default Skills;
