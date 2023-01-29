import React from "react";
import Map, { Marker } from "react-map-gl"
import 'mapbox-gl/dist/mapbox-gl.css'
import dataMore from "./dataMore";


function MyMap(props) {
  const [coordinates , setCoordinates] = React.useState({
    longitude: props.locs[0].longitude,
    latitude: props.locs[0].latitude,
    zoom: 4
  })
  React.useEffect(() => {
    setCoordinates({
      ...coordinates,
      longitude: props.locs[0].longitude,
      latitude: props.locs[0].latitude
    })
  }, [props.locs])
  const beaches = dataMore.flat();
  const markers = beaches.map(spot => {
    return (
      <Marker
        longitude={spot.longitude}
        latitude={spot.latitude}
        anchor="bottom"
      />
    )
  })
  console.log(coordinates)
  // console.log(props.locs[0].longitude);
  // console.log(props.locs[0].latitude);

  return (
    <Map
      id="mymap"
      key={coordinates.longitude + coordinates.latitude}
      initialViewState={{
        longitude: coordinates.longitude,
        latitude: coordinates.latitude,
        zoom: coordinates.zoom
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
