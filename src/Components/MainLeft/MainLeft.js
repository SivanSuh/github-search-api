import React from "react";
import "./MainLeft.css";
const MainLeft = ({
  avatar_url,
  login,
  bio,
  followers,
  following,
  company,
  location,
}) => {
  return (
    <div className="main-container">
      <div className="main-left">
        <div className="image">
          <img
            src={
              avatar_url ||
              "https://avatars.githubusercontent.com/u/63097457?v=4"
            }
            alt="foto"
          />
        </div>
        <div className="main-bottom">
          <div className="name">
            <h2>{login || "nothing"}</h2>
          </div>
          <div>
            <p>{bio || "nothing"}</p>
          </div>
          <div className="btn">
            <button>Edit Profile</button>
          </div>
          <div className="follow">
            <div>
              <i className="fas fa-user-friends"></i>
              <span>{followers}</span>
              <span style={{ marginLeft: "5px" }}>followers</span>
            </div>
            <div className="followers">
              <span>{following}</span>
              <span style={{ marginLeft: "5px" }}>following</span>
            </div>
          </div>

          <div className="portfolio">
            <div className="simge">
              <div>
                <i className="fas fa-hotel"></i>
              </div>
              <div>
                <p>{company}</p>
              </div>
            </div>
            <div className="simge">
              <div>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <p>{location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLeft;
