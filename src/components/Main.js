import React, { useState } from "react";
import Home from "./Home";
import Crawl from "./Crawl";
import Faves from "./Faves";
import Friends from "./Friends";
import { Routes, Route } from "react-router-dom";

function Main() {
    const [restaurantData, setRestaurantData] = useState([]);

    
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crawl" element={<Crawl />} />
            <Route path="/faves" element={<Faves />} />
            <Route path="/friends" element={<Friends />} />
        </Routes>
    );
}

export default Main;