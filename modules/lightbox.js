import { loadResource } from "./api.js";

export async function load(node){
    const data = await loadResource(node.dataset.uri);
    return data;
}