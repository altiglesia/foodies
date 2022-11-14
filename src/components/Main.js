import React, { useState, useEffect } from "react";
import Home from "./Home";
import Crawl from "./Crawl";
import Faves from "./Faves";
import Friends from "./Friends";
import Judgie from "./Judgie";
import { Routes, Route } from "react-router-dom";

function Main() {
    const [restaurantData, setRestaurantData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/restaurants")
            .then(res => res.json())
            .then(data => {
                return setRestaurantData(data)
            })
            .catch(err => console.error(err))
    }, []);
    
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crawl" element={<Crawl restaurantData={restaurantData} />} />
            <Route path="/faves" element={<Faves />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/judgie" element={<Judgie />} />
        </Routes>
    );
}

export default Main;