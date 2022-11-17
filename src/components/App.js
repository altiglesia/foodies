import React, { useState } from "react";
import "../App.css";
import NavBar from "./NavBar";
import Main from "./Main";
// import { Route } from "react-router-dom"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <link rel="stylesheet" href="https://use.typekit.net/nhq7iwi.css"></link>
      <link rel="stylesheet" href="https://use.typekit.net/nhq7iwi.css"></link>
      <link rel="stylesheet" href="https://use.typekit.net/nhq7iwi.css"></link>
      {/* set state of the context in useEffect of App */}
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Main isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default App;
