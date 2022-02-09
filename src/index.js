import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./Components/Context/Context";
import { UserContextProvider } from "./Components/Context/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
