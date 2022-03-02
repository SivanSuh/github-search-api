import React, { useState } from "react";
import MainLeft from "../Components/MainLeft/MainLeft";
import MainRight from "../Components/MainRight/MainRight";
import Navbar from "../Components/Navbar/Navbar";
import NavTwo from "../Components/NavTwo/NavTwo";
import Repository from "../Components/Repository/Repository";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import "./Home.css";
const Home = (props) => {
  const [avatar_url, setAvatar_url] = useState("");
  const [bio, setBio] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [login, setLogin] = useState("");
  const [public_repos, setPublic_repos] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");

  const setData = ({
    avatar_url,
    bio,
    followers,
    following,
    login,
    public_repos,
    company,
    location,
    name,
  }) => {
    setName(name);
    setAvatar_url(avatar_url);
    setBio(bio);
    setFollowers(followers);
    setFollowing(following);
    setLogin(login);
    setPublic_repos(public_repos);
    setCompany(company);
    setLocation(location);
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar setData={setData} />
        <NavTwo public_repos={public_repos} />
        <div className="main">
          <MainLeft
            avatar_url={avatar_url}
            bio={bio}
            login={login}
            followers={followers}
            following={following}
            company={company}
            location={location}
          />
          <Routes>
            <Route
              path="/"
              element={<MainRight name={name} public_repos={public_repos} />}
            />
            <Route
              path="/repos"
              element={<Repository public_repos={public_repos} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Home;
