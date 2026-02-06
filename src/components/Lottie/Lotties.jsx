import React from "react";
import styled from "styled-components";

const Lotties = () => {
  return (
    <Wrapper>
      <div className="send-wrapper">
        <div className="scene">
          <div className="plane"></div>

          <div className="message">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .send-wrapper {
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .scene {
    position: relative;
    width: 180px;
    height: 120px;
  }

  /* BIG plane */
  .plane {
    position: absolute;
    top: 20px;
    left: 40px;
    width: 120px;
    height: 120px;
    background: linear-gradient(135deg, #6c63ff, #9b95ff);
    clip-path: polygon(0 50%, 100% 0, 78% 50%, 100% 100%);
    animation: fly 3s ease-in-out infinite;
    box-shadow: 0 35px 80px rgba(108, 99, 255, 0.4);
  }

  /* SMALL floating message */
  .message {
    position: absolute;
    top: 52px;
    left: 70px;
    width: 34px;
    height: 22px;
    background: #ffffff;
    border-radius: 4px;
    padding: 4px;
    animation: floatMessage 1.8s ease-in-out infinite;
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
  }

  .message span {
    display: block;
    height: 3px;
    background: #6c63ff;
    border-radius: 2px;
    margin-bottom: 3px;
  }

  .message span:last-child {
    width: 70%;
  }

  /* Animations */
  @keyframes fly {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    50% {
      transform: translate(40px, -18px) rotate(6deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }

  @keyframes floatMessage {
    0% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
    50% {
      transform: translateY(-8px) scale(1.05);
      opacity: 0.9;
    }
    100% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }

  /* Responsive */
  @media (max-width: 768px) {
    .scene {
      width: 140px;
      height: 100px;
    }

    .plane {
      width: 90px;
      height: 90px;
      left: 30px;
    }

    .message {
      width: 28px;
      height: 18px;
      left: 58px;
    }
  }
`;

export default Lotties;
