import React from "react";
import "./Projects.css";
const Projects = ({ repos }) => {
  return (
    <div className="projects">
      <h4>{repos}</h4>
      <h4>{repos.deger}</h4>
    </div>
  );
};

export default Projects;
