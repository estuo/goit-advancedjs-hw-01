import SimpleLightbox from 'simplelightbox';
import images from './imgages';

const galleryContainer = document.querySelector('.gallery');

galleryContainer.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;
});

const imageCards = images.map(createGalleryItem).join('');
galleryContainer.innerHTML = imageCards;

new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryItem({ preview, original, description }) {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`;
}
