import React from "react";
import "../App.css";
import NavBar from "./NavBar";
import Main from "./Main";
import { Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
