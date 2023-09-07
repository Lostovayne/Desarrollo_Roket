export const SearchTree = (state, LocationSelected) => {
    const FindData = state.find((tree) => tree.name === LocationSelected);
    return FindData;
};
