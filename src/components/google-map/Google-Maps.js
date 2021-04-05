import React, { useState, useCallback } from 'react'

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


export default function GoogleMaps() {
    
    const containerStyle = {
        width: '400px',
        height: '400px'
    };
      
    const center = {
        lat: 53.133511,
        lng: 23.151649,
    };
    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "YOUR_API_KEY"
      })
    
    const [map, setMap] = useState(null)
    
    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
      const onUnmount = useCallback(function callback(map) {
        setMap(null)
      }, [])
    
    return isLoaded ? (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
            <></>
            </GoogleMap>
        </div>
    ) : <></>
}
