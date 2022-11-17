import React from "react";
import Map from "./Map";
import FriendsListContainer from "./FriendsListContainer";

function Friends({ restaurantData }) {
    return (
        <div>
            {/* <Map restaurantData={restaurantData} /> */}
            <FriendsListContainer />
        </div>
    )
}

export default Friends;