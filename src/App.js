import './App.css';
import MyMap from './MyMap';
import { MapProvider } from "react-map-gl";
import SurfSpot from './SurfSpot';
import data from './data';
import Video from './Video';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import dataBig from './dataBig';

export default function App() {
  const [locations, setLocations] = React.useState(data[0]);

  const otherLocation = data.find(array => array !== locations)

  function handleClick() {
    setLocations(otherLocation);
  }

  function handleClickBig() {
    setLocations(dataBig);
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
    <>
      <Navbar />
      <div className="App">
        <div className="screens">
          <MapProvider>
            <MyMap lat={locations[0].latitude} long={locations[0].longitude} zoom={locations[0].zoom} locs={locations} oths={otherLocation}/>
          </MapProvider>
          <Video link={locations[0].videoUrl}/>
        </div>
        <div className="info">
          <div className="surf-spots">
            <div className="location">
              <button onClick={handleClick} className="explore">Explore Places 🌎</button>
              <h1>📍 {locations[0].location}</h1>
              {/* <h1>Uluwatu, Bali 🇮🇩</h1> */}
              {/* <h1>🌊 Big Waves of the World 🌎</h1> */}
              <button onClick={handleClickBig} className="explore-bigwaves">Explore Big Waves 🌊</button>
            </div>
            <div className="heading">
              <h2>Surf Spots 🏄‍♂️</h2>
            </div>
            {spots}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
