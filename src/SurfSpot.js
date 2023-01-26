import React from "react";

export default function SurfSpot(props) {
  return (
    <div>
      <h3>
        🌊 {props.spot.title}
        {props.spot.description}
      </h3>
      <img src={props.spot.imageUrl} alt="Berawa" className="spot-img"/>
    </div>
  )
}
