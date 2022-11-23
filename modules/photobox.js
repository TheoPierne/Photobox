import { display_gallerie } from './gallery_ui.js';
import { load, prev, next, last, first } from './gallery.js';

const $next = document.getElementById('next');
const $previous = document.getElementById('previous');
const $first = document.getElementById('first');
const $last = document.getElementById('last');

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

$first.onclick = async e => {
  first();
  const data = await load();
  display_gallerie(data);
}

$last.onclick = async e => {
  last();
  const data = await load();
  display_gallerie(data);
}