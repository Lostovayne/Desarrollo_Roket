import { useState } from "react";
import { UseTreeContext } from "./hooks/useTreeContext";
import { MapView } from "./components/MapView";
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
        setImagTree(selectedTree.image);
    };

    return (
        <div className="flex items-center justify-center flex-col  md:min-h-screen">
            {treeState.length > 0 ? (
                <main className="space-y-4  max-md:flex-col justify-center flex  items-center space-x-3 ">
                    <div className=" flex flex-col gap-5">
                        <div className="">
                            <h3>Select Location</h3>
                            <select
                                name="selectTree"
                                id="selectTree"
                                onChange={handleImageTree}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            >
                                {treeState.map((tree) => {
                                    return (
                                        <option value={tree.name} key={tree.name}>
                                            {tree.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

                        <img
                            src={imagTree || treeState[0].image}
                            className=" max-md:w-56 max-md:h-56  md:w-96 md:h-96  object-cover rounded-lg transition-all duration-1000 ease-in-out"
                            alt={treeState[0].name}
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
