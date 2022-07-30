import React, { useEffect, useState } from "react";
import axios from "axios";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [value, setValue] = useState("all");
  useEffect(() => {
    async function fetchProjects() {
      await axios
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
          <button className="option-button">Angular</button>
          <button className="option-button">React js</button>
          <button className="option-button">Apis</button>
          <button className="option-button">Wordpress</button>
        </div>
        <div className="projects-container">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div
                className="project-div"
                style={
                  index % 2 === 1
                    ? { flexDirection: "row-reverse" }
                    : { flexDirection: "row" }
                }
              >
                <img src={project.img}></img>
                <div className="project-info">
                  <h2>{project.name}</h2>
                  <p style={{ color: " #b3bbc9" }}>{project.desc}</p>
                  <a href={project.preview} target="_blank">
                    <button className="preview">Preview Link</button>
                  </a>
                  <a href={project.githupLink} target="_blank">
                    <button className="githupRepo">Githup Repo</button>
                  </a>
                </div>
              </div>
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
