import './App.css';
import MyMap from './MyMap';
import { MapProvider } from "react-map-gl";
import SurfSpot from './SurfSpot';
import data from './data';
import Video from './Video';
import React from 'react';

export default function App() {
  const [locations, setLocations] = React.useState(data[0]);

  const otherLocation = data.find(array => array !== locations)

  function handleClick() {
    setLocations(otherLocation);
  }

  const spots = locations.map(spot => {
    return (
      <>
        <SurfSpot
          key={spot.id}
          spot={spot}
        />
        <br></br>
        <br></br>
        <br></br>
      </>
    )
  })
  return (
    <div className="App">
        <div className="screens">
          <MapProvider>
            <MyMap />
          </MapProvider>
          <Video />
        </div>
        <div className="info">
          <div className="surf-spots">
            <div className="location">
              <button onClick={handleClick}>click</button>
              <h1>{locations[0].location}</h1>
              {/* <h1>Uluwatu, Bali 🇮🇩</h1> */}
              {/* <h1>🌊 Big Waves of the World 🌎</h1> */}
            </div>
            <div className="heading">
              <h2>Surf Spots 🏄‍♂️</h2>
            </div>
            {spots}
          </div>
        </div>
    </div>
  );
}
