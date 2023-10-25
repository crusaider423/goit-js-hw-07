import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
galleryRef.addEventListener("click", handelClickOnGalleryLink);
window.addEventListener("keydown", handelClickOnEscap);
galleryRef.insertAdjacentHTML("beforeend", markupGallery(galleryItems));
let modal;

function markupGallery(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return ` <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
    })
    .join("");
}

function handelClickOnGalleryLink(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  modal = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}" alt="${e.target.alt}" >
`
  );
  modal.show();
}

function handelClickOnEscap(e) {
  if (e.code === "Escape") {
    modal.close();
  }
}
