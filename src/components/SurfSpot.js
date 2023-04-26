import React from "react";

export default function SurfSpot({ spot }) {
  const { title, description, levels, type, imageUrl } = spot

  return (
    <div className="surf-spot">
      <h5 className="bold-heading">
        🌊 {title}
      </h5>
      <p>
        • {description}
      </p>
      <p>
        • {levels}
      </p>
      <p>
        • {type}
      </p>
      <img src={imageUrl} alt="Surf Spot" className="spot-img"/>
    </div>
  )
}
