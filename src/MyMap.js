import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
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
      >
        <div className="marker" onMouseEnter={() => setHoveredPin(spot)} onMouseLeave={() => setHoveredPin(null)}>
          <FontAwesomeIcon icon={hoveredPin && hoveredPin.id === spot.id ? faLocationDot : faLocationPin} {...(hoveredPin && hoveredPin.id === spot.id ? { size: "xl" } : {})}/>
        </div>
      </Marker>
    );
  });

  const popup = beaches.map((spot) => {
    return (
      <Popup
        key={spot.id}
        id={spot.id}
        longitude={spot.longitude}
        latitude={spot.latitude}
        anchor="top"
        closeButton={false}
      >
        {spot.title}
      </Popup>
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
      {hoveredPin && popup.find(pin => pin.props.id === hoveredPin.id)}
    </Map>
  );
}

export default MyMap;
