import './App.css';
import MyMap from './MyMap';
import { MapProvider } from "react-map-gl";

export default function App() {
  return (
    <div className="App">
      <div className="AppContainer">
        <MapProvider>
          <MyMap />
        </MapProvider>
        <h1>Surf Spots 🏄‍♂️</h1>
        <div className="surf-spots">
          <h3>🌊 Berawa: </h3>
            <img src="https://i.ytimg.com/vi/XTuRFOLBzbU/maxresdefault.jpg" alt="Berawa" className="spot-img"/>
          <h3>🌊 Batu Bolong: </h3>
            <img src="https://i.ytimg.com/vi/vSOlFG_v9JQ/maxresdefault.jpg" alt="Batu Bolong" className="spot-img"/>
          <h3>🌊 Echo: </h3>
            <img src="https://i.ytimg.com/vi/0eAxg5tHtMk/maxresdefault.jpg" alt="Echo" className="spot-img"/>
          <h3>🌊 Pererenan: </h3>
            <img src="https://i.ytimg.com/vi/sXHrYzeh8Ro/maxresdefault.jpg" alt="Perenan" className="spot-img"/>
        </div>
      </div>
    </div>
  );
}
