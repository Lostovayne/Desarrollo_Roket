/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useMap } from "react-leaflet";

export const MapContent = ({ locations }) => {
    const map = useMap();

    useEffect(() => {
        if (map && locations) {
            map.flyTo([locations.lat, locations.lng], map.getZoom());
        }
    }, [locations, map]);

    return null;
};
