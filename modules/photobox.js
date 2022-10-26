import { display_gallerie } from './gallery_ui.js';
import { load } from './gallery.js';

const $load_gallery = document.getElementById('load_gallery');

$load_gallery.onclick = async e => {
  const data = await load();
  display_gallerie(data);
};