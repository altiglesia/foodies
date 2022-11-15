import React from "react";

function Faves({ favoritedRestaurant }) {
    console.log(favoritedRestaurant)
    return(
        <div className="restaurant-post">
            {/* <h3>{favoritedRestaurant.name}</h3>
            {favoritedRestaurant.restaurant_images.slice(0,1).map(image => 
                <img 
                    src={image.image_url} 
                    alt="restaurant pics"
                    key={image.id} />
            )}
            <h4>{favoritedRestaurant.neighborhood}</h4> */}
        </div>
    )
}

export default Faves;