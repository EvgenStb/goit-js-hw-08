// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery")
const galleryMarkup = createGalleryMarkup(galleryItems)


gallery.insertAdjacentHTML('beforeend', galleryMarkup);


function createGalleryMarkup(items) {
return items.map(({preview, original, description}) => {
     return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
  </div>`;
}).join('')}

const galeryModlalWindows = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});
galeryModlalWindows.on('show.simplelightbox');;
console.log(galleryItems);
