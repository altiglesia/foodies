import React from "react";
import RestaurantPost from "./RestaurantPost";

function Scroll() {
// pass down restaurantData
// add button click events (must look at Sinatra notes to update DB reviews_table from frontend event)

    return(
        <div>
            <RestaurantPost />
        </div>
    )
}

export default Scroll;