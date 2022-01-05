import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    //BEM convention for styling
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout">
            <Header />
            <h1>I AM A CHECKOUT PAGE EXAMPLE!</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
