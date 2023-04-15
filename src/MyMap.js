import React from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import data from "./data";

function MyMap(props) {
  const [coordinates, setCoordinates] = React.useState({
    longitude: props.locs[0].longitude,
    latitude: props.locs[0].latitude,
    zoom: props.locs[0].zoom,
  });

  React.useEffect(() => {
    setCoordinates({
      longitude: props.locs[0].longitude,
      latitude: props.locs[0].latitude,
      zoom: props.locs[0].zoom,
    });
  }, [props.locs]);

  const beaches = data.flat();
  const markers = beaches.map((spot) => {
    return (
      <Marker
        key={spot.id}
        longitude={spot.longitude}
        latitude={spot.latitude}
        anchor="bottom"
      />
    );
  });

  return (
    <Map
      id="mymap"
      style={{ width: 800, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.REACT_APP_API_KEY}
      latitude={coordinates.latitude}
      longitude={coordinates.longitude}
      zoom={coordinates.zoom}
      // onViewportChange={(viewport) => setCoordinates(viewport)}
    >
      {markers}
    </Map>
  );
}

export default MyMap;
