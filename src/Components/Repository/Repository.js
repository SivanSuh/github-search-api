import React, { useState } from "react";
import "./Repository.css";
const Repository = ({ repos }) => {
  return (
    <div className="repos">
      <div className="reposContainer">
        {repos.map((repo) => (
          <div className="repo" key={repo.id}>
            <h2 className="repo_name">
              <a href={repo.html_url} target="_blank">
                {repo.name}
              </a>
            </h2>
            <p style={{ padding: "5px 0" }}>{repo.description}</p>
            <span>
              <strong>{repo.language}</strong>
            </span>
          </div>
        ))}
        <button>Enter</button>
      </div>
    </div>
  );
};

export default Repository;
