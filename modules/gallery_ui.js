import { BASE_ENDPOINT } from './constants.js';
import { display_lightbox } from './lightbox_ui.js';

/**
 * Variable représentant le container de la galerie.
 * @type {HTMLDivElement}
 */
const $gallery_container = document.getElementById('gallery_container');


/**
 * Fonction permettant d'afficher une galerie à partir des données de l'API.
 * @param {Array} gallery Les données de l'API représentées sous forme d'un tableau d'object. 
 */
export function display_gallerie(gallery = []) {
	const $el = [];
	gallery.forEach(e => {
		const { thumbnail: { href: src } } = e.photo;
		const { self: { href: uri } } = e.links;
		const $vignette = makeVignette({ uri, src });
		$el.push($vignette);
	});
	$gallery_container.replaceChildren(...$el);
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
function makeVignette({ uri, src } = {}) {
	const $divVignette = document.createElement('div');
	const $img = document.createElement('img');

	$divVignette.classList.add('vignette');
	$img.dataset.uri = uri;
	$img.src = `${BASE_ENDPOINT}${src}`;

	$divVignette.appendChild($img);

	$img.addEventListener('click', () => {
		display_lightbox(uri);
	});

	return $divVignette;
}