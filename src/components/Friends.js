import React from "react";
import FriendCard from "./FriendCard";

function Friends({ usersData }) {
    return (
        <div>
            {usersData.map(user => {
                return (
                <FriendCard user={user} key={user.id}/>
                )
            })}
        </div>
    )
}

export default Friends;