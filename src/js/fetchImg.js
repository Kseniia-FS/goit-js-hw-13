import ImagesApiService from './api-service';
import cardTmp from '../templates/img-card.hbs';
import getRefs from './refs';
import { getMessage, getErrorMessage } from './notifications.js';

const images = new ImagesApiService();
const refs = getRefs();

refs.loadMoreBtn.classList.add('is-hidden');
refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', addImg);

function onSearch(e) {
  e.preventDefault();
  images.query = e.currentTarget.elements.searchQuery.value;

  if (images.query.trim() === '') {
    getErrorMessage();
  }
  

  images.resetPage();
  clearCards();
  showImg();
}

function renderCards(images) {
  const markup = cardTmp(images);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

function clearCards() {
  refs.gallery.innerHTML = '';
}

function addImg() {
  showImg();
}
function showImg() {
  images.fetchImg().then(({ images, total }) => {
    renderCards(images);
    if(total === 0){
        getErrorMessage();
        refs.loadMoreBtn.classList.add('is-hidden');
    }else {

        getMessage(total);
        refs.loadMoreBtn.classList.remove('is-hidden');
    }
  });
}
