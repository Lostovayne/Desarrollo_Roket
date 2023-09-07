import { useState } from "react";
import { ImageTree, InfoLocation, MapView, TreeSelect } from "./components";
import { UseTreeContext } from "./hooks/useTreeContext";
import { SearchTree } from "./utils/SearchTree";

export default function App() {
    const { treeState, setMapLocation } = UseTreeContext();
    const [imagTree, setImagTree] = useState("");

    const handleImageTree = (e) => {
        const LocationSelected = e.target.value;
        const selectedTree = SearchTree(treeState, LocationSelected);
        setMapLocation({
            name: selectedTree.name,
            lat: selectedTree.lat,
            lng: selectedTree.lon,
        });
        setImagTree({
            image: selectedTree.image,
            name: selectedTree.name,
        });
    };

    return (
        <div className="flex items-center justify-center flex-col  md:min-h-screen">
            {treeState.length > 0 ? (
                <div className="relative w-full">
                    <div className=" absolute z-50 w-[21rem] top-0 right-0 bg-white min-h-screen ">
                        <TreeSelect treeState={treeState} handleImageTree={handleImageTree} />
                        <ImageTree
                            image={imagTree.image || treeState[0].image}
                            name={imagTree.name || treeState[0].name}
                        />

                        <InfoLocation />
                    </div>
                    <MapView />
                </div>
            ) : (
                <div>...Loading</div>
            )}
        </div>
    );
}
