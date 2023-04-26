import './App.css';
import React, { useState } from 'react';
import { Footer, Forecast, MyMap, Navbar, SurfSpot, Video } from './components';
import { MapProvider } from "react-map-gl";
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { data, dataBig } from './data';

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
              <h3 className="bold-heading">📍 {locations[0].location}</h3>
              <button onClick={handleClickBig} className="explore-bigwaves">Explore Big Waves 🌊</button>
            </div>
            <div className="forecast">
              <Forecast lat={locations[0].latitude} long={locations[0].longitude} />
            </div>
            <div className="heading">
              <h4 className="bold-heading">Surf Spots 🏄‍♂️</h4>
            </div>
            {spots}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
