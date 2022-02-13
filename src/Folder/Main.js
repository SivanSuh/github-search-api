import React from "react";
import MainLeft from "../Components/MainLeft/MainLeft";
import MainRight from "../Components/MainRight/MainRight";
import "./Main.css";
const Main = () => {
  return (
    <div className="main">
      <MainLeft />
      <MainRight />
    </div>
  );
};

export default Main;
