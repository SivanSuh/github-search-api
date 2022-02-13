import React, { useContext, useState } from "react";
import "./ChangeColor.css";
import Context from "../Context/Context";
const ChangeColor = ({ children }) => {
  const { themes } = useContext(Context);
  const [color, setColor] = useState(themes);
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
