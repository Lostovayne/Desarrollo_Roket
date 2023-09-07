/* eslint-disable react/prop-types */
export const TreeSelect = ({ treeState, handleImageTree }) => {
    return (
        <div className="w-40 ml-6 pt-4 bg-blue-500">
            <select
                name="selectTree"
                id="selectTree"
                onChange={handleImageTree}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  py-2 absolute z-10 "
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
    );
};
