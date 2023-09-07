import { useContext, useEffect } from "react";
import { context } from "./../context/constants";
import { adapterResponse } from "../adapters/adapterResponse";

export const UseTreeContext = () => {
    const { treeState, setTreeState, MapLocation, setMapLocation } = useContext(context);

    useEffect(() => {
        const dataAdapter = async () => {
            const data = await adapterResponse();
            setTreeState(data);
        };
        dataAdapter();
    }, [setTreeState]);

    return {
        treeState,
        setTreeState,
        MapLocation,
        setMapLocation,
    };
};
