import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

function Map({ restaurantData }) {



    return (
        <div id="map">
            <h3>Where have your friends been judging?</h3>

            <MapContainer center={[40.706027, -74.008835]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {restaurantData.map(restaurant => {
                    const coordinates = [restaurant.latitude, restaurant.longitude]
                    const imageLink = restaurant.restaurant_images[0] ? restaurant.restaurant_images[0]["image_url"] : null;
                    // debugger
                    return (
                        <Marker key={restaurant.id} position={coordinates}>
                            <Popup>
                                <h4>{restaurant.name}</h4>
                                <p>{restaurant.address}, {restaurant.neighborhood}</p>
                                {/* <img src={imageLink}></img> */}
                            </Popup>
                        </Marker>
                    )
                })}
                <Marker position={[40.706027, -74.008835]}>

                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map;