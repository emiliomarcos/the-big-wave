import React from "react";

export default function SurfSpot(props) {
  return (
    <div>
      <h3>
        🌊 {props.spot.title}
      </h3>
      <p>
        • {props.spot.description}
      </p>
      <p>
        • {props.spot.levels}
      </p>
      <p>
        • {props.spot.break}
      </p>
      <p>
        • Forecast: {props.spot.forecast}
      </p>
      <img src={props.spot.imageUrl} alt="Surf Spot" className="spot-img"/>
    </div>
  )
}
