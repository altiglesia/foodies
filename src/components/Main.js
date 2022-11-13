import React from "react";
import Home from "./Home";
import Scroll from "./Scroll";
import Likes from "./Likes";
import Friends from "./Friends";
import { Routes, Route } from "react-router-dom";

function Main() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scroll" element={<Scroll />} />
            <Route path="/likes" element={<Likes />} />
            <Route path="/friends" element={<Friends />} />
        </Routes>
    );
}

export default Main;