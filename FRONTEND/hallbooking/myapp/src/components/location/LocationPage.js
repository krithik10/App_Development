import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './LocationPage.css';

// Fix for default icon issue with Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const LocationPage = () => {
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
    });
    const [error, setError] = useState('');

    const handleGetLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                    setError('');
                },
                (err) => {
                    setError('Unable to retrieve your location. Please try again.');
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    };

    return (
        <div className="location-page">
            <button className="get-location-button" onClick={handleGetLocation}>
                Check Location
            </button>
            {location.latitude && location.longitude ? (
                <div className="mapContainer">
                    <MapContainer
                        center={[location.latitude, location.longitude]}
                        zoom={13}
                        style={{ height: '100%', width: '100%' }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={[location.latitude, location.longitude]}>
                            <Popup>Your Current Location</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            ) : (
                <p className="location-message">{error ? error : 'Click the button to get your location.'}</p>
            )}
        </div>
    );
};

export default LocationPage;
