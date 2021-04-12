import React from 'react'

import { GoogleMap, useLoadScript} from "@react-google-maps/api";

import { TOWNS } from './GoogleMapsData'

const libraries = ["places"];

const mapContainerStyle = {
        width: "50vw",
        height: "50vh",
};
const center = {
        lat:53.133511,
        lng:23.151649,
}

export function GooglemapsView() {
        const {isLoaded, loadError} = useLoadScript({
                googleMapsApiKey: "AIzaSyAUWeGjaHllqysVRdbjkF3GnLBswlA5TwY",
                libraries,
        })

        if (loadError) return "Error loading maps";

        if(!isLoaded) return "Loading Maps";

        return(
                <div>
                        <GoogleMap 
                                mapContainerStyle={mapContainerStyle} 
                                zoom={15}
                                center={center}                 
                        ></GoogleMap>
                </div>
        )
}