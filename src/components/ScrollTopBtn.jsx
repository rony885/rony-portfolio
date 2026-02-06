import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ScrollTopBtn = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Wrapper style={{ paddingTop: "0", paddingBottom: "0" }}>
      <button
        id="scrollTopBtn"
        className={active ? "actived" : ""}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="fas fa-long-arrow-alt-up"></i>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  #scrollTopBtn {
    position: fixed;
    right: 10px;
    bottom: 30px;
    width: 45px;
    height: 45px;
    opacity: 0;
    z-index: 1000;
    font-size: 18px;
    border-radius: 50%;
    color: #ffffff;
    background-color: #21cdc0;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    border: none;
    cursor: pointer;
  }

  #scrollTopBtn:hover {
    background-color: #222222;
  }

  #scrollTopBtn.actived {
    right: 30px;
    opacity: 1;
  }
`;

export default ScrollTopBtn;
