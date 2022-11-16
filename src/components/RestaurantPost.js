import React, { useState } from "react";
import ImageGallery from 'react-image-gallery';

function RestaurantPost({ restaurant, saveFaveRestaurant, reFetchAllRestaurants }) {
    // add button click events (must look at Sinatra notes to update DB reviews_table from frontend event)
    const [commentData, setCommentData] = useState({});

    function saveFaveRestaurantClick() {
        saveFaveRestaurant(restaurant)
        console.log(restaurant)
    }

    function handleChange(e) {
        setCommentData({
            restaurant_id: restaurant.id,
            user_id: 1,
            review_detail_comment: e.target.value
        })
    }

    // post new review to reviews in backend
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.comment)

        fetch(`http://localhost:9292/restaurant/${commentData["restaurant_id"]}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                restaurant_id: commentData["restaurant_id"],
                user_id: 1,
                review_detail_comment: commentData["review_detail_comment"]
            })
        })
            .then(res => res.json())
            .then(data => {
                reFetchAllRestaurants()
            })
        setCommentData({ review_detail_comment: "" })
    }

    const imageGallery = restaurant.images.map(image => {
        const imageObj = {
            original: image,
            thumbnail: image.replace("500x500", "100x100")
        }
        return imageObj
    })

    function handleDelete(e) {
        console.log(e.target.name)
    }

    return (
        <div className="restaurant-post">

            <h3 id="restaurant-name">{restaurant.name}</h3>
            <ImageGallery items={imageGallery} />
            <h4 id="restaurant-location">Neighborhood: {restaurant.neighborhood}</h4>
            <button className="interactive-buttons" id="dislike">👎</button>
            <button className="interactive-buttons" id="fave" onClick={saveFaveRestaurantClick}>⭐️</button>
            <button className="interactive-buttons" id="like">❤️</button>
            <div id="comments-section">
                <ul id="comments-list">
                    {restaurant.reviews.slice(-3).map(review => {
                        return (<li key={review.id}>
                            {review.review_detail_comment}
                            <input onClick={handleDelete} type="submit" name={review.id} value="Delete"></input>
                        </li>)
                    })}
                </ul>
                <form id="post-comments" onSubmit={handleSubmit}>
                    <input type="name" name="comment" placeholder="Add a comment..." className="add-a-comment" onChange={handleChange} value={commentData.review_detail_comment}></input>
                    <button type="submit" className="add-a-comment">Post</button>
                </form>
            </div>
        </div>
    )
}

export default RestaurantPost