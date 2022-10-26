import { loadResource } from "./api.js";

/**
 * @typedef {Object} Photo
 * @property {number} id L'identifiant de la photo
 * @property {string} titre Le titre de la photo
 * @property {string} file Le nom du fichier de la photo
 * @property {string} descr Une description de la photo
 * @property {string} format Le format de la photo (jpeg, png)
 * @property {string} type Le type MIME de la photo
 * @property {number} size La taille en octet de la photo
 * @property {number} width La largeur en pixel de la photo
 * @property {number} height La hauteur en pixel de la photo
 * @property {URL} url Un object représentant l'url de la photo
 */

/**
 * La fonction retourne un objet photo à partir de l'URI passé dans un dataset dans le noeux en paramètre.
 * @param {Node} node - Noeux de l'arborescence DOM.
 * @returns {Photo} - Object de type Photo retourné par l'API.
 */
export function load(node) {
    return loadResource(node.dataset.uri);
}