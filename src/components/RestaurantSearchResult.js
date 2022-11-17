function RestaurantSearchResult({ restaurant }) {
    // debugger
    return (
        <div className="restaurantResultContainer">
            <h3>{restaurant.name}</h3>
            <p>{restaurant.address}</p>
            <span>{restaurant.neighborhood}</span>

            {/* <img src={restaurant.images[2].replace("500x500", "100x100")} /> */}


        </div>
    )
}

export default RestaurantSearchResult