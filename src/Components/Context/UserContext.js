import React, { createContext } from "react";
import axios from "axios";

export const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
  const user = async ({ user }) => {
    await axios(`https://api.github.com/users/${user}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
