import React, { useState } from "react";
import "./App.css";

import Footer from "./Components/Footer/Footer";
import ChangeColor from "./Components/ChangeColor/ChangeColor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Folder/Home";
import Repository from "./Components/Repository/Repository";
import Main from "./Folder/Main";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <ChangeColor>
          <Home />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/repos" element={<Repository />} />
          </Routes>
          <Footer />
        </ChangeColor>
      </div>
    </BrowserRouter>
  );
};

export default App;
