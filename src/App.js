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
        <h1>Hellooo</h1>
      </div>
    </div>
  );
}
