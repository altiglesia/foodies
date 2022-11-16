import React, { useState, useEffect } from "react";

function RestaurantPost({ restaurant, saveFaveRestaurant }) {
    // add button click events (must look at Sinatra notes to update DB reviews_table from frontend event)
    function saveFaveRestaurantClick() {
        saveFaveRestaurant(restaurant)
        console.log(restaurant)
    }

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     fetch(`http://localhost:9292/${restaurant.id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //         },
    //         body: JSON.stringify({

    //         })
    //     })
    // }

    function handleChange(e) {
        console.log(e.target.value)
    }

    return (
        <div className="restaurant-post">
            <h3 id="restaurant-name">{restaurant.name}</h3>
            <img src={restaurant.images[0]} />
            {/* {restaurant.images[0].slice(0,1).map(image => 
                <img 
                    src={image.image_url} 
                    alt="restaurant pics"
                    key={image.id} />
            )} */}
            <h4 id="neighborhood">{restaurant.neighborhood}</h4>
            <h5 id="address">{restaurant.address}</h5>
            <button id="dislike">❌</button>
            <button id="fave" onClick={saveFaveRestaurantClick}>⭐️</button>
            <button id="like">❤️</button>
            <form id="comments-section" onSubmit={handleSubmit}>
                <input type="text" name="comments" placeholder="leave a comment" onChange={handleChange}></input>
            </form>
        </div>
    )
}

export default RestaurantPost