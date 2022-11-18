import React from "react";
import FaveCard from "./FaveCard";

function Faves({ favesList }) {
    return(
        <div>
            {favesList.map(fave => {
                return (
                    <div>
                        <FaveCard fave={fave} key={fave.id} />
                    </div>
                )
            })}
        </div>
    )
}

export default Faves;