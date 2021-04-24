import React from 'react'

import { GoogleMap, useLoadScript} from "@react-google-maps/api";
//import { SPOTS } from "./GoogleMapsData";

/* const spotsList = SPOTS.map((spot) => ({lat:spot.lat, lng:spot.lng}))

console.log(spotsList); */

const libraries = ["places"];


const mapContainerStyle = {
        width: "50vw",
        height: "50vh",
};

const centerB = {
        lat: 53.133511,
        lng: 23.151649,
}

const centerW = {
        lat: 52.240790,
        lng: 21.015220,
}

const centerG = {
        lat: 54.408120,
        lng: 18.634600,
}

export function GooglemapsView() {
        const {isLoaded, loadError} = useLoadScript({
                googleMapsApiKey: "AIzaSyAUWeGjaHllqysVRdbjkF3GnLBswlA5TwY",
                libraries,
        })
        
        if (loadError) return "Error loading maps";
        
        if(!isLoaded) return "Loading Maps";
        
        return(
                <div className="grid-center">
                        <div className="adress">
                                <GoogleMap 
                                        mapContainerStyle={mapContainerStyle} 
                                        zoom={15}
                                        center={centerB}                 
                                ></GoogleMap>
                                <h3>Białystok</h3>
                                <ul className="list-unstyled">
                                        <li className="adr-li">Lipowa 1</li>
                                        <li className="adr-li">15-111</li>
                                        <li className="adr-li">tel. 111-111-111</li>
                                </ul>
                        </div>
                        <div className="adress">
                                <GoogleMap 
                                        mapContainerStyle={mapContainerStyle} 
                                        zoom={15}
                                        center={centerW}                 
                                ></GoogleMap>
                                <h3>Warszawa</h3>
                                <ul className="list-unstyled">
                                        <li className="adr-li">Królewska 2</li>
                                        <li className="adr-li">00-222</li>
                                        <li className="adr-li">tel. 222-222-222</li>
                                </ul>
                        </div>
                        <div className="adress">
                                <GoogleMap 
                                        mapContainerStyle={mapContainerStyle} 
                                        zoom={15}
                                        center={centerG}                 
                                ></GoogleMap>
                                <h3>Gdańsk</h3>
                                <ul className="list-unstyled">
                                        <li className="adr-li">Angielska 3</li>
                                        <li className="adr-li">80-333</li>
                                        <li className="adr-li">tel. 333-333-333</li>
                                </ul>
                        </div>
                </div>
        )
}