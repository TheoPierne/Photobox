import { loadResource } from "./api.js";

export let lesPhotos = [];

const pages = {};

let page = 1;

export async function load() {
    let data; 
    if (page in pages) {
        data = pages[page];
    } else {
        const uri = `/www/canals5/phox/api/photos/?page=${page}`;
        data = await loadResource(uri);
        pages[page] = data;
    }
    lesPhotos = lesPhotos.concat(data.photos);
    console.log(pages)
    return data.photos;
}

export function next() {
    page++;
}

export function prev() {
    page = (page - 1 === 0) ? 1 : page - 1;
}

export function first() {
    page = 1;
}

export function last() {
    const pagesLength = Object.keys(pages).length;
    if (pagesLength) {
        console.log(pages[Object.keys(pages)[pagesLength-1]])
        page = +(pages[Object.keys(pages)[pagesLength-1]].links.last.href.match(/\?page=(\d+)/)[1]);
    } else {
        const uri = `/www/canals5/phox/api/photos/?page=${page}`;
        loadResource(uri).then(data => {
            pages[page] = data;
            page = +(data.links.last.href.match(/\?page=(\d+)/)[1]);
        });
    }

}