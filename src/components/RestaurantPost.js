import React, { useState, useEffect } from "react";
import ImageGallery from 'react-image-gallery';
import { FiThumbsUp, FiStar, FiThumbsDown } from "react-icons/fi";

function RestaurantPost({ restaurant, saveFaveRestaurant, reFetchAllRestaurants }) {
    const currentUserId = parseInt(localStorage.getItem("user-token"));

    // Calculates number of likes and dislikes from the restaurant reviews
    const numOfLikes = restaurant.reviews.filter(el => el.likes === true).length
    const numOfDislikes = restaurant.reviews.filter(el => el.dislikes === true).length

    // Does current user like or dislike a particular restaurant?
    const isLike = (restaurant.reviews.filter(el => el.user_id === currentUserId).length === 0) ? null : restaurant.reviews.filter(el => el.user_id === currentUserId)[0].likes
    const isDislike = (restaurant.reviews.filter(el => el.user_id === currentUserId).length === 0) ? null : restaurant.reviews.filter(el => el.user_id === currentUserId)[0].dislikes
    const isFave = (restaurant.reviews.filter(el => el.user_id === currentUserId).length === 0) ? null : restaurant.reviews.filter(el => el.user_id === currentUserId)[0]["favorited?"]

    // States
    const [commentData, setCommentData] = useState({});
    const [favoritedRestaurant, setFavoritedRestaurant] = useState(isFave);
    const [starIsClicked, setStarIsClicked] = useState(false);

    function handleChange(e) {
        setCommentData({
            restaurant_id: restaurant.id,
            user_id: currentUserId,
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
                user_id: currentUserId,
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

    function handleFaveClick(e) {
        const hasUserReviewed = restaurant.reviews.filter(el => el.user_id === currentUserId).length === 0 ? false : true;
        const favorite = e.target.parentElement.parentElement.className;
        console.log(favorite, "restaurant", restaurant.id, "has user reviewed?", hasUserReviewed);

        setFavoritedRestaurant(!favoritedRestaurant);
        setStarIsClicked(!starIsClicked)
    }

    useEffect(() => {
        fetch(`http://localhost:9292/reviews?user=${currentUserId}&restaurant=${restaurant.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: currentUserId,
                restaurant_id: restaurant.id,
                "favorited?": favoritedRestaurant
            })
        })
            .then(res => res.json())
            .then(savedFaveObj => {
                saveFaveRestaurant(savedFaveObj)
                reFetchAllRestaurants()
            })
    }, [starIsClicked])

    useEffect(() => {
        fetch(`http://localhost:9292/restaurant/${restaurant.id}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: currentUserId,
                restaurant_id: restaurant.id,
                "favorited?": favoritedRestaurant
            })
        })
            .then(res => res.json())
            .then(savedFaveObj => {
                saveFaveRestaurant(savedFaveObj)
                reFetchAllRestaurants()
            })
    }, [starIsClicked])

    function runFavePost(favorite) {
        console.log("running fave post")
    }

    // console.log("hey")
    // fetch(`http://localhost:9292/reviews?user=${currentUserId}&restaurant=${restaurant.id}`, {
    //     method: "PATCH",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //         user_id: currentUserId,
    //         restaurant_id: restaurant.id,
    //         "favorited?": true
    //     })
    // })
    //     .then(res => res.json())
    //     .then(() => saveFaveRestaurant())



    function handleLikeClick(e) {
        // Does current user have a review of the restaurant?
        const hasUserReviewed = restaurant.reviews.filter(el => el.user_id === currentUserId).length === 0 ? false : true;
        const likeOrDislike = e.target.parentElement.className;
        // const favorite = e.target.parentElement.className;
        console.log(e.target.parentElement.className, "restaurant", restaurant.id, "has user reviewed?", hasUserReviewed);
        hasUserReviewed ? runPatchRequest(likeOrDislike) : runPostRequest(likeOrDislike);
    }

    function runPatchRequest(likeOrDislike) {
        const notLikeOrDislike = likeOrDislike === "likes" ? "dislikes" : "likes";

        console.log("running patch")
        fetch(`http://localhost:9292/reviews?user=${currentUserId}&restaurant=${restaurant.id}`, {
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
                user_id: currentUserId,
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
            <div className="interactive-buttons">
                <div className="likes">
                    <FiThumbsUp onClick={handleLikeClick} size={30} style={isLike ? { fill: "green" } : null} />
                    <button>{numOfLikes}</button>
                </div>
                <div className="dislikes">
                    <FiThumbsDown onClick={handleLikeClick} size={30} style={isDislike ? { fill: "red" } : null} />
                    <button>{numOfDislikes}</button>
                </div>
                <div >
                    <button className="favorited?">
                        <FiStar onClick={handleFaveClick} size={30} style={isFave ? { fill: "gold" } : null} />
                    </button>
                </div>
            </div>
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