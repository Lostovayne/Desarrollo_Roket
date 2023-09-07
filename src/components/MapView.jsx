import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { UseTreeContext } from "./../hooks/useTreeContext";
import { useEffect, useState } from "react";

export const MapView = () => {
    const { MapLocation } = UseTreeContext();
    const [locations, setLocations] = useState(MapLocation);

    useEffect(() => {
        setLocations(MapLocation);
    }, [MapLocation]);

    const MapContent = () => {
        const map = useMap();

        useEffect(() => {
            if (map && locations) {
                map.flyTo([locations.lat, locations.lng], map.getZoom());
            }
        }, [map]);

        return null;
    };

    return (
        <MapContainer center={[locations.lat, locations.lng]} zoom={15} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={{ lat: locations.lat, lng: locations.lng }}>
                <Popup>{locations.name}</Popup>
            </Marker>
            <MapContent />
        </MapContainer>
    );
};
