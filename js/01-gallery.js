import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galeryEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({
      preview,
      original,
      description,
    }) => `<li class="gallery__item js-target">
<a class="gallery__link js-target" href="${original}">
  <img
    class="gallery__image js-target"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`
  )
  .join("");

galeryEl.insertAdjacentHTML("beforeend", markup);



const handleClickOnImg = (e) => {
  e.preventDefault();

  if (!e.target.classList.contains("js-target")) {
    return;
  }
  const originalImgSource = e.target.dataset.source;
  const instance = basicLightbox
    .create(`<img src="${originalImgSource}" alt="">`);
    instance.show();

  galeryEl.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();

    }
  });
};
galeryEl.addEventListener("click", handleClickOnImg);


