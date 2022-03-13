import React from "react";
import "./MainRight.css";

import "./Bio.css";
const MainRight = (props) => {
  return (
    <div className="rightbar">
      <div className="bio-container">
        <h2>Name : {props.name} </h2>
        <h2>Total Public Repos :{props.public_repos} </h2>
        <h2>Created At : {props.created_at} </h2>
        <a href={"https://" + props.blog} target="_blank" className="link">
          Blog : {props.blog}
        </a>
      </div>
    </div>
  );
};

export default MainRight;
