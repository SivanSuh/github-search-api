import React, { useState } from "react";
import "./NavTwo.css";
import { NavLink } from "react-router-dom";

const NavTwo = (props) => {
  return (
    <div className="navtwo">
      <div className="navtwo-container">
        <div className="navtwo-interface">
          <div>
            <i className="fas fa-book-open"></i>
          </div>
          <div>
            <NavLink to="/" className="NavLink">
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
              Repository <span className="reposLink">{props.public_repos}</span>
            </NavLink>
          </div>
        </div>
        <div className="navtwo-interface">
          <div>
            <i className="fas fa-tasks"></i>
          </div>
          <div>
            <NavLink to="/" className="NavLink">
              Projects
            </NavLink>
          </div>
        </div>
        <div className="navtwo-interface">
          <div>
            <i className="fas fa-cube"></i>
          </div>
          <div>
            <NavLink to="/" className="NavLink">
              Packages
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTwo;
