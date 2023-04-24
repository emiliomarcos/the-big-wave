import React from "react";

export default function SurfSpot({ spot }) {
  const { title, description, levels, type, imageUrl } = spot

  return (
    <div>
      <h4>
        🌊 {title}
      </h4>
      <br></br>
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
