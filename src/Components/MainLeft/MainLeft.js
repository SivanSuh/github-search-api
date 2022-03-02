import React, { useState } from "react";
import "./MainLeft.css";
import { Link } from "react-router-dom";
const MainLeft = (props) => {
  // { avatar_url, login, bio, followers, following, company, location }

  return (
    <div className="main-container">
      <div className="main-left">
        <div className="image">
          <img
            src={
              props.avatar_url ||
              "https://avatars.githubusercontent.com/u/63097457?v=4"
            }
            alt="foto"
          />
        </div>
        <div className="main-bottom">
          <div className="name">
            <h2>{props.login || "SivanSuh"}</h2>
          </div>
          <div>
            <p>{props.bio || "null"}</p>
          </div>
          <div className="btn">
            <button>Edit Profile</button>
          </div>
          <div className="follow">
            <div>
              <i className="fas fa-user-friends"></i>
              <span>{props.followers}</span>
              <a
                className="a"
                target="_blank"
                href={`https://github.com/${props.login}?tab=followers`}
              >
                <span style={{ marginLeft: "5px" }}>followers</span>
              </a>
            </div>
            <div className="followers">
              <span>{props.following}</span>
              <a
                className="a"
                target="_blank"
                href={`https://github.com/${props.login}?tab=following`}
              >
                <span style={{ marginLeft: "5px" }}>following</span>
              </a>
            </div>
          </div>

          <div className="portfolio">
            <div className="simge">
              <div>
                <i className="fas fa-hotel"></i>
              </div>
              <div>
                <p>{props.company || "null"}</p>
              </div>
            </div>
            <div className="simge">
              <div>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <p>{props.location || "null"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLeft;
