import React from "react";
import "./App.css";

import ChangeColor from "./Components/ChangeColor/ChangeColor";
import Home from "./Folder/Home";

const App = () => {
  return (
    <div className="app">
      <ChangeColor>
        <Home />
      </ChangeColor>
    </div>
  );
};

export default App;
