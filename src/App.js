import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //BEM convention for styling
    <Router>
      <div className="app">
      <Switch>
      <Route path="/">
        <Header />
        <Home />

      </Route>

      </Switch>
      </div>
    </Router>
  );
}

export default App;
