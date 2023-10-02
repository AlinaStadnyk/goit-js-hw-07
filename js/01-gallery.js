import { galleryItems } from "./gallery-items.js";

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

  const instance = basicLightbox.create(
    `
    <div class="modal">
        // <img src ="${event.target.dataset.source}"><a>Close</a>
    </div>`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", handlerClose);
      },

      onClose: (instance) => {
        document.removeEventListener("keydown", handlerClose);
      },
    }
  );

  instance.show();

  document.addEventListener("keydown", handlerClose);

  function handlerClose(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
