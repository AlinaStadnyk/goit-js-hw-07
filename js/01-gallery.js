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
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `
    )
    .join("");
}
selectors.gallery.addEventListener("click", handlerClick);
function handlerClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }

  const instance = basicLightbox.create(`
      <div class="modal">
    <a class="gallery__link" href="">
      <img
        class="gallery__image"
        src=""
        data-source=""
        alt="description"
      />
    </a>
  </div>
  `);
  instance.show();
}
