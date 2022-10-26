import { loadResource } from "./api.js";

/**
 * La fonction retourne un objet photo à partir de l'URI passé dans un dataset dans le noeux en paramètre.
 * @param {Node} node - Noeux de l'arborescence DOM.
 * @returns {Photo} - Object de type Photo retourné par l'API.
 */
export async function load(node){
    const data = await loadResource(node.dataset.uri);
    return data;
}