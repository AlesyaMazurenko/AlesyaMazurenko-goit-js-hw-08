// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");
const galleryImagesMarkup = createGalleryItems(galleryItems);
// evt.pnpm i simplelightboxreventDefault();

galleryBox.insertAdjacentHTML("beforeend", galleryImagesMarkup);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
            </a>
         </li> `;
  }).join('');
}

let gallery = new SimpleLightbox(".gallery__item", {
    captionsData: "title",
    captionPosition: "bottom",
    captionDelay: 250,
}
);
console.log(gallery);
