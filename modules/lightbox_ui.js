
const $lightbox_container = document.getElementById('lightbox_container');

export function display_lightbox(data){

}

export function show(){
	$lightbox_container.classList.remove('lightbox_container--hidden');
}

export function hide(){
	$lightbox_container.classList.add('lightbox_container--hidden');
}