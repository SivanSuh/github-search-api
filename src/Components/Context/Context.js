import React, { createContext, useState } from "react";

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const values = {
    theme,
    setTheme,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
export default Context;
