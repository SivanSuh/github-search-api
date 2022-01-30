import React from "react";
import "./NavTwo.css";
import { Link } from "react-router-dom";
import ChangeColor from "./ChangeColor/ChangeColor";

const NavTwo = () => {
  return (
    <div className="navtwo">
      <div className="navtwo-container">
        <div className="navtwo-interface">
          <div>
            <i class="fas fa-book-open"></i>
          </div>
          <div>
            <Link to="/overview" className="link active">
              Overview
            </Link>
          </div>
        </div>
        <div className="navtwo-interface">
          <div>
            <i class="fas fa-server"></i>
          </div>
          <div>
            <Link to="/repos" className="link">
              Repository
            </Link>
          </div>
        </div>
        <div className="navtwo-interface">
          <div>
            <i class="fas fa-tasks"></i>
          </div>
          <div>
            <Link to="/projects" className="link">
              Projects
            </Link>
          </div>
        </div>
        <div className="navtwo-interface">
          <div>
            <i class="fas fa-cube"></i>
          </div>
          <div>
            <Link to="/packages" className="link">
              Packages
            </Link>
          </div>
        </div>
        <div className="navtwo-interface">
          <div>
            <i class="far fa-star"></i>
          </div>
          <div>
            <Link to="/star" className="link">
              Star
            </Link>
          </div>
        </div>
        <div className="navtwo-color">
          <ChangeColor />
        </div>
      </div>
    </div>
  );
};

export default NavTwo;
