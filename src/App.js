import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import AppNavbar from "./components/layout/AppNavbar";
function App() {
  return (
    <div className="App">
      <Router>
        <AppNavbar />
        <div className="container">
          <h1>Hello</h1>
        </div>
      </Router>
    </div>
  );
}

export default App;
