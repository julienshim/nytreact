import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";

//Week 11, Lesson 4
const App = () =>
  <Router>
    <div>
      {/* This is a single page application */}
      <Route path="/" component={Home} />
    </div>
  </Router>;

export default App;