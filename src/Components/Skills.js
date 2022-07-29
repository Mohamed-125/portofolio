import React, { useEffect, useState } from "react";
import axios from "axios";
const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get("https://62e1cb20e8ad6b66d84f36f9.mockapi.io/skills")
      .then((res) => {
        setSkills(res.data);
      });
  }, []);

  return (
    <section id="skills" className="skills-section">
      <h1
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "30px",
          marginBottom: "20px",
        }}
      >
        Skills
      </h1>
      <div className="skills-grid container">
        {skills.map((skill) => (
          <div className="skills-div">
            <img src={skill.img} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
