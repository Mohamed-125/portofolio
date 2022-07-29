import React, { useEffect, useState } from "react";
import img from "./295568274_342993924563817_487156280143050628_n.jpg";
import axios from "axios";
const AboutMe = () => {
  const [info, setInfo] = useState("");

  useEffect(() => {
    axios
      .get("https://62e1cb20e8ad6b66d84f36f9.mockapi.io/info")
      .then((res) => {
        setInfo(res.data[0].info);
      });
  }, []);

  return (
    <section id="about-me" className="aboutMe-section ">
      <div className="aboutMe-div container">
        <img src={img}></img>
        <div className="aboutMe-text-div">
          <h1
            style={{ color: "white", fontSize: "30px", marginBottom: "20px" }}
          >
            I'am <span style={{ color: "#c9afe8" }}>Mohamed Ibrahim</span>
          </h1>
          <p style={{ lineHeight: "1.5", fontSize: "17px" }}>{info}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
