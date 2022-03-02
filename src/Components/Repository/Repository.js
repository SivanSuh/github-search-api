import React from "react";
import "./Repository.css";
const Repository = (props) => {
  const { public_repos } = props;
  return (
    <div className="repos">
      <div className="reposContainer">
        <h2>Repo {public_repos} </h2>
        {public_repos.map((repo) => {
          return (
            <div>
              <h4>{repo}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Repository;
