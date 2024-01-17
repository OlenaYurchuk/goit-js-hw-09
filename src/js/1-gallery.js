import { images } from './gallery-images';

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

const markup = images.map(({preview, original, description}) =>
    `<li class="gallery-item">
    <a class="gallery-link" href="${original}">
    <img class="gallery-image" src="${preview}" 
    alt="${description}">
    </a></li>`).join('');

gallery.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
    captionDelay: 250,
});