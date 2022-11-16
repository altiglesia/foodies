import React, { useState } from "react";
import ImageGallery from 'react-image-gallery';

function RestaurantPost({ restaurant, saveFaveRestaurant }) {
    // add button click events (must look at Sinatra notes to update DB reviews_table from frontend event)
    const [commentData, setCommentData] = useState("")
    const [isPending, setIsPending] = useState(false);

    function saveFaveRestaurantClick() {
        saveFaveRestaurant(restaurant)
        console.log(restaurant)
    }

    // post new review to reviews in backend
    function handleSubmit(e) {
        e.preventDefault();

        setIsPending(true)
        // fetch(`http://localhost:9292/restaurant/${restaurant.id}/reviews`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"},
        //     body: JSON.stringify({
        //         restaurant_id: restaurant.id,
        //         user_id: 1,
        //         review_detail_comment: e.target.value
        //     })
        // })
        .then(() => {
            console.log('new comment');
            setIsPending(false)
        })
        // .then((newComment) => onAddComment(newComment));
    }

    function handleChange(e) {
        setCommentData({
            username: e.target.name,
            comment: e.target.value,
        })
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

            <ul>
                {Object.entries(commentData).map(([username, commentValue]) => (
                    <li key={username}>{commentValue.toString()}</li>
                ))}
            </ul>

            <form id="comments-section" onSubmit={handleSubmit}>
                <input type="text" name="comments" placeholder="leave a comment" onChange={handleChange}></input>
                <input type="name" name="username" placeholder="username" onChange={handleChange}></input>
            </form>
            { !isPending && <button type="submit" form="comments-section">post</button> }
            { isPending && <button type="submit" form="comments-section">posting comment...</button> }
        
        </div>
    )
}

export default RestaurantPost