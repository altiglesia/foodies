import React from "react";
import RestaurantPost from "./RestaurantPost";

function Crawl({ restaurantData, restaurant_images }) {
// pass down restaurantData and restaurant_images from Main.js
// render all images to a post on the page
// for each post, map out multiple images
    // let zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);

    return (
        <div id="crawl">
            <h3>Crawl</h3>
            {restaurantData.map(restaurant => {
                // const restaurantName = restaurant.name;
            return (
                <div className="restaurant-card" key={restaurant.id}>
                    <h3>{restaurant.name}</h3>
                    <div className="restaurant-image">
                        <RestaurantPost key={restaurant.id}
                        restaurantName={restaurant.name}
                        />
                    </div>
                </div>

            )
            
            })}
            
        </div>
    )
}

export default Crawl;