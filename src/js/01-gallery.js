import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
const gallaryWrap = document.querySelector('.gallery');
console.log(gallaryWrap);
const gallery = galleryItems
  .map(
    item =>
      `<ul class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-original="${item.original}"
            alt="${item.description}"
          />
        </a>
      </ul>`
  )
  .join('');

gallaryWrap.innerHTML = gallery;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
