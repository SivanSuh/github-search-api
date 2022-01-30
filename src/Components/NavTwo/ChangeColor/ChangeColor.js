import React, { useContext, useState } from "react";
import "./ChangeColor.css";
import Context from "../../Context/Context";
const ChangeColor = () => {
  const { theme, setTheme } = useContext(Context);
  return (
    <div className="changeColor">
      <div>
        <button
          className={`btn-color ${theme === "dark" ? theme : "yellow"}`}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          Color Change
        </button>
      </div>
    </div>
  );
};

export default ChangeColor;
