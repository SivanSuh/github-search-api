import React from "react";
import "./MainRight.css";

import "./Bio.css";
const MainRight = (props) => {
  return (
    <div className="rightbar">
      <div className="bio-container">
        <h1>Name : {props.name} </h1>
        <h2>Total Public Repos :{props.public_repos} </h2>
      </div>
    </div>
  );
};

export default MainRight;
