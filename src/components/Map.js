import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const data = `10001, 40.750633, -73.997177, 10002, 40.715775, -73.986212, 10003, 40.731829, -73.989181, 10004, 40.688630, -74.018244, 10005, 40.706027, -74.008835, 10006, 40.709614, -74.012954, 10007, 40.713848, -74.007755, 10009, 40.726399, -73.978631, 10010, 40.739065, -73.982255, 10011, 40.742039, -74.000620, 10012, 40.725581, -73.998078, 10013, 40.720103, -74.004903, 10014, 40.734012, -74.006746, 10016, 40.745224, -73.978297, 10017, 40.752360, -73.972493, 10018, 40.755319, -73.993114, 10019, 40.765823, -73.987169, 10020, 40.758236, -73.978833, 10021, 40.769258, -73.958751, 10022, 40.758628, -73.967948, 10023, 40.775921, -73.982607, 10024, 40.798452, -73.974428, 10025, 40.798601, -73.966622, 10026, 40.802381, -73.952681, 10027, 40.811407, -73.953060, 10028, 40.776441, -73.953509 10029, 40.791763, -73.943970, 10030, 40.818267, -73.942856, 10031, 40.825288, -73.950045, 10032, 40.838815, -73.942836, 10033, 40.850545, -73.933983, 10034, 40.867076, -73.924312, 10035, 40.795455, -73.929655, 10036, 40.759260, -73.989860, 10037, 40.812957, -73.937376, 10038, 40.709278, -74.002562, 10039, 40.830867, -73.936218, 10040, 40.858305, -73.930549, 10044, 40.761915, -73.949962, 10065, 40.764612, -73.963122, 10069, 40.775906, -73.990358, 10075, 40.773361, -73.956216, 10103, 40.760780, -73.977670, 10110, 40.754499, -73.982256, 10111, 40.759114, -73.977596, 10112, 40.759167, -73.979668, 10115, 40.810852, -73.963744, 10119, 40.750310, -73.992979, 10128, 40.781432, -73.950013, 10152, 40.758404, -73.972031, 10153, 40.763622, -73.972439, 10154, 40.757779, -73.972487, 10162, 40.769300, -73.949915, 10165, 40.752131, -73.978722, 10167, 40.754648, -73.974771, 10168, 40.751448, -73.977103, 10169, 40.754391, -73.976098, 10170, 40.752625, -73.975877, 10171, 40.755899, -73.973858, 10172, 40.755273, -73.974315, 10173, 40.754131, -73.979364, 10174, 40.751441, -73.975003, 10177, 40.755139, -73.975934, 10199, 40.751393, -73.997229, 10271, 40.708205, -74.010504, 10278, 40.715182, -74.003778, 10279, 40.712626, -74.008669, 10280, 40.708538, -74.016650, 10282, 40.716921, -74.015066`


function Map({ restaurantData }) {

    return (
        <div id="map">
            <h3>Where have your friends been judging?</h3>
            <form>
                <input id="searchZipCode" type="number" step="1" size="5" min="10001" max="10282" placeholder="Enter a Manhattan ZipCode"></input>
                {/* <input type="submit"></input> */}
            </form>

            <MapContainer center={[40.706027, -74.008835]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {restaurantData.map(restaurant => {
                    const coordinates = [restaurant.latitude, restaurant.longitude]
                    // imageLink currently only works for 149 of the first restaurants. Need to be resized 
                    const imageLink = restaurant.images[0] ? restaurant.images[0].replace("500x500", "150x150") : null;
                    return (
                        <Marker key={restaurant.address} position={coordinates}>
                            <Popup>
                                <h4>{restaurant.name}</h4>
                                <p>{restaurant.address}, {restaurant.neighborhood}</p>
                                <img src={imageLink}></img>
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