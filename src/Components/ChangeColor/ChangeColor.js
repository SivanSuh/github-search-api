import React, { useContext, useState } from "react";
import "./ChangeColor.css";

const ChangeColor = ({ children }) => {
  const [color, setColor] = useState();
  const data = (renk) => {
    setColor(renk);
  };
  return (
    <div className={` ${color === "light" ? "dark" : "light"}`}>
      {children}
      <button
        className="color-btn"
        onClick={() => data(`${color === "light" ? "dark" : "light"}`)}
      >
        Change Color
      </button>
    </div>
  );
};
export default ChangeColor;
