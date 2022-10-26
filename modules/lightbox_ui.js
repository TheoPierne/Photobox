import { BASE_ENDPOINT } from './constants.js';
import { lesPhotos } from './gallery.js';

const $lightbox_container = document.getElementById('lightbox_container');
const $lightbox_full_img = document.getElementById('lightbox_full_img');
const $lightbox_title = document.getElementById('lightbox_title');

export function display_lightbox(uri){
	const data = lesPhotos.find(e => e.links.self.uri === uri);
	if (data) {
		$lightbox_full_img.src = `${BASE_ENDPOINT}${data.photo.original.href}`;
		$lightbox_title.innerText = data.photo.titre;
		show();
	}
}

export function show(){
	$lightbox_container.classList.remove('lightbox_container--hidden');
}

export function hide(){
	$lightbox_container.classList.add('lightbox_container--hidden');
}