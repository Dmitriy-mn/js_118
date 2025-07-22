import axios from "axios";

import './style.css'



/**
 * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
 *
 */

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';


const container = document.querySelector(".card-container");
const form = document.querySelector(".search-form");

form.addEventListener("submit", onSearch);

async function fetchData(pokemonName) {
    const result = await axios(`${BASE_URL}${pokemonName}`);
    return result.data;
}

async function onSearch(event) {
    event.preventDefault();
    const searchQuery = event.target.elements.query.value.trim();
    
    try {
        const data = await fetchData(searchQuery);
        console.log(data);
        
        container.innerHTML = renderPokemon(data);
    } catch(error) {
        onFetchError(error.message);
    }
}


function renderPokemon({ name, weight, height, abilities, sprites }) {

    const abilitiesList = abilities.map(({ ability }) => `
        <li class="list-group-item">${ability.name}</li>
    `).join("");

    return `
        <div class="card">
            <div class="card-img-top">
                <img src="${sprites.front_default}" alt="${name}"/>
            </div>
            <div class="card-body">
                <h3 class="card-title">Ім'я: ${name}</h3>
                <p class="card-text">Вага: ${weight}</p>
                <p class="card-text">Зріст: ${height}</p>
            </div>

            <p class="card-text">
                <h4>Вмінян:</h4>
                <ul>
                    ${abilitiesList}
                </ul>
            </p>
        </div>
    `
}

function onFetchError(message) {
    alert(message)
}