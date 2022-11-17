import React from "react";
import RestaurantPost from "./RestaurantPost";
import { useNavigate } from 'react-router-dom'

function Crawl({ restaurantData, saveFaveRestaurant, reFetchAllRestaurants }) {
    const navigate = useNavigate();
    // pass down restaurantData and restaurant_images from Main.js
    // render all images to a post on the page
    // for each post, map out multiple images
    // access images based on restaurant.id
    // let zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);
    if (!localStorage.getItem("user-token")) {
        navigate('/login')
    }


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