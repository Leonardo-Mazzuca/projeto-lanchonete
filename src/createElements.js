import { addItemInCart} from "./cart";
import { products } from "./utilities"


export function createElementInHTML() {
    const cardContent = document.getElementById('cards');

    for (const product of products) {
        const card = document.createElement('article');
        card.dataset.id = product.id;
        card.classList.add('card');
        const cardItem = `
    <figure class="col-lg-6">
        <img src="${product.image}" alt="Imagem de um prato de comida">
    </figure>

    <div class="card__text col-7">
        <h2 class="text-light" id="price-item">$${product.price}</h2>


        <div class="card__text-main d-flex flex-column">
            <h3 class="text-light">${product.name}</h3>
            <p>per plate</p>
        </div>

        <div class="rate">
            <h5>5.0</h5>
            <i id="cart-${product.id}" class="bi bi-cart-x-fill"></i>
        </div>
    </div>
        `;
        card.innerHTML = cardItem;
        cardContent.appendChild(card);
    }
}

export function updateMainProductByClick() {

    Array.from(document.getElementsByClassName('card')).forEach((card) => {
        card.addEventListener('click', (event) => {

            //here i get the id by the data-set
            const clickedCard = event.currentTarget;
            const productId = clickedCard.dataset.id;
            updateMainSection(productId);
        });
    });


}

function updateMainSection(productId) {
    const product = products.find((p) => p.id === productId);

    if (product) {
        const logo = document.querySelector('.logo');
        const mainSection = document.querySelector('.left-menu__compound');

        mainSection.innerHTML = '';

        logo.innerHTML = `
        <h1>FoodBar</h1>
        <figure>
            <img src="${product.image}" alt="Imagem de um prato de restaurante" id="img-slide">
        </figure>
        `;

        const content = document.createElement('div');
        content.classList.add('content');
        const cardContent = `
        <h1 id="title" class="fw-bold">
        ${product.name}
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea animi nostrum quasi
                reprehenderit perferendis laudantium eligendi velit rem repellat nam.</p>
        <article class="price__order">
            <div class="price">
                <h2 class="fw-bold" id="price_cont">
                    $${product.price}
                </h2>
                <p>Total payable</p>
            </div>
            <button id="add-btn-${product.id}">Add to cart</button>
        </article>
        `;

        content.innerHTML = cardContent;
        mainSection.appendChild(content);

        document.getElementById(`add-btn-${product.id}`)
        .addEventListener('click', () => addItemInCart(product.id));
    }
}


