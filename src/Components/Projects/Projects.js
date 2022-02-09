import React from "react";
import "./Projects.css";
const Projects = ({ users }) => {
  return (
    <div>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
      ;
    </div>
  );
};

export default Projects;
