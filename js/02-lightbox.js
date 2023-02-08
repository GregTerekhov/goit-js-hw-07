import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryCards(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryMarkup);
gallery.addEventListener('click', onGalleryClick);

function createGalleryCards(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
        `;
    })
    .join("");
}

function onGalleryClick(event) {
  event.preventDefault();
  const lightbox = new simpleLightbox(".gallery__item", {
    captionDelay: 250,
    captionData: "alt",
  });
}

console.log(galleryItems);
