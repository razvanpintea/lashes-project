
import { GoogleMap, Marker, useJsApiLoader,useLoadScript  } from '@react-google-maps/api';
import '../styles/Map.css';
import React, { useState, useEffect } from 'react';

function Map(){

    const { isLoaded } = useLoadScript({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyClOMNdl_MOA9NGu2nZvgTEDD7uhFCJg_c"
      })

      const center = {
        lat: 54.980057,
        lng: -1.6207739
      };

      const containerStyle = {
        width: '100%',
        height: '20rem',
        margin: '0 auto', // Center horizontally using margin
        maxWidth:'900px',
      };
      const [markerVisible, setMarkerVisible] = useState(false);

      // When the Google Maps API is loaded, set the marker to be visible
      useEffect(() => {
        if (isLoaded) {
          setMarkerVisible(true);
        }
      }, [isLoaded]);
    return(
        <div className='map-div'>
        {isLoaded && 
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
      >
          {markerVisible && <Marker position={center} />}
      </GoogleMap>}
        {!isLoaded && <div>Loading...</div>}
        </div>
    )
}
export default Map;