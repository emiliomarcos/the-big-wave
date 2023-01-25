import React from "react";
import Map, { Marker } from "react-map-gl"
import 'mapbox-gl/dist/mapbox-gl.css'


function MyMap() {
  console.log((115.1301 + 115.1254) / 2);
  console.log((8.6595 + 8.6551) / 2);
  return (
    <Map
      id="mymap"
      initialViewState={{
        longitude: 115.1277,
        latitude: -8.6573,
        zoom: 13
      }}
      style={{width: 800, height: 600}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      // Public token
      mapboxAccessToken={"pk.eyJ1IjoiZW1pbGlvbWFyY29zIiwiYSI6ImNsZGFkOHViODBoN2szb3N6bmRnYnZjcm4ifQ.foYqfhSQ1_tk_3FXm2eKBw"}
    >
      <Marker longitude={115.1359} latitude={-8.6638} anchor="bottom" />
      <Marker longitude={115.1301} latitude={-8.6595} anchor="bottom" />
      <Marker longitude={115.1254} latitude={-8.6551} anchor="bottom" />
      <Marker longitude={115.1215} latitude={-8.6518} anchor="bottom" />
    </Map>
  );
}

export default MyMap;

// Marked beaches in order:

// Berawa
// Batu Bolong
// Echo
// Pererenan
