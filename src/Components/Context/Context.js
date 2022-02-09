import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const themes = {
  light: {
    foreground: "#000",
    background: "#fff",
  },
  dark: {
    foreground: "#fff",
    background: "#000",
  },
};
export const Context = createContext(themes.light);
export const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const GithubSearch = async (user) => {
    await axios(`https://api.github.com/users/${user}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Context.Provider value={{ themes, GithubSearch }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
