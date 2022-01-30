import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Projects from "../Projects/Projects";

const Search = () => {
  const [value, setValue] = useState("");
  const [repos, setRepos] = useState([]);

  const HandleClicked = async (e) => {
    e.preventDefault();
    console.log(value);
    setValue("");
    try {
      const result = await axios(`https://api.github.com/users/${value}/repos`);
      setRepos(result);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(repos);
  return (
    <>
      <div className="input-search">
        <input
          type="text"
          placeholder="Search or jump to..."
          className="input"
          value={value}
        />
        <button className="input-btn" onClick={HandleClicked}>
          add
        </button>
      </div>
      {/* <Projects repos={repos} /> */}
    </>
  );
};

export default Search;
