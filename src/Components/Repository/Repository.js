import React from "react";
import "./Repository.css";
import { AiOutlineStar } from "react-icons/ai";
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
            <div className="repo_detail">
              <span>
                <strong>{repo.language}</strong>
              </span>

              <div className="star">
                <div>
                  <AiOutlineStar />
                </div>
                <div>{repo.stargazers_count}</div>
              </div>
              <p style={{ padding: "5px 0" }}>{repo.created_at}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Repository;
