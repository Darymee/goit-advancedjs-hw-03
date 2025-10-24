import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchPixabayImages } from './js/pixabay-api';
import { renderGalleryMarkup } from './js/render-functions';

const refs = {
  form: document.querySelector('.search-form'),
  input: document.querySelector('.search-input'),
  submitBtn: document.querySelector('.search-button'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader-wrapper'),
};
let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 200,
});

function showLoader() {
  refs.loader.classList.remove('visually-hidden');
}

function hideLoader() {
  refs.loader.classList.add('visually-hidden');
}

function clearGallery() {
  refs.gallery.innerHTML = '';
}

function disableForm(disabled) {
  refs.submitBtn.disabled = disabled;
  refs.input.disabled = disabled;
}

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const query = refs.input.value.trim();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    refs.input.focus();
    return;
  }

  clearGallery();
  showLoader();
  disableForm(true);

  fetchPixabayImages(query)
    .then(data => {
      const hits = Array.isArray(data?.hits) ? data.hits : [];
      if (hits.length === 0) {
        iziToast.info({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      const markup = renderGalleryMarkup(hits);
      refs.gallery.innerHTML = markup;

      lightbox.refresh();
    })
    .catch(err => {
      console.error(err);
      iziToast.error({
        message: 'Something went wrong. Please try again later',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
      disableForm(false);
      refs.input.value = '';
    });
});
