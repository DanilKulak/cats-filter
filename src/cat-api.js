
import axios from 'axios';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

export const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

axios.defaults.headers.common['x-api-key'] =
  'live_KEkqERhuLJ3h4kXHvlfN29AFAhkTxdDCpCCWvv4BQDXlzJA3JyLY5n44ZsT5FtRV';

const BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  showLoader();
  return axios
    .get(`${BASE_URL}/breeds`)
    .then(response => {
      hideLoader();
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching breeds:', error);
      Notiflix.Notify.failure('Oops! Something went wrong while fetching breeds.');
      hideLoader();
    });
}

export function fetchCatByBreed(breedId) {
  showLoader();
  return axios
    .get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
    .then(response => {
      hideLoader();
      return response.data[0];
    })
    .catch(() => {
      Notiflix.Notify.failure('Oops! Something went wrong while fetching cat information.');
      hideLoader();
    });
}

function hideLoader() {
  refs.loader.classList.add('hidden');
}

function showLoader() {
  refs.loader.classList.remove('hidden');
}











// import axios from 'axios';
// import Notiflix from 'notiflix';
// import "notiflix/dist/notiflix-3.2.6.min.css"

// export const refs = {
//   select: document.querySelector('.breed-select'),
//   loader: document.querySelector('.loader'),
//   error: document.querySelector('.error'),
//   catInfo: document.querySelector('.cat-info'),
// };


// axios.defaults.headers.common['x-api-key'] =
//   'live_KEkqERhuLJ3h4kXHvlfN29AFAhkTxdDCpCCWvv4BQDXlzJA3JyLY5n44ZsT5FtRV';

// const BASE_URL = 'https://api.thecatapi.com/v1';

// export function fetchBreeds() {
//   showLoader();
//   return axios
//     .get(`${BASE_URL}/breeds`)
//     .then(response => {
//       hideLoader();
//       return response.data;
//     })
//     .catch(() => {
//       Notiflix.Notify.failure(refs.error.textContent)
//       hideLoader();
//     });
// }

// export function fetchCatByBreed(breedId) {
//   showLoader();
//   return axios
//     .get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
//     .then(response => {
//       hideLoader();
//       return response.data[0];
//     })
//     .catch(() => {
//       Notiflix.Notify.failure(refs.error.textContent)
//       hideLoader();
//     });
// }

// function hideLoader() {
//   refs.loader.classList.add("hidden");
// }

// function showLoader() {
//   refs.loader.classList.remove("hidden");

// }




// live_KEkqERhuLJ3h4kXHvlfN29AFAhkTxdDCpCCWvv4BQDXlzJA3JyLY5n44ZsT5FtRV 