import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
galleryRef.addEventListener("click", handelClickOnGalleryLink);
galleryRef.insertAdjacentHTML("beforeend", markupGallery(galleryItems));

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

  instance(e);
}

function instance(e) {
  const modal = basicLightbox.create(
    `<img src="${e.target.dataset.source}" alt="${e.target.alt}" ></img>`,
    {
      onShow: (modal) => window.addEventListener("keydown", handelClickOnEscap),
      onClose: (modal) =>
        window.removeEventListener("keydown", handelClickOnEscap),
    }
  );
  modal.show();
  function handelClickOnEscap(eve) {
    if (eve.code === "Escape") {
      modal.close();
    }
  }
}

//  Гляньте цей приклад --------------------------------------------------------------

// modal.show(() =>
//   window.addEventListener("keydown", (e) => {
//     if (e.code === "Escape") modal.close();
//   },{once:true})
// );
