import React, { useEffect, useState } from "react";
import RestaurantPost from "./RestaurantPost";

function Crawl({ restaurantData }) {
    const [restaurantImageArray, setRestaurantImageArray] = useState([]);
    const [oneParticularRestaurant, setOneParticularRestaurant] = useState({});
// pass down restaurantData and restaurant_images from Main.js
// render all images to a post on the page
// for each post, map out multiple images
// access images based on restaurant.id
    // let zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);


    return (
        <div id="crawl">
            <h3>Crawl</h3>
            {restaurantData.map(restaurant => {

            return (
                <div className="restaurant-post" key={restaurant.id}>
                    <h3>{restaurant.name}</h3>
                    {restaurant.restaurant_images.map(image => 
                        <img 
                            src={image.image_url} 
                            alt="restaurant pics" />
                    )}
                    <h4>{restaurant.neighborhood}</h4>
                </div>
            )
            
            })}
            
        </div>
    )
}

export default Crawl;