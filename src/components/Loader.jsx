// import React from "react";

// const Loader = () => {
//   return (
//     <div className="preloader">
//       <div className="loading">
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </div>
//   );
// };

// export default Loader;

import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <Wrapper>
      <div className="preloader">
        <div className="loading-text">
          <span>R</span>
          <span>O</span>
          <span>N</span>
          <span>Y</span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #0f172a;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }

  .loading-text span {
    font-size: 60px;
    font-weight: bold;
    color: #38bdf8;
    margin: 0 6px;
    display: inline-block;
    animation: bounce 1.2s infinite;
  }

  .loading-text span:nth-child(2) {
    animation-delay: 0.2s;
  }
  .loading-text span:nth-child(3) {
    animation-delay: 0.4s;
  }
  .loading-text span:nth-child(4) {
    animation-delay: 0.6s;
  }

  @keyframes bounce {
    0%,
    80%,
    100% {
      transform: translateY(0);
      opacity: 0.6;
    }
    40% {
      transform: translateY(-20px);
      opacity: 1;
    }
  }
`;

export default Loader;
