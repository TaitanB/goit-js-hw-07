import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryImage = document.querySelector(".gallery");

galleryImage.addEventListener("click", selectImage);

const itemImage = galleryItems.map((item) => {
  const itemEl = document.createElement("div");
  itemEl.classList.add("gallery__item");

  const linkEl = document.createElement("a");
  linkEl.classList.add("gallery__link");
  linkEl.href = item.original;

  const imageEl = document.createElement("img");
  imageEl.classList.add("gallery__image");
  imageEl.src = item.preview;
  imageEl.dataset.source = linkEl.href;
  imageEl.alt = item.description;

  linkEl.appendChild(imageEl);

  console.log(linkEl);

  itemEl.appendChild(linkEl);

  console.log(itemEl);

  return itemEl;
});

console.log(itemImage);

galleryImage.append(...itemImage);

function selectImage(item) {
  item.preventDefault();

  if (item.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
      <img src="${item.target.dataset.source}" width="800" height="600">
  `);

  instance.show();

  galleryImage.addEventListener("keydown", (item) => {
    if (item.code === "Escape") {
      instance.close();
    }
  });
}
