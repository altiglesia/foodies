import React from "react";

function RestaurantPost({ restaurant }){
    // add button click events (must look at Sinatra notes to update DB reviews_table from frontend event)
    
    return(
        <div className="restaurant-post-container">
            <img 
                src={restaurant.restaurant_images.image_url}
            />
        </div>
    )
}

export default RestaurantPost