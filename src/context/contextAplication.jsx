/* eslint-disable react/prop-types */
import { useState } from "react";
import { context } from "./constants";

export const ContextProvider = ({ children }) => {
    const [treeState, setTreeState] = useState({});
    const [MapLocation, setMapLocation] = useState({
        name: "Center Tree Area 501",
        lat: "-1.639403",
        lng: "-48.228363",
    });

    return (
        <context.Provider
            value={{
                treeState,
                setTreeState,
                MapLocation,
                setMapLocation,
            }}
        >
            {children}
        </context.Provider>
    );
};
