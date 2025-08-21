import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

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
let maxPage = 1;
let page = 1;
const searchQuery = "";

// 1. find the api url (https://rickandmortyapi.com/api)
// 2. get fetch response from json
// 3. console log data to check what we receive
nextButton.addEventListener("click", () => {
  if (page < maxPage) page++;
  fetchcharacter();
});
prevButton.addEventListener("click", () => {
  if (page > 1) page--;
  fetchcharacter();
});

async function fetchcharacter() {
  const urlCharacters = `https://rickandmortyapi.com/api/character?page=${page}`;

  const response = await fetch(urlCharacters);
  const data = await response.json();
  maxPage = data.info.pages;
  cardContainer.innerHTML = "";
  for (const character of data.results) {
    const newCard = createCharacterCard(character);
    cardContainer.append(newCard);
  }
  pagination.textContent = page + " / " + maxPage;
  console.log(data.results);
  return data.results;
}

// fetchcharacter()

export const dataResults = await fetchcharacter();

//parameter: no //Return:yes

// 1. We have a function that creates 1 card
// 2. We have a variable dataResults which gives us an array of all characters
// 3. We will have to go through that array (loop) and create a card for each of the characters

// for (const character of dataResults) {
//   const newCard = createCharacterCard(character);
//   cardContainer.append(newCard);
// }
