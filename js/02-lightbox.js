import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galeryEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`
  )
  .join("");

galeryEl.insertAdjacentHTML("beforeend", markup);

const handleClickOnImg = (e) => {
  e.preventDefault();
};

galeryEl.addEventListener("click", handleClickOnImg);

const lightbox = new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionsData: "alt",
  captionDelay: 250,
});

console.log(lightbox);
