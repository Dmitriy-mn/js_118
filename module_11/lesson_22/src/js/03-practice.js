import axios from 'axios';

import '../common.css';

/**
 * https://thecatapi.com/
 *
 * 1) Створити сторінку яка при завантаженні робить запит на бекенд і оримує
 *  всі доступні breeds. https://api.thecatapi.com/v1/breeds
 *
 * 2) В інтерфейсі є форма пошуку з прив'язаним datalist з завантаженими breeds.
 *
 * 3) Користувач в формі вводить або обирає необхідний breed і при сабміті форми
 *  виконується GET запит за зображенням.
 *
 * 4) Після запиту під формою відображається картка з зображенням.
 *
 * 5) Під час запиту під формую відображається loader
 */


const form = document.querySelector("#search-form");
const breedInput = document.querySelector("#breed-input");
const breedsList = document.querySelector("#breeds-list");
const loader = document.querySelector("#loader");
const catCard = document.querySelector("#cat-card");

form.addEventListener("submit", handleSubmit);

fetchBreeds();

function fetchBreeds() {
    axios('https://api.thecatapi.com/v1/breeds')
        .then((res) => {
            breedsList.insertAdjacentHTML("beforeend", populateDatalist(res.data))
        })
        .catch(error => {
            console.log(error)
        })
}

function populateDatalist(arr) {
    return arr.map(({ id, name }) => `
        <option value="${name}" data-id="${id}"></option>
    `).join("");
}

function handleSubmit(event) {
    event.preventDefault();

    const myBreed = breedInput.value;
    const selectedBreed = Array.from(breedsList.options)
        .find((item) => item.value.toLowerCase() === myBreed.toLowerCase());

    if(!selectedBreed) {
        alert("Оберіть існуючу породу");
        return;
    }
    
    const breedId = selectedBreed.dataset.id;
    loader.classList.remove("hidden");

    axios(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        .then(res => {
            if(res.data.length > 0) {
                const catImg = res.data[0].url;

                catCard.innerHTML = `
                    <div class="card">
                        <img src="${catImg}" alt="${myBreed}" class="card-image"/>
                        <div class="card-body">
                            <h2 class="card-title">${myBreed}</h2>
                        </div>
                    </div>
                `
            } else {
                catCard.innerHTML = `<p class="error-text">Зображення не знайдено</p>`;
            }
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            loader.classList.add("hidden");
        })
}

