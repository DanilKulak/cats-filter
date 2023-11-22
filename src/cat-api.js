import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_KEkqERhuLJ3h4kXHvlfN29AFAhkTxdDCpCCWvv4BQDXlzJA3JyLY5n44ZsT5FtRV";

export function fetchBreeds() {
  return axios.get("https://api.thecatapi.com/v1/breeds")
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}

export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  return axios.get(url)
    .then(response => response.data[0])
    .catch(error => Promise.reject(error));
}

