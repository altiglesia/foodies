import React from "react";

function FriendCard({ user }) {
    return (
        <div className="friends-card">
            <img src={user.avatar.replace("300x300", "100x100")} alt="avatar"/>
            <h4>{user.first_name} {user.last_name}</h4>
            <h5>@{user.username}</h5>
        </div>
    )
}

export default FriendCard;