const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

// 1. find the api url (https://rickandmortyapi.com/api)
// 2. get fetch response from json
// 3. console log data to check what we receive

async function fetchcharacter() {
  const urlCharacters = "https://rickandmortyapi.com/api/character";
  const response = await fetch(urlCharacters);
  const data = await response.json();
  console.log(data.results);
}
fetchcharacter();
