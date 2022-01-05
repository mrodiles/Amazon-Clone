import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
