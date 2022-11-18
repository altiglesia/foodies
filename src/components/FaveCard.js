import React from "react";

function FaveCard({ fave }) {
    return (
        <div>
            <h4>{fave.name}</h4>
            <h5>{fave.neighborhood}</h5>
        </div>
    )
}

export default FaveCard;