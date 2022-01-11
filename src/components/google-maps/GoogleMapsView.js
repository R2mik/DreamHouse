import React from 'react'

import { GoogleMap, useLoadScript } from "@react-google-maps/api";

import { SPOTS } from "./GoogleMapsData";

const libraries = ["places"];

const mapContainerStyle = {
        width: "70vw",
        height: "50vh",
};

export function GooglemapsView() {
        const {isLoaded, loadError} = useLoadScript({
                googleMapsApiKey: "AIzaSyAFB_GHyB8Ak7EttWFtWSVhtBP77n6vq2o",
                libraries,
        })
        
        if (loadError) return "Error loading maps";
        
        if(!isLoaded) return "Loading Maps";
        
        return(
                <div className="map-cont">
                        <div className="grid-center">
                                {SPOTS.map((spot) => {
                                        return (
                                        <div key={`${spot.lag} ${spot.lng}`} className="adress">
                                                <GoogleMap 
                                                        mapContainerStyle={mapContainerStyle} 
                                                        zoom={15}
                                                        center={{
                                                                lat: spot.lat,
                                                                lng: spot.lng,
                                                        }}                
                                                ></GoogleMap>
                                                <div className="adr-li">
                                                        <p>{spot.town}</p>
                                                        <p>{spot.post} {spot.street}</p>
                                                        <p>{spot.tel}</p>
                                                </div>
                                        </div>
                                        )})
                                }
                        </div>
                </div>
        )
}