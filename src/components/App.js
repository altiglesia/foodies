import React from "react";
import "../App.css";
import NavBar from "./NavBar";
import Main from "./Main";
import { Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://use.typekit.net/nhq7iwi.css"></link>
      {/* set state of the context in useEffect of App */}
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
