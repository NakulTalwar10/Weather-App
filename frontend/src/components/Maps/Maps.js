import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Maps.css'; // Import custom CSS file for styling

const Maps = ({ city, temperature, latitude, longitude }) => {
  const position = [latitude, longitude]; // Default position for the marker

  return (
    <div className="maps-container">
      <h1 className="maps-title">Maps</h1>
      <MapContainer center={position} zoom={5} className="maps-map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>
            {city}
            <br />
            Temperature: {temperature}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Maps;
