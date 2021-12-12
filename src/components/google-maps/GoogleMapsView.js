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
                googleMapsApiKey: "have to get ur own API_KEY",
                libraries,
        })
        
        if (loadError) return "Error loading maps";
        
        if(!isLoaded) return "Loading Maps";
        
        return(
                <div className="map-cont">
                        <div className="grid-center">
                                <div className="adress">
                                        <GoogleMap 
                                                mapContainerStyle={mapContainerStyle} 
                                                zoom={15}
                                                center={centerB}                 
                                        ></GoogleMap>
                                        <div className="adr-li">
                                                <p>Lipowa 1</p>
                                                <p>15-111 Białystok</p>
                                                <p>tel. 111-111-111</p>
                                        </div>
                                </div>
                                <div className="adress">
                                        <GoogleMap 
                                                mapContainerStyle={mapContainerStyle} 
                                                zoom={15}
                                                center={centerW}                 
                                        ></GoogleMap>
                                        <div className="adr-li">
                                                <p>Królewska 2</p>
                                                <p>00-222 Warszawa</p>
                                                <p>tel. 222-222-222</p>
                                        </div>
                                </div>
                                <div className="adress">
                                        <GoogleMap 
                                                mapContainerStyle={mapContainerStyle} 
                                                zoom={15}
                                                center={centerG}                 
                                        ></GoogleMap>
                                        <div className="adr-li">
                                                <p>Angielska 3</p>
                                                <p>80-333 Gdańsk</p>
                                                <p>tel. 333-333-333</p>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}