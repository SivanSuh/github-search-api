import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import MainLeft from "../MainLeft/MainLeft";

const Search = () => {
  const [avatar_url, setAvatar_url] = useState("");
  const [bio, setBio] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [login, setLogin] = useState("");
  const [public_repos, setPublic_repos] = useState("");
  const [company, setCompany] = useState("");

  const [value, setValue] = useState("");
  const [deger, setDeger] = useState("");

  const api = async () => {
    await axios(`https://api.github.com/users/${value}`).then((res) => {
      console.log(res.data);
      setData(res.data);
      setDeger(res.data.name);
    });
  };
  const setData = ({
    avatar_url,
    bio,
    followers,
    following,
    login,
    public_repos,
    company,
  }) => {
    setAvatar_url(avatar_url);
    setBio(bio);
    setFollowers(followers);
    setFollowing(following);
    setLogin(login);
    setPublic_repos(public_repos);
    setCompany(company);
  };
  const HandleClicked = async (e) => {
    e.preventDefault();
    await api();
    setValue("");
  };

  return (
    <>
      <form className="input-search" onSubmit={HandleClicked}>
        <input
          type="text"
          placeholder="Search or jump to..."
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      {deger}
      <MainLeft
        avatar_url={avatar_url}
        login={login}
        bio={bio}
        followers={followers}
        following={following}
        public_repos={public_repos}
        company={company}
      />
    </>
  );
};

export default Search;
