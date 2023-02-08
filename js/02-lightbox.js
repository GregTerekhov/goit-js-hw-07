import { galleryItems } from './gallery-items.js';
// Change code below this line
import * as basicLightbox from 'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js'
import * as SimpleLightbox from "https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.12.1/simple-lightbox.min.js";

const gallery = document.querySelector('.gallery');
const galleryImage = document.querySelectorAll('.gallery__image');
const galleryMarkup = createGalleryCards (galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

gallery.addEventListener('click', onGalleryClick);

function createGalleryCards (galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return     `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `
    })
    .join('');
}

function onGalleryClick (event) {
    event.preventDefault();

    if(event.target !== galleryImage) {
        return;
    }
}

const onCloseModal = (event) => {
    const ESC_KEY = 'Escape';

    if(event.code === ESC_KEY) {
        instance.close();
    }
}

const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
{
    onShow: instance => {
        window.addEventListener('keydown', onCloseModal);
    },

    onClose: instance => {
        window.removeEventListener('keydown', onCloseModal);
    }
}
);
instance.show()

console.log(galleryItems);
