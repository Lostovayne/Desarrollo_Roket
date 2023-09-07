import FetchApiRocket from "../services/ApiRoket";

export const adapterResponse = async () => {
    const { objetos } = await FetchApiRocket();
    const data = objetos.map((objeto) => {
        return {
            name: objeto.object_name,
            image: objeto.image_url,
            lon: objeto.lon,
            lat: objeto.lat,
        };
    });
    return data;
};
