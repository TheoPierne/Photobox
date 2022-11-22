import { loadResource } from "./api.js";

export let lesPhotos = [];

const pages = {};

let page = 1;

export async function load() {
    const uri = `/www/canals5/phox/api/photos/?page=${page}`;
    let data; 
    if (page in pages) {
        data = pages[page];
    } else {
        data = await loadResource(uri);
        pages[page] = data;
    }
    lesPhotos = lesPhotos.concat(data.photos);
    return data.photos;
}

export function next() {
    page++;
}

export function prev() {
    page = (page - 1 === 0) ? 1 : page + 1;
}