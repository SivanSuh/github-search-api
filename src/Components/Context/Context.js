import React, { createContext } from "react";

const themes = {
  light: "",
  dark: "",
};
export const Context = createContext(themes.light);

export const ContextProvider = ({ children }) => {
  return <Context.Provider value={{ themes }}>{children}</Context.Provider>;
};

export default Context;
