import React, { useState, useEffect } from "react";

function RestaurantPost({ restaurant, saveFaveRestaurant }){
    // add button click events (must look at Sinatra notes to update DB reviews_table from frontend event)
    function saveFaveRestaurantClick() {
        saveFaveRestaurant(restaurant)
        console.log(restaurant)
    }

    return(
        <div className="restaurant-post">
            <h3>{restaurant.name}</h3>
            {restaurant.restaurant_images.slice(0,1).map(image => 
                <img 
                    src={image.image_url} 
                    alt="restaurant pics"
                    key={image.id} />
            )}
            <h4>{restaurant.neighborhood}</h4>
            <button id="dislike">❌</button>
            <button id="fave" onClick={saveFaveRestaurantClick}>⭐️</button>
            <button id="like">❤️</button>
        </div>
    )
}

export default RestaurantPost