import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import data from "./data";

function MyMap(props) {
  const [coordinates, setCoordinates] = useState({
    longitude: props.locs[0].longitude,
    latitude: props.locs[0].latitude,
    zoom: props.locs[0].zoom,
  });
  const [hoveredPin, setHoveredPin] = useState(null);
  console.log(hoveredPin)

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
        // onClick={(e) => console.log(e.target.color = "#12353D")}
        // onMouseEnter={(e) => console.log(spot.id)}
      >
        <div className="marker" onMouseEnter={() => setHoveredPin(spot)} onMouseLeave={() => setHoveredPin(null)}>
          <FontAwesomeIcon icon={hoveredPin && hoveredPin.id === spot.id ? faLocationDot : faLocationPin}/>
        </div>
      </Marker>
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
      onMove={e => setCoordinates(e.viewState)}
    >
      {markers}
    </Map>
  );
}

export default MyMap;
