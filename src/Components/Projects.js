import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [value, setValue] = useState("all");
  useEffect(() => {
    function fetchProjects() {
      axios
        .get("https://62e1cb20e8ad6b66d84f36f9.mockapi.io/projects")
        .then((res) => {
          setProjects(res.data);
        });
    }
    fetchProjects();

    document.querySelectorAll(".option-button").forEach((option) => {
      option.addEventListener("click", (e) => {
        document.querySelectorAll(".option-button").forEach((option) => {
          option.classList.remove("option-button-active");
        });
        e.target.classList.add("option-button-active");
        setValue(e.target.innerText.toLowerCase());
      });
    });
  }, []);

  useEffect(() => {
    if (value === "all") {
      setFilteredProjects(projects);
    } else if (value) {
      setFilteredProjects(
        projects.filter((project) => project.sorting.includes(value))
      );
    }
  }, [value, projects]);

  useEffect(() => {
    console.log(filteredProjects);
  }, [filteredProjects]);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-div container">
        <h1
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "30px",
            marginBottom: "20px",
          }}
        >
          My Work
        </h1>
        <div className="options-div">
          <button className="option-button-active option-button">All</button>
          <button className="option-button">Redux</button>
          <button className="option-button">Sass</button>
          <button className="option-button">Tailwind</button>
          <button className="option-button">React js</button>
          <button className="option-button">Apis</button>
        </div>
        <motion.div layout className="projects-container">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div layout className="project-div" key={project.id}>
                <img src={project.img}></img>
                {/* <div className="project-info">
                  <h2>{project.name}</h2>
                  <p style={{ color: " #b3bbc9" }}>{project.desc}</p>
                  <div className="buttons-div">
                    <a href={project.preview} target="_blank">
                      <button className="preview">Preview Link</button>
                    </a>
                    <a href={project.githupLink} target="_blank">
                      <button className="githupRepo">Githup Repo</button>
                    </a>
                  </div>
                </div> */}
                <div className="project-info-2">
                  <h2>{project.name}</h2>
                  <p style={{ color: "white", marginTop: "10px" }}>
                    {project.desc}
                  </p>
                  <div className="links-div">
                    <a href={project.githupLink} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-github"
                      >
                        <title>GitHub</title>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a href={project.preview} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <title>External Link</title>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <h3
              style={{
                color: "white",
                textAlign: "center",
                marginBlock: "50px",
              }}
            >
              There is no projects with technology yet
            </h3>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
