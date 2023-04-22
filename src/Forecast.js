import React, { useState, useEffect } from "react";

export default function Forecast({ lat, long }) {
  const params = "waveHeight,wavePeriod,windDirection,windSpeed";
  const [forecastData, setForecastData] = useState({});

  function degreeToCardinalDirection(degree) {
    if (degree >= 337.5 || degree < 22.5) return 'N';
    if (degree >= 22.5 && degree < 67.5) return 'NE';
    if (degree >= 67.5 && degree < 112.5) return 'E';
    if (degree >= 112.5 && degree < 157.5) return 'SE';
    if (degree >= 157.5 && degree < 202.5) return 'S';
    if (degree >= 202.5 && degree < 247.5) return 'SW';
    if (degree >= 247.5 && degree < 292.5) return 'W';
    if (degree >= 292.5 && degree < 337.5) return 'NW';
  }

  useEffect(() => {
    fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${long}&params=${params}`, {
      headers: {
        // "Authorization": process.env.REACT_APP_WEATHER_API_KEY
      }
    }).then(res => res.json()).then(data => setForecastData({
      waveHeight: Math.floor(data.hours[12].waveHeight.icon * 3.281),
      wavePeriod: Math.floor(data.hours[12].wavePeriod.icon),
      windDirection: degreeToCardinalDirection(data.hours[12].windDirection.icon),
      windSpeed: Math.floor(data.hours[12].windSpeed.icon * 2.237),
    }))
  }, [lat, long])

  return (
    <div>
      <h2>{`🌊 ${forecastData.waveHeight - 1}-${forecastData.waveHeight + 1} feet at ${forecastData.wavePeriod} secs`}</h2>
      <h3>{`💨 ${forecastData.windSpeed} mph ${forecastData.windDirection} wind`}</h3>
    </div>
  )
}
