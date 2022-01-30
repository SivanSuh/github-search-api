import React from "react";
import "./Projects.css";
const Projects = ({ repos }) => {
  const list =
    repos.length !== 0 ? (
      repos.data.map((item) => <li>{item.name}</li>)
    ) : (
      <li>note found</li>
    );
  return (
    <div>
      <ul>{list}</ul>;
    </div>
  );
};

export default Projects;
