const PRODUCT_LS_KEY = 'basket';

const totalPrice = document.querySelector(".js-total-price");
const clear = document.querySelector(".js-clear");
const container = document.querySelector(".js-list");


const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) || [];
let totalCost;


if(products.length) {
    clear.hidden = false;
    totalCost = products.reduce((acc, { price, qty }) => acc + price * qty, 0);
}

totalPrice.textContent = totalCost ? `Total cost ${totalCost} грн` : "Your basket is empty";
container.insertAdjacentHTML("beforeend", createMarkup(products));
clear.addEventListener("click", handlerClear);

function handlerClear() {
    localStorage.removeItem(PRODUCT_LS_KEY);
    window.location.href = "./03-shop.html";
}

function createMarkup(arr) {
    return arr.map(({ id, img, name, price, qty }) => `
        <li class="cart-item" data-id="${id}">
            <img src="${img}" alt="${name}" class="product-img"/>
            <h2>${name}</h2>
            <p>Quantity: ${qty}</p>
            <p>Total price: ${price * qty} грн</p>
        </li>
    `).join("");
}

