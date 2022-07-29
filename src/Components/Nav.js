import React, { useState } from "react";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const clickHandler = () => {
    setNavOpen((pre) => !pre);
  };
  return (
    <header>
      <div className="container navbar">
        <h3>Mohamed Ibrahim</h3>
        <div
          onClick={clickHandler}
          className={!navOpen ? "hamburger-menu" : "hamburger-menu-close"}
        >
          <span />
          <span />
          <span />
        </div>
        <div className={!navOpen ? "nav-links " : "navOpen"}>
          <a onClick={() => setNavOpen(false)} href="#about-me">
            About Me{" "}
          </a>
          <a onClick={() => setNavOpen(false)} href="#skills">
            Skills
          </a>
          <a onClick={() => setNavOpen(false)} href="#projects">
            My Work
          </a>
          <a onClick={() => setNavOpen(false)} href="#contact-me">
            <button>Contact Me</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
