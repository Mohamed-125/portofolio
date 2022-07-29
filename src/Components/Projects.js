import React, { useEffect, useState } from "react";
import axios from "axios";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    async function fetchProjects() {
      await axios
        .get("https://62e1cb20e8ad6b66d84f36f9.mockapi.io/projects")
        .then((res) => {
          setProjects(res.data);
        });
    }
    fetchProjects();
  }, []);
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
        <div className="projects-container">
          {projects.map((project, index) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
