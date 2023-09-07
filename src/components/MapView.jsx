import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { UseTreeContext } from "./../hooks/useTreeContext";
import { MapContent } from "./MapContent";

export const MapView = () => {
    const { MapLocation } = UseTreeContext();
    const [locations, setLocations] = useState(MapLocation);

    useEffect(() => {
        setLocations(MapLocation);
    }, [MapLocation]);

    return (
        <MapContainer center={[locations.lat, locations.lng]} zoom={15} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={{ lat: locations.lat, lng: locations.lng }}>
                <Popup>{locations.name}</Popup>
            </Marker>
            <MapContent locations={locations} />
        </MapContainer>
    );
};
