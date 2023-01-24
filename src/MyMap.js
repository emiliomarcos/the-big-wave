import React from "react";
import Map from "react-map-gl"
import 'mapbox-gl/dist/mapbox-gl.css'


function MyMap() {
  return (
    <Map
      id="mymap"
      initialViewState={{
        longitude: 115.1,
        latitude: -8.6,
        zoom: 10
      }}
      style={{width: 800, height: 600}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      // Public token
      mapboxAccessToken={"pk.eyJ1IjoiZW1pbGlvbWFyY29zIiwiYSI6ImNsZGFkOHViODBoN2szb3N6bmRnYnZjcm4ifQ.foYqfhSQ1_tk_3FXm2eKBw"}
    />
  );
}

export default MyMap;
