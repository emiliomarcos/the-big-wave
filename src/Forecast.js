import React from "react";

export default function Forecast({ lat, long }) {
  const params = "waveHeight"

  fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${long}&params=${params}`, {
    headers: {
      // "Authorization": process.env.REACT_APP_WEATHER_API_KEY
    }
  }).then(res => res.json()).then(data => console.log(data.hours[12].waveHeight))

  return (
    <div>
      <h3>Forecast!</h3>
    </div>
  )
}
