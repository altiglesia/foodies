import React from "react";

function FaveCard({ fave }) {
    return (
        <div>
            <img src={fave.images[0].replace("500x500", "250x250")} alt="fave"/>
            <h4>{fave.name}</h4>
            <h5>{fave.neighborhood}</h5>
        </div>
    )
}

export default FaveCard;