import { display_gallerie } from './gallery_ui.js';
import { load, prev, next } from './gallery.js';
import { ajouterCommentaire } from './lightbox_ui.js';

const $load_gallery = document.getElementById('load_gallery');
const $next = document.getElementById('next');
const $previous = document.getElementById('previous');
const $btnSubmit = document.getElementById('btn-submit');

$load_gallery.onclick = async e => {
  init();
};

$next.onclick = async e => {
  next();
  init();
}

$previous.onclick = async e => {
  prev();
  init();
}

(async function init() {
  const data = await load();
  display_gallerie(data);
})();

$btnSubmit.onclick = () => {
  ajouterCommentaire();
}