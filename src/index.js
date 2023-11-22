import SlimSelect from "slim-select";
import * as catApi from "./cat-api.js";

document.addEventListener("DOMContentLoaded", () => {
  const breedSelect = new SlimSelect(".breed-select");

  catApi.fetchBreeds()
    .then(breeds => {
      hideLoader();
      hideError();
      breedSelect.setData(breeds.map(breed => ({ text: breed.name, value: breed.id })));
      breedSelect.onChange = handleBreedSelectChange;
    })
    .catch(() => {
      hideLoader();
      showError();
    });

  function handleBreedSelectChange() {
    const selectedBreedId = breedSelect.selected();
    if (selectedBreedId) {
      showLoader();
      catApi.fetchCatByBreed(selectedBreedId)
        .then(catData => {
          hideLoader();
          displayCatInfo(catData);
        })
        .catch(() => {
          hideLoader();
          showError();
        });
    }
  }

  function displayCatInfo(catData) {
    const catInfoDiv = document.querySelector(".cat-info");
    catInfoDiv.innerHTML = `
      <img src="${catData.url}" alt="Cat">
      <p>Breed: ${catData.breeds[0].name}</p>
      <p>Description: ${catData.breeds[0].description}</p>
      <p>Temperament: ${catData.breeds[0].temperament}</p>
    `;
    catInfoDiv.style.display = "block";
  }

  function showLoader() {
    document.querySelector(".loader").style.display = "block";
  }

  function hideLoader() {
    document.querySelector(".loader").style.display = "none";
  }

  function showError() {
    document.querySelector(".error").style.display = "block";
  }

  function hideError() {
    document.querySelector(".error").style.display = "none";
  }
});
