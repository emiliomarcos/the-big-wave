import React from "react";
import Map, { Marker } from "react-map-gl"
import 'mapbox-gl/dist/mapbox-gl.css'
import data from "./data";


function MyMap(props) {
  const beaches = data.flat();
  const markers = beaches.map(spot => {
    return (
      <Marker
        longitude={spot.longitude}
        latitude={spot.latitude}
        anchor="bottom"
      />
    )
  })

  return (
    <Map
      id="mymap"
      initialViewState={{
        longitude: props.locs[0].longitude,
        latitude: props.locs[0].latitude,
        zoom: 12
      }}
      // initialViewState={{
      //   longitude: 115.0884,
      //   latitude: -8.8149,
      //   zoom: 12
      // }}
      style={{width: 800, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      // mapboxAccessToken={}
    >
      {markers}
    </Map>
  );
}

export default MyMap;

// initialViewState={{
//   longitude: 115.1277,
//   latitude: -8.6573,
//   zoom: 13
// }}
// initialViewState={{
//   longitude: 115.0884,
//   latitude: -8.8149,
//   zoom: 12
// }}
