import './App.css';
import MyMap from './MyMap';
import { MapProvider } from "react-map-gl";
import SurfSpot from './SurfSpot';
import data from './data';
import Video from './Video';
import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import dataBig from './dataBig';
import Forecast from './Forecast';
import { DropdownButton, Dropdown } from 'react-bootstrap';

export default function App() {
  const [locations, setLocations] = useState(data[0]);

  function handleSelect(index) {
    setLocations(data[index]);
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

  const dropdownItems = data.map((spots, index) => {
    return (
      <Dropdown.Item eventKey={index}>
        {spots[0].location}
      </Dropdown.Item>
    )
  })

  return (
    <>
      <Navbar />
      <div className="App">
        <div className="screens">
          <MapProvider>
            <MyMap lat={locations[0].latitude} long={locations[0].longitude} zoom={locations[0].zoom} locs={locations} />
          </MapProvider>
          <Video link={locations[0].videoUrl}/>
        </div>
        <div className="info">
          <div className="surf-spots">
            <div className="location">
              <DropdownButton title="Explore Places 🌎" className="explore" onSelect={handleSelect} drop="start">
                {dropdownItems}
              </DropdownButton>
              <h2>📍 {locations[0].location}</h2>
              <button onClick={handleClickBig} className="explore-bigwaves">Explore Big Waves 🌊</button>
            </div>
            <div className="forecast">
              <Forecast lat={locations[0].latitude} long={locations[0].longitude} />
            </div>
            <div className="heading">
              <h3>Surf Spots 🏄‍♂️</h3>
            </div>
            {spots}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
