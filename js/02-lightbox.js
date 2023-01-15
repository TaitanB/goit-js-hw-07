import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

//

const galleryImage = document.querySelector(".gallery");

galleryImage.addEventListener("click", selectImage);

const createImg = ({ preview, original, description }) => {
  return `<a class="gallery__item" href="${original}">
            <img
              class="gallery__image"
              src="${preview}" 
              alt="${description}" 
            />
        </a>`;
};

const arrImg = galleryItems.map(createImg).join("");

galleryImage.insertAdjacentHTML("beforeend", arrImg);

function selectImage(item) {
  if (item.target.nodeName !== "IMG") {
    return;
  }
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
