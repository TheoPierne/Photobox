import { loadResource } from "./api.js";

export let lesPhotos = [];

export async function load(){
    let uri = '/www/canals5/phox/api/photos';
    const data = await loadResource(uri);
    lesPhotos = lesPhotos.concat(data);
    return data.photos;
}