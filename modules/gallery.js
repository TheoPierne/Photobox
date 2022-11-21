import { loadResource } from "./api.js";

export let lesPhotos = [];

export async function load() {
    const uri = '/www/canals5/phox/api/photos';
    const data = await loadResource(uri);
    lesPhotos = lesPhotos.concat(data.photos);
    return data.photos;
}