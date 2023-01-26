import './App.css';
import MyMap from './MyMap';
import { MapProvider } from "react-map-gl";
import SurfSpot from './SurfSpot';
import data from './data';

export default function App() {
  const spots = data.map(spot => {
    return (
      <SurfSpot
        key={spot.id}
        spot={spot}
      />
    )
  })
  return (
    <div className="App">
      <div className="AppContainer">
          <MapProvider>
            <MyMap />
          </MapProvider>
        <h1>Surf Spots 🏄‍♂️</h1>
        <div className="surf-spots">
          {spots}
        </div>
      </div>
    </div>
  );
}
