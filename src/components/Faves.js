import React, { useEffect } from "react";
import FaveCard from "./FaveCard";

function Faves({ favesList, setFavesList }) {
    const currentUserId = parseInt(localStorage.getItem("user-token"));

    return (
        <div>
            {favesList.map(fave => {
                return (
                    <FaveCard fave={fave} key={fave.id} />
                )
            })}
        </div>
    )
}

export default Faves;