import { API_ENDPOINT, BASE_ENDPOINT, REQ_OPTIONS } from './constants.js';

/**
 * @typedef {Object} URL
 * @property {string} href L'adresse de la ressource
 */

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
 * @typedef {Object} Links
 * @property {URL} categorie Un url pour accéder aux données retourné par une catégorie liée à une/des photo(s)
 * @property {URL} comments Un url pour accéeder aux commentaires d'une photo 
 */

/**
 * @typedef {Object} APIResponse
 * @property {string} type Le type du contenu.
 * @property {Photo} photo Un object représentant les données de la photo
 * @property {Links} links Un object représentant tout les liens en rapport avec la photo
 */

/**
 * Fonction permettant de faire une requête sur l'API pour récupérer une image en fonction de son identifiant.
 * @param  {number} idPicture L'identifiant de la photo.
 * @return {APIResponse|Error}
 */
export async function loadPicture(idPicture) {
	let req;
	try {
		req = await fetch(`${API_ENDPOINT}/photos/${idPicture}`, REQ_OPTIONS);
		return req.json();
	} catch (e) {
		return e;
	}
}

/**
 * @typedef {Object} Categorie
 * @property {number} id L'identifiant de la catégorie
 * @property {string} nom Le nom de la catégorie
 * @property {string} descr La description de la catégorie
 */

/**
 * @typedef {Object} CategorieLink
 * @property {URL} photos
 */

/**
 * @typedef {Object} ResourceResponse
 * @property {string} type Le type du contenu
 * @property {Categorie} categorie Un object représentant une catégorie
 * @property {CategorieLink} links Un object représentant une URL qui mène vers une image
 */

/**
 * Fonction permettant de faire une requête pour récupérer des resources.
 * @param  {string} uri L'adresse de la resource.
 * @return {ResourceResponse|Error}
 */
export async function loadResource(uri) {
	let req;
	try {
		req = await fetch(`${BASE_ENDPOINT}${uri}`);
		return req.json();
	} catch (e) {
		return e;
	}
}
