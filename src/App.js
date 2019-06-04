import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

import Dashboard from "./components/layout/Dashboard";
import AppNavbar from "./components/layout/AppNavbar";
import AddClient from "./components/clients/AddClient";
import EditClient from "./components/clients/EditClient";
import ClientDetails from "./components/clients/ClientDetails";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <AppNavbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/client/add" component={AddClient} />
              <Route exact path="/client/:id" component={ClientDetails} />
              <Route exact path="/client/edit/:id" component={EditClient} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
