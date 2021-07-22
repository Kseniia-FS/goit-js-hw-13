import axios from 'axios';
import { getErrorMessage } from './notifications.js';
import getRefs from './refs.js';
const refs = getRefs();
export default class ImagesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  async fetchImg() {
    console.log(this);
    const BASE_URL = 'https://pixabay.com/api/';

    try {
      const response = await axios.get(
        `${BASE_URL}?key=22576222-4c579c663b204aa5d73730e1c&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`,
      );

     

      return { images: response.data.hits, total: response.data.totalHits };
    } catch (error) {
      console.log(error);
      getErrorMessage();
    }
  }
  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
