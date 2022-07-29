import React from "react";
import Nav from "./Nav";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
const Hero = () => {
  return (
    <div>
      <Nav />
      <div className="hero-section">
        <div className="hero-text-div">
          <p>Hi I'am Mohamed Ibrahim</p>
          <h1>Front End Developer</h1>
          <p>I Love Building Amazing Web Applications</p>
          <a href="#projects">
            <button>Take A look On My Work</button>
          </a>
        </div>
        <div className="icons-div">
          <a href="https://wa.me/+201145216278" target="_blank">
            <FaWhatsapp />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mohamed-ibrahim-180517237/"
          >
            <FaLinkedin />
          </a>
          <a target="_blank" href="https://github.com/Mohamed-125">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
