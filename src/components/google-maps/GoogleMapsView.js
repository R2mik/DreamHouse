import React from 'react'

import { GoogleMap, useLoadScript} from "@react-google-maps/api";
import { SPOTS } from "./GoogleMapsData";

const spotsList = SPOTS.map((lat, lng) => ({...{lat, lng} }))

const libraries = ["places"];


const mapContainerStyle = {
        width: "50vw",
        height: "50vh",
};

const center = {
        lat: spotsList.lat,
        lng: spotsList.lng,
}

export function GooglemapsView() {
        const {isLoaded, loadError} = useLoadScript({
                googleMapsApiKey: "AIzaSyAUWeGjaHllqysVRdbjkF3GnLBswlA5TwY",
                libraries,
        })
        
        if (loadError) return "Error loading maps";
        
        if(!isLoaded) return "Loading Maps";
        
        return(
                <div className="adress">
                        <GoogleMap 
                                mapContainerStyle={mapContainerStyle} 
                                zoom={15}
                                center={center}                 
                        ></GoogleMap>
{/*                         <h3>{SPOTS.forEach((spot) => spot.town)}</h3>
                        <ul className="list-unstyled">
                                <li className="adr-li">{SPOTS.forEach((spot) => spot.street)}</li>
                                <li className="adr-li">{SPOTS.forEach((spot) => spot.town + spot.post)}</li>
                                <li className="adr-li">{SPOTS.forEach((spot) => spot.tel)}</li> 
                        </ul>*/}
                </div>
        )
}