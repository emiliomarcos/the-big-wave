import './App.css';
import MyMap from './MyMap';
import { MapProvider } from "react-map-gl";
import SurfSpot from './SurfSpot';
import dataOther from './dataOther';
import Video from './Video';

export default function App() {
  const spots = dataOther.map(spot => {
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
              <h1>Uluwatu, Bali 🇮🇩</h1>
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
