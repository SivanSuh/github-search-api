import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import NavTwo from "./Components/NavTwo/NavTwo";
import MainLeft from "./Components/MainLeft/MainLeft";
import MainRight from "./Components/MainRight/MainRight";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import ChangeColor from "./Components/ChangeColor/ChangeColor";

function App() {
  return (
    <Router>
      <div className="app">
        <ChangeColor>
          <Navbar />
          <NavTwo />
          <div className="main">
            <MainLeft />
            <MainRight />
          </div>
          <Footer />
        </ChangeColor>
      </div>
    </Router>
  );
}

export default App;
