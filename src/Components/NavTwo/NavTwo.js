import React, { useState } from "react";
import "./NavTwo.css";
import { Link } from "react-router-dom";

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
            <Link to="/" className="Link">
              Overview
            </Link>
          </div>
        </div>
        <div className="navtwo-interface">
          <div>
            <i className="fas fa-server"></i>
          </div>
          <div>
            <Link to="/repos" className="Link">
              Repository
            </Link>
          </div>
        </div>
        <div className="navtwo-interface">
          <div>
            <i className="fas fa-tasks"></i>
          </div>
          <div>
            <Link to="/" className="Link">
              Projects
            </Link>
          </div>
        </div>
        <div className="navtwo-interface">
          <div>
            <i className="fas fa-cube"></i>
          </div>
          <div>
            <Link to="/" className="Link">
              Packages
            </Link>
          </div>
        </div>
        <div className="navtwo-interface">
          <div>
            <i className="far fa-star"></i>
          </div>
          <div>
            <Link to="/" className="Link" onClick={HandleClick}>
              Star
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTwo;
