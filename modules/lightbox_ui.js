import { loadResource } from './api.js';
import { API_ENDPOINT, BASE_ENDPOINT } from './constants.js';
import { lesPhotos } from './gallery.js';

const $lightbox_container = document.getElementById('lightbox_container');
const $lightbox_full_img = document.getElementById('lightbox_full_img');
const $lightbox_title = document.getElementById('lightbox_title');
const $lightbox_close = document.getElementById('lightbox_close');
const $espace_commentaires = document.getElementById('commentaires');
const $id_photo = document.getElementById('id_photo');
const $pseudo = document.getElementById('pseudo');
const $titre = document.getElementById('titre');
const $content = document.getElementById('content');

$lightbox_close.onclick = () => {
	hide();
}

let commentaires = [];

export async function display_lightbox(uri) {
	const data = lesPhotos.find(e => e.links.self.href === uri);
	if (data) {
		$lightbox_full_img.src = `${BASE_ENDPOINT}${data.photo.original.href}`;
		$lightbox_title.innerText = data.photo.titre;
		$id_photo.value = data.photo.id;
		commentaires = await loadResource(uri + '/comments');
		if (commentaires.comments) {
			let $comments = [];
			commentaires.comments.forEach(comment => {
				$comments.push(displayComment(comment));
			});
			$espace_commentaires.innerHTML = $comments.join('');
		}
		show();
	}
}

export function show() {
	$lightbox_container.classList.remove('lightbox_container--hidden');
}

export function hide() {
	$lightbox_container.classList.add('lightbox_container--hidden');
}

function displayComment(comment) {
	return `
	<div class="commentaire">
		<h4>${comment.titre}</h4>
		<span>De ${comment.pseudo}</span>
		<p>${comment.content}</p>
  	</div>`;
}

export async function ajouterCommentaire() {
	await fetch(`${API_ENDPOINT}/photos/${$id_photo.value}/comments`, {
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify({
			titre: $titre.value,
			content: $content.value,
			pseudo: $pseudo.value
		})
	});
}