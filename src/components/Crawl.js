import React, { useEffect, useState } from "react";
import RestaurantPost from "./RestaurantPost";

function Crawl({ restaurantData, saveFaveRestaurant, reFetchAllRestaurants }) {
    // pass down restaurantData and restaurant_images from Main.js
    // render all images to a post on the page
    // for each post, map out multiple images
    // access images based on restaurant.id
    // let zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);


    return (
        <div id="crawl">
            {restaurantData.map(restaurant => {
                return (
                    <RestaurantPost
                        key={restaurant.id}
                        restaurant={restaurant}
                        saveFaveRestaurant={saveFaveRestaurant}
                        reFetchAllRestaurants={reFetchAllRestaurants}
                    />
                )
            })}
        </div>
    )
}

export default Crawl;