import React from "react";
import FaveCard from "./FaveCard";

function Faves({ favesList }) {
    return(
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