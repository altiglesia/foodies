import React from "react";
import RestaurantPost from "./RestaurantPost";

function Crawl() {
// pass down restaurantData from Main.js

    return (
        <div>
            {/* each restaurant post needs to be mapped */}
            <RestaurantPost />
        </div>
    )
}

export default Crawl;