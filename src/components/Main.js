import React from "react";
import Home from "./Home";
import Scroll from "./Scroll";
import Likes from "./Likes";
import Friends from "./Friends";
import { Route } from "react-router-dom";

function Main() {
    return(
        <>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/scroll">
                <Scroll />
            </Route>
            <Route path="/likes">
                <Likes />
            </Route>
            <Route path="/friends">
                <Friends />
            </Route>
        </>
    );
}

export default Main;