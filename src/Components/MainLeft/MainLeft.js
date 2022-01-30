import React from "react";
import "./MainLeft.css";

const MainLeft = () => {
  return (
    <div className="main-container">
      <div className="main-left">
        <div className="image">
          <img
            src="https://avatars.githubusercontent.com/u/63097457?v=4"
            alt="foto"
          />
        </div>
        <div className="main-bottom">
          <div className="name">
            <h2>Şivan Suh</h2>
          </div>
          <div>
            <p>I am a Mecatronics Technican and Computer Programming</p>
          </div>
          <div className="btn">
            <button>Edit Profile</button>
          </div>
          <div className="follow">
            <div>
              <i class="fas fa-user-friends"></i>
              <span>16</span>
              <span style={{ marginLeft: "5px" }}>followers</span>
            </div>
            <div className="followers">
              <span>19</span>
              <span style={{ marginLeft: "5px" }}>following</span>
            </div>
          </div>

          <div className="portfolio">
            <div className="simge">
              <div>
                <i class="fas fa-hotel"></i>
              </div>
              <div>
                <p>Open to work</p>
              </div>
            </div>
            <div className="simge">
              <div>
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <p>Location</p>
              </div>
            </div>
            <div className="simge">
              <div>
                <i class="far fa-envelope"></i>
              </div>
              <div>
                <p>Mail</p>
              </div>
            </div>
            <div className="simge">
              <div>
                <i class="fas fa-link"></i>
              </div>
              <div>
                <p>Link</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLeft;
