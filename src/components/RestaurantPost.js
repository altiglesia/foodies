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

    // Calculates number of likes and dislikes from the restaurant reviews
    const numOfLikes = restaurant.reviews.filter(el => el.likes === true).length
    const numOfDislikes = restaurant.reviews.filter(el => el.dislikes === true).length
    // Does current user like or dislike a particular restaurant?
    const isLike = (restaurant.reviews.filter(el => el.user_id === 1).length === 0) ? null : restaurant.reviews.filter(el => el.user_id === 1)[0].likes
    const isDislike = (restaurant.reviews.filter(el => el.user_id === 1).length === 0) ? null : restaurant.reviews.filter(el => el.user_id === 1)[0].dislikes

    function handleLikeClick(e) {
        console.log(e.target.name, "restaurant", restaurant.id, "review", isLike);
        isLike || isDislike ? runPatchRequest(e.target.name) : runPostRequest(e.target.name);
    }

    function runPatchRequest(likeOrDislike) {
        const notLikeOrDislike = likeOrDislike === "likes" ? "dislikes" : "likes";

        console.log("running patch")
        fetch(`http://localhost:9292/reviews?user=1&restaurant=${restaurant.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                [likeOrDislike]: true,
                [notLikeOrDislike]: false,
            })
        })
            .then(res => res.json())
            .then(() => reFetchAllRestaurants())
    }

    function runPostRequest(likeOrDislike) {
        console.log('running post')
        const notLikeOrDislike = likeOrDislike === "likes" ? "dislikes" : "likes";

        fetch(`http://localhost:9292/restaurant/${restaurant.id}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: 1,
                restaurant_id: restaurant.id,
                [likeOrDislike]: true,
                [notLikeOrDislike]: false,
            })
        })
            .then(res => res.json())
            .then(() => reFetchAllRestaurants())
    }

    return (
        <div className="restaurant-post">
            <h3 id="restaurant-name">{restaurant.name}</h3>
            <ImageGallery items={imageGallery} />
            <h4 id="restaurant-location">Neighborhood: {restaurant.neighborhood}</h4>
            <button
                className="interactive-buttons"
                onClick={handleLikeClick}
                name="dislikes"
                style={isDislike ? { backgroundColor: "pink" } : null} // if user dislikes, set background color to pink
            >{numOfDislikes}👎
            </button>
            <button
                className="interactive-buttons"

                onClick={saveFaveRestaurantClick}
            >⭐️
            </button>
            <button
                className="interactive-buttons"
                onClick={handleLikeClick}
                name="likes"
                style={isLike ? { backgroundColor: "lightgreen" } : null} // if user likes, set background color to green
            >{numOfLikes}❤️
            </button>
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