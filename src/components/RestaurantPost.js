import React, { useState } from "react";
import ImageGallery from 'react-image-gallery';

function RestaurantPost({ restaurant, saveFaveRestaurant }) {
    // add button click events (must look at Sinatra notes to update DB reviews_table from frontend event)
    const [comment, setComment] = useState("")

    function saveFaveRestaurantClick() {
        saveFaveRestaurant(restaurant)
        console.log(restaurant)
    }

    // post new review to reviews in backend
    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target.value)
        // fetch(`http://localhost:9292/restaurant/${restaurant.id}/reviews`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json",
        //     },
        //     body: JSON.stringify({
        //         restaurant_id: restaurant.id,
        //         user_id: 1,
        //         review_detail_comment: e.target
        //     })
        // })
        // .then((r) => r.json())
        // .then((newComment) => onAddComment(newComment));
    }

    function handleChange(e) {
        console.log(e.target.value)
    }

    const imageGallery = restaurant.images.map(image => {
        const imageObj = {
            original: image,
            thumbnail: image.replace("500x500", "100x100")
        }
        return imageObj
    })

    return (
        <div className="restaurant-post">
            <h3>{restaurant.name}</h3>
            <ImageGallery items={imageGallery} />
            <h4>{restaurant.neighborhood}</h4>
            <button id="dislike">👎</button>
            <button id="fave" onClick={saveFaveRestaurantClick}>⭐️</button>
            <button id="like">❤️</button>
            <form id="comments-section" onSubmit={handleSubmit}>
                <input type="text" name="comments" placeholder="leave a comment" onChange={handleChange}></input>
            </form>
            <button type="submit" form="comments-section">post</button>
        </div>
    )
}

export default RestaurantPost