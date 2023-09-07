import { useState } from "react";
import { UseTreeContext } from "./hooks/useTreeContext";

export default function App() {
    const { treeState, setTreeState } = UseTreeContext();
    const [imagTree, setImagTree] = useState("");

    const handleImageTree = (e) => {
        const LocationSelected = e.target.value;
        const selectedTree = treeState.find((tree) => tree.name === LocationSelected);
        if (selectedTree) {
            setImagTree(selectedTree.image);
        }
    };

    return (
        <div className="flex items-center justify-center flex-col  min-h-screen">
            {treeState.length > 0 ? (
                <div className="space-y-4">
                    <div>
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
                        className="w-96 h-96  object-cover rounded-lg transition-all duration-1000 ease-in-out"
                        alt={treeState[0].name}
                    />
                </div>
            ) : (
                <div>...Loading</div>
            )}
        </div>
    );
}
