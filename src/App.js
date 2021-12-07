import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    //BEM convention for styling
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
