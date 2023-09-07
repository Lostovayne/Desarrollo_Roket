/* eslint-disable react/prop-types */
import { useState } from "react";
import { context } from "./constants";

export const ContextProvider = ({ children }) => {
    const [treeState, setTreeState] = useState({});

    return (
        <context.Provider
            value={{
                treeState,
                setTreeState,
            }}
        >
            {children}
        </context.Provider>
    );
};
