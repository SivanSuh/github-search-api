import React, { useContext } from "react";
import "./Navbar.css";
import Search from "../Search/Search";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="block1">
          <div className="github-logo">
            <i className="fab fa-github i"></i>
          </div>
          <div>
            <Search />
          </div>
          <div className="info">
            <div>
              <h4>Pull Request</h4>
            </div>
            <div>
              <h4>Issues</h4>
            </div>
            <div>
              <h4>Market place</h4>
            </div>
            <div>
              <h4>Explore</h4>
            </div>
          </div>
        </div>
        <div className="block2">
          <div>
            <i className="extra far fa-bell"></i>
          </div>
          <div className="add extra">
            <div>
              <i className="fas fa-plus"></i>
            </div>
            <div>
              <i className=" fas fa-sort-down"></i>
            </div>
          </div>
          <div>
            <i className="extra far fa-user-circle"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
