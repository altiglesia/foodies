import React, { useState } from "react";
import "../App.css";
import NavBar from "./NavBar";
import Main from "./Main";
// import { Route } from "react-router-dom"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("user-token") ? true : false);

  return (
    <div className="App">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Main isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default App;
