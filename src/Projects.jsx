import React from "react";
import { projects } from "./data.js";
import img1 from "./assets/birthday.png";
// import "./fetchProjects.jsx";

const Projects = () => {
  return (
    <div className="container2">
      <div className="h2">
        <h2>Project</h2>
        <div className="underliness"></div>
      </div>
      <div className="dad">
        {projects.map((projet, index) => {
          const { title, url, image } = projet;
          return (
            <div className="childContainer" key={index}>
              <a href={url}>
                <div className="projectsContainer">
                  <div className="childProject">
                    <img src={image} alt="" />
                    <h3>{title}</h3>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
