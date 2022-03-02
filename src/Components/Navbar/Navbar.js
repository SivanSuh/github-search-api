import React, { useEffect, useState } from "react";
import "./Navbar.css";
import axios from "axios";
import "./Search.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [value, setValue] = useState("");
  const [repository, setRepository] = useState("");

  const api = async () => {
    try {
      await axios(`https://api.github.com/users/${value}`).then((res) => {
        console.log(res.data);
        setValue(props.setData(res.data));
      });
      await axios(`https://api.github.com/users/${value}/repos`).then(
        (data) => {
          console.log(data.data);
          setRepository(props.setData(data.data));
        }
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  const HandleClicked = async (e) => {
    e.preventDefault();
    await api();
    setValue("");
  };
  return (
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
              <form className="input-search" onSubmit={HandleClicked}>
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
  );
};

export default Navbar;
