import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

function Map() {
    // const position = [40.706027, -74.008835]
    return (
        <div id="map">
            <h3>Map goes here</h3>

            <MapContainer center={[40.706027, -74.008835]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <Marker position={[40.706027, -74.008835]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
            </MapContainer>
        </div>
    )
}

export default Map;