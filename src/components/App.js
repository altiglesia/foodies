import React, { useState } from "react";
import "../App.css";
import NavBar from "./NavBar";
import Main from "./Main";
// import { Route } from "react-router-dom"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("user-token") ? true : false);

  return (
    <div className="App">
      <h1 className="foodies">foodies</h1>
      {/* set state of the context in useEffect of App */}
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Main isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default App;
