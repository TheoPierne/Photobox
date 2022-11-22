import { display_gallerie } from './gallery_ui.js';
import { load, prev, next } from './gallery.js';

const $load_gallery = document.getElementById('load_gallery');
const $next = document.getElementById('next');
const $previous = document.getElementById('previous');

$load_gallery.onclick = async e => {
  const data = await load();
  display_gallerie(data);
};

$next.onclick = async e => {
  next();
  const data = await load();
  display_gallerie(data);
}

$previous.onclick = async e => {
  prev();
  const data = await load();
  display_gallerie(data);
}