import { display_gallerie } from './gallery_ui.js';
import { load, prev, next } from './gallery.js';

const $next = document.getElementById('next');
const $previous = document.getElementById('previous');

window.addEventListener('DOMContentLoaded', async () => {
  const data = await load();
  display_gallerie(data);
});

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