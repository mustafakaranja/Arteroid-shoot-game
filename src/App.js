import { Router, Route } from "express";
import React from "react";
import Headerjs from "./Components/Header";
import Home from "./Home";
import { Reacteroids } from "./Reacteroids";

const App = () => {
  return (
    <div>
      <Headerjs />
      <Router>
        <Route pathname="/" component={Home} />
        <Route pathname="/game/Asteroid-shoot/" component={Reacteroids} />
      </Router>
    </div>
  );
};

export default App;
