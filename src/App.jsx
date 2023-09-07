import { useState } from "react";
import { ImageTree, MapView, TreeSelect } from "./components";
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
                <main className="space-y-4  max-md:flex-col justify-center flex  items-center space-x-3 ">
                    <div className=" flex flex-col gap-5">
                        <TreeSelect treeState={treeState} handleImageTree={handleImageTree} />
                        <ImageTree
                            image={imagTree.image || treeState[0].image}
                            name={imagTree.name || treeState[0].name}
                        />
                    </div>
                    <MapView />
                </main>
            ) : (
                <div>...Loading</div>
            )}
        </div>
    );
}
