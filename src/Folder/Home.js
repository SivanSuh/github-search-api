import React, { useEffect, useState } from "react";
import MainLeft from "../Components/MainLeft/MainLeft";
import MainRight from "../Components/MainRight/MainRight";
import NavTwo from "../Components/NavTwo/NavTwo";
import Repository from "../Components/Repository/Repository";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../Components/Navbar/Navbar.css";
import Footer from "../Components/Footer/Footer";
import "./Home.css";
import "../Components/Navbar/Search.css";
import { Link } from "react-router-dom";

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
  const [repos, setRepos] = useState([]);
  const [created_at, setCreatedAt] = useState("");
  const [blog, setBlog] = useState("");

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
    created_at,
    blog,
  }) => {
    setCreatedAt(created_at);
    setBlog(blog);
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
  const setRepository = ({ repos }) => {
    setRepos(repos);
  };

  const Navbar = () => {
    const [value, setValue] = useState("");
    // const [repos, setRepos] = useState([]);
    const HandleChangedValue = async (e) => {
      e.preventDefault();

      const user = await fetch(`https://api.github.com/users/${value}`);
      const userJson = await user.json();
      const repository = await fetch(userJson.repos_url);
      const repositoryJson = await repository.json();

      console.log(userJson);
      console.log(repositoryJson);
      setRepos(repositoryJson);

      if (userJson) {
        setData(userJson);
        // setRepos(repositoryJson);
        props.setRepository(repositoryJson);
      }
      setValue("");
    };
    return (
      <>
        <div className="navbar">
          <div className="container">
            <div className="block1">
              <div className="github-logo">
                <Link to={"/"}>
                  <i className="fab fa-github i"></i>
                </Link>
              </div>
              <div>
                <>
                  <form className="input-search" onSubmit={HandleChangedValue}>
                    <input
                      type="text"
                      placeholder="Search or jump to..."
                      className="input"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </form>
                </>
              </div>
            </div>
          </div>
        </div>
        {/* <Repository repos={repos} /> */}
      </>
    );
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar setData={setData} setRepository={setRepository} />

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
              element={
                <MainRight
                  name={name}
                  public_repos={public_repos}
                  created_at={created_at}
                  blog={blog}
                />
              }
            />
            <Route path="/repos" element={<Repository repos={repos} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Home;
