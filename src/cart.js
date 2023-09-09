import { showTotalQuantityInMobile, updateTotalQuantityInMobile } from "./mobile";
import {products, readFromLocalStorage, saveLocalStorage, showMessage} from "./utilities"

export const idProductQuantity = readFromLocalStorage('cart') ?? {};
//======================= add btn configuration =======================

export function addItemInCart(idProduct){
    
    if(idProduct in idProductQuantity){
        increaseQuantity(idProduct);
        return;
    }  

    idProductQuantity[idProduct]=1; 
    updateTotalCartPrice();
    drawItemInCart(idProduct);
    changeCardIcon(idProduct);
    showTotalQuantityInMobile();
}

//======================= increase and decrease quantity =======================
function increaseQuantity(idProduct){
    idProductQuantity[idProduct]++;
    updateCartQuantity(idProduct);
    saveLocalStorage('cart', idProductQuantity);
    updateTotalCartPrice();
}

function decreaseQuantity(idProduct){

    if(idProductQuantity[idProduct]===1){
        removeCart(idProduct);
        return;
    } 
    idProductQuantity[idProduct]--;
    updateCartQuantity(idProduct);
    saveLocalStorage('cart', idProductQuantity);
    updateTotalCartPrice();

    



    
}

function removeCart(idProduct) {
    delete idProductQuantity[idProduct];
    updateCartQuantity(idProduct);
    saveLocalStorage('cart', idProductQuantity);
    renderizeProductsInCart();
    updateTotalCartPrice();
    changeCardIcon(idProduct);

}

function updateCartQuantity(idProduct){
    const cartCount = document.getElementById(`quantity-product-${idProduct}`);
    if(cartCount){
        cartCount.innerText = idProductQuantity[idProduct];
        updateTotalQuantity();
        updateTotalQuantityInMobile();
    }
    
    

}

//======================= total and adding cart=======================
export function renderizeProductsInCart(){
    const cartContainer = document.getElementById('container-cart');
    cartContainer.innerHTML = '';

    for(const id in idProductQuantity){
        drawItemInCart(id);
    }

    
}

function updateTotalQuantity() {
    let totalQuantity = 0;
    

    for (const id in idProductQuantity) {
        totalQuantity += idProductQuantity[id];
    }
    

    const cartCount = document.getElementById('quantity');
    if (cartCount) {
        cartCount.innerText = totalQuantity.toString();
    }
}




function drawItemInCart(idProduct){
    const product = products.find((p)=> p.id === idProduct)


    const cartContainer = document.getElementById('container-cart');
    const articleElement = document.createElement('article');
    articleElement.classList.add('item');
    const cardProduct = `
    <button class="content__btn-close" id="close-cart-btn-${product.id}"><i class="bi bi-x-circle-fill"></i></button>
    <img src="${product.image}" alt="${product.name}">
    <div class="content">
        <div class="content__name">
            <span id="plate-name">${product.name}</span>
        </div>
        <div class="content__price">
            <span id="price">$${product.price}</span>
        </div>
    </div>
    <div class="addint-btn">
        <button id="decrease-product-${product.id}">-</button>
        <span id="quantity-product-${product.id}" class="value">${idProductQuantity[product.id]}</span>
        <button id="increase-product-${product.id}">+</button>
    </div>`;

    articleElement.innerHTML = cardProduct;
    cartContainer.appendChild(articleElement);

    document.getElementById(`increase-product-${product.id}`).
    addEventListener('click', ()=> increaseQuantity(product.id));

    document.getElementById(`decrease-product-${product.id}`).
    addEventListener('click', ()=> decreaseQuantity(product.id));

    document.getElementById(`close-cart-btn-${product.id}`).
    addEventListener('click', ()=> removeCart(product.id));


    saveLocalStorage('cart', idProductQuantity);
    updateTotalQuantity();
    updateTotalQuantityInMobile();
}

function changeCardIcon(idProduct){
    const cartIcon = document.getElementById(`cart-${idProduct}`);
    if (idProduct in idProductQuantity) {
        cartIcon.classList.remove('bi-cart-x-fill');
        cartIcon.classList.add('bi-cart-check-fill');
    } else {
        cartIcon.classList.remove('bi-cart-check-fill');
        cartIcon.classList.add('bi-cart-x-fill'); 
    }
}

export function updateTotalCartPrice(){
    let total = 0;
    const totalCart = document.getElementById('total-cart');

    for(const id in idProductQuantity){
        total+=products.find((p)=>p.id===id).price * idProductQuantity[id];
    }

    saveLocalStorage('cart',idProductQuantity);
    totalCart.innerText = `Total:$${total}`;

}

//======================= checkout functions =======================
export function goToCheckOut(){
    if(Object.keys(idProductQuantity).length===0){
        showMessage();
        return;
    } else {
        window.location.href = window.location.origin + '/checkout.html';
    }
}







