import { goToCheckOut} from "./cart";

export const products = [
    {
        id:"1",
        name:"Pepper Chicken",
        price:59,
        image: "assets/imgs/img-1.png",
    },
    {
        id:"2",
        name:"Sushi BBQ",
        price:25,
        image: "assets/imgs/img-2.png",
        
    },
    {
        id:"3",
        name:"Sea Pasta",
        price:17,
        image: "assets/imgs/img-3.png",
    },
    {
        id:"4",
        name:"Craprese Salad",
        price:21,
        image: "assets/imgs/img-4.png",
    },
    {
        id:"5",
        name:"Roasted chicken",
        price:40,
        image: "assets/imgs/img-5.png",
    },
    {
        id:"6",
        name:"Vegetable Chicken",
        price:15,
        image: "assets/imgs/img-6.png",
    },
    {
        id:"7",
        name:"Rice & Chicken bow",
        price:33,
        image: "assets/imgs/img-7.png",
    }
];


////======================= local storage //=======================

export function saveLocalStorage(key, info){

    localStorage.setItem(key ,JSON.stringify(info))

}

export function readFromLocalStorage(key){

  return JSON.parse(localStorage.getItem(key));

}

export function clearLocalStorage(key){
    localStorage.removeItem(key);

}

export function showMessage(){
    const messageCart = document.getElementById('message');
    messageCart.classList.add('visible');
    setTimeout(()=>{
        messageCart.classList.remove('visible');
    },3000);
}

export function cartFunctions(){
    const btnRequest = document.getElementById('btn-request');
    btnRequest.addEventListener('click', goToCheckOut);
}

export function drawSimplyCart(idProduct, container, quantity){
    const product = products.find((p)=> p.id === idProduct)


    const cartContainer = document.getElementById(container);
    const articleElement = document.createElement('article');
    articleElement.classList.add('item');
    const cardProduct = `
    <div class="d-flex bg bg-light gap-2 p-1 rounded-3 row">
    <figure class="col-4 my-auto">
        <img src="${product.image}" alt="${product.name}" class="img-fluid">
    </figure>
    <div class="content col-8 d-flex flex-column m-auto w-50">
        <div class="content__name">
            <span id="plate-name" class="fw-bold">${product.name}</span>
        </div>
        <div class="content__price">
            <span id="price" class="fw-semibold text-success">$${product.price}</span>
        </div>
        <div>
            <p class="fw-medium" id='quantity-simple-cart'>Quantity: ${quantity}</p>
        </div>
    </div>
    </div>
    `;

    articleElement.innerHTML = cardProduct;
    cartContainer.appendChild(articleElement);
}




// clearLocalStorage('historic');
