import React, { useState } from "react";
import "./NavTwo.css";
import { NavLink } from "react-router-dom";

const NavTwo = () => {
  const [active, setActive] = useState(false);

  const HandleClick = (event) => {
    event.preventDefault();
    setActive(true);
  };

  return (
    <div className="navtwo">
      <div className="navtwo-container">
        <div className="navtwo-interface">
          <div>
            <i className="fas fa-book-open"></i>
          </div>
          <div>
            <NavLink to="/overview" className="NavLink">
              Overview
            </NavLink>
          </div>
        </div>
        <div className="navtwo-interface">
          <div>
            <i className="fas fa-server"></i>
          </div>
          <div>
            <NavLink to="/repos" className="NavLink">
              Repository
            </NavLink>
          </div>
        </div>
        <div className="navtwo-interface">
          <div>
            <i className="fas fa-tasks"></i>
          </div>
          <div>
            <NavLink to="/projects" className="NavLink">
              Projects
            </NavLink>
          </div>
        </div>
        <div className="navtwo-interface">
          <div>
            <i className="fas fa-cube"></i>
          </div>
          <div>
            <NavLink to="/packages" className="NavLink">
              Packages
            </NavLink>
          </div>
        </div>
        <div className="navtwo-interface">
          <div>
            <i className="far fa-star"></i>
          </div>
          <div>
            <NavLink to="/star" className="NavLink" onClick={HandleClick}>
              Star
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTwo;
