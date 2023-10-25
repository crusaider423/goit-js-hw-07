import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

galleryRef.addEventListener("click", handelClickOnImage);
galleryRef.insertAdjacentHTML("beforeend", markupGallery(galleryItems));

const lightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});

function markupGallery(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`;
    })
    .join("");
}

function handelClickOnImage(e) {
  e.preventDefault();
  if (e.target.nodeName !=='A') {
    return;
  }

   lightbox.open()
 

  
}
