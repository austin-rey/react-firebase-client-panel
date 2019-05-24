import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Dashboard from "./components/layout/Dashboard";
import AppNavbar from "./components/layout/AppNavbar";

function App() {
  return (
    <div className="App">
      <Router>
        <AppNavbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
