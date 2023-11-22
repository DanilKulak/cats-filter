import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_KEkqERhuLJ3h4kXHvlfN29AFAhkTxdDCpCCWvv4BQDXlzJA3JyLY5n44ZsT5FtRV";
import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";

const breeds = await fetchBreeds();
console.log("Breeds:", breeds);

const catInfo = await fetchCatByBreed("yourBreedId");
console.log("Cat Info:", catInfo);