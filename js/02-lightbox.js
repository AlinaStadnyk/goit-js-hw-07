import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const selectors = {
  gallery: document.querySelector(".gallery"),
};

selectors.gallery.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));
function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}"" alt="${description}" />
   </a>
</li>
    `
    )
    .join("");
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captions: true,
  captionDelay: 250,
  enableKeyboard: true,
});
