import React from "react";
import "./MainRight.css";
import Bio from "./Bio/Bio";
import Contents from "./Contents/Contents";

const MainRight = () => {
  return (
    <div className="rightbar">
      <Bio />
      <div>
        <Contents />
        <Contents />
        <Contents />
      </div>
    </div>
  );
};

export default MainRight;
