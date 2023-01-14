import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryImage = document.querySelector(".gallery");

galleryImage.addEventListener("click", selectImage);

const itemImage = galleryItems.map((item) => {
  const itemEl = document.createElement("a");
  itemEl.classList.add("gallery__item");
  itemEl.href = item.original;

  const imageEl = document.createElement("img");
  imageEl.classList.add("gallery__image");
  imageEl.src = item.preview;
  imageEl.alt = item.description;

  itemEl.appendChild(imageEl);

  //   console.log(itemEl);

  return itemEl;
});

// console.log(itemImage);

galleryImage.append(...itemImage);

function selectImage(item) {
  item.preventDefault();

  if (item.target.nodeName !== "IMG") {
    return;
  }

  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
