import React, { useState, useContext } from "react";
import "./Search.css";
import Projects from "../Projects/Projects";
import { Context } from "../Context/Context";

const Search = () => {
  const [value, setValue] = useState("");

  const { GithubSearch } = useContext(Context);

  const HandleClicked = (e) => {
    e.preventDefault();
    console.log(GithubSearch(value));

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

      {/* <Projects users={value} /> */}
    </>
  );
};

export default Search;
