import './App.css';
import Map from './Map'
import CountryList from './CountryList';
import "leaflet/dist/leaflet.css"
import { useState } from 'react';
import Footer from './Footer';
import LanguageIcon from '@material-ui/icons/Language';

function App() {
  
  const [mapCenter,setMapCenter] = useState({lat: 34.0479,lng: 100.6197})
  const [mapZoom,setMapZoom] = useState(3)

  return (
    <div className="app">
      <div className = 'app-header'>
      <h1>My Asia</h1>
      <LanguageIcon fontSize = 'large'/>
      </div>
      <div className = 'app-map'>
        <Map center = {mapCenter} zoom = {mapZoom}/>
      </div>
      <div className = 'app-country-list'>
        <h2>Asian Countries</h2>
        <CountryList/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
