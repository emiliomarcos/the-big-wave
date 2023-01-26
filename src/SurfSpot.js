import React from "react";

export default function SurfSpot(props) {
  return (
    <div>
      <h3>
        🌊 {props.spot.title}
      </h3>
      <p>
        {props.spot.description}
      </p>
      <p>
        {props.spot.forecast}
      </p>
      <img src={props.spot.imageUrl} alt="Berawa" className="spot-img"/>
    </div>
  )
}
