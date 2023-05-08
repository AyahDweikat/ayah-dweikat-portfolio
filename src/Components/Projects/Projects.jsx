import React from "react";

import "./projects.css";

import { projectsData } from "./projectUtils";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        {projectsData.map((project, id) => {
          return (
            <div key={id} className="project">
              <div className="project-info">
                <h3>{project.title}</h3>
                <div className="tech-stack">
                  {project.techStack.map((tech, id)=>{
                    return (
                      <span key={id}>{tech}</span>
                    )
                  })}
                </div>
                <p>
                  {project.description}
                </p>
                <div>
                  <a
                    title="GitHub"
                    target="_blank"
                    rel="noreferrer"
                    href={project.gitHubURL}
                  >
                    <i className="fa-brands fa-github" />
                  </a>
                  <a
                    title="Demo"
                    target="_blank"
                    rel="noreferrer"
                    href={project.siteURL}
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                  </a>
                </div>
              </div>
              <div className="project-img">
                <img src={project.imgSRC} alt="Img for facebook Site" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
