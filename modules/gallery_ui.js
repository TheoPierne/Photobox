import { BASE_ENDPOINT } from './constants.js';

/**
 * Variable représentant le container de la galerie.
 * @type {HTMLDivElement}
 */
const $gallery_container = document.getElementById('gallery_container');


/**
 * Fonction permettant d'afficher une galerie à partir des données de l'API.
 * @param {Array} gallery Les données de l'API représentées sous forme d'un tableau d'object. 
 */
export function display_gallerie(gallery = []){
	gallery.forEach(e => {
		const { thumbnail: { href: src } } = e.photo;
		const { self: { href: uri } } = e.links;
		const $vignette = makeVignette({ uri, src });
		$gallery_container.appendChild($vignette);
	});
}

/**
 * @typedef {Object} VignetteData
 * @property {string} uri L'adresse complete des informations de la photo.
 * @property {string} src L'adresse de la photo.
 */

/**
 * Fonction permettant de créer une vignette pour la galerie.
 * @param {VignetteData} params
 * @returns {HTMLDivElement}
 */
function makeVignette({ uri, src } = {}){
	const $divVignette = document.createElement('div');
	const $img = document.createElement('img');

	$divVignette.classList.add('vignette');
	$img.dataset.uri = uri;
	$img.src = `${BASE_ENDPOINT}${src}`;

	$divVignette.appendChild($img);

	return $divVignette;
}