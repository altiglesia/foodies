import React, { useState } from "react";
import ImageGallery from 'react-image-gallery';

function RestaurantPost({ restaurant, saveFaveRestaurant, reFetchAllRestaurants }) {

    const [commentData, setCommentData] = useState({});

    function saveFaveRestaurantClick() {
        saveFaveRestaurant(restaurant)
    }

    function handleChange(e) {
        setCommentData({
            restaurant_id: restaurant.id,
            user_id: 1,
            review_detail_comment: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

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
            .then(() => reFetchAllRestaurants())
        e.target.comment.value = ""

    }

    const imageGallery = restaurant.images.map(image => {
        const imageObj = {
            original: image,
            thumbnail: image.replace("500x500", "100x100")
        }
        return imageObj
    })

    const handleDeleteClick = (e) => {
        fetch(`http://localhost:9292/reviews/${e.target.value}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(() => reFetchAllRestaurants());
    }

    const numOfLikes = restaurant.reviews.filter(el => el.likes === true).length
    const numOfDislikes = restaurant.reviews.filter(el => el.dislikes === true).length
    // debugger


    return (
        <div className="restaurant-post">
            <h3 id="restaurant-name">{restaurant.name}</h3>
            <ImageGallery items={imageGallery} />
            <h4 id="restaurant-location">Neighborhood: {restaurant.neighborhood}</h4>
            <button className="interactive-buttons" id="dislike">{numOfDislikes}👎</button>
            <button className="interactive-buttons" id="fave" onClick={saveFaveRestaurantClick}>⭐️</button>
            <button className="interactive-buttons" id="like">{numOfLikes}❤️</button>
            <div id="comments-section">
                <ul id="comments-list">
                    {restaurant.reviews.filter(rev => rev.review_detail_comment !== null).slice(-3).map(review => {
                        return (
                            <li key={review.id}>
                                {review.review_detail_comment}
                                <button onClick={handleDeleteClick} className="trash-can" value={review.id}>🗑</button>
                            </li>)
                    })}
                </ul>
                <form id="post-comments" onSubmit={handleSubmit}>
                    <input type="name" name="comment" placeholder="Add a comment..." className="add-a-comment" onChange={handleChange}>
                    </input>
                    <button type="submit" className="add-a-comment">Post</button>
                </form>
            </div>
        </div>
    )
}

export default RestaurantPost