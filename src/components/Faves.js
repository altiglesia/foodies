import React, { useState, useEffect } from "react";
import FaveCard from "./FaveCard";

function Faves() {
    const currentUserId = parseInt(localStorage.getItem("user-token"));
    const [favesList, setFavesList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9292/users/${currentUserId}/faves`)
            .then(res => res.json())
            .then(data => setFavesList(data))
            .catch(err => console.error(err))
    }, [])

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