import { idProductQuantity } from "./src/cart";
import { clearLocalStorage, drawSimplyCart, products, readFromLocalStorage, saveLocalStorage } from "./src/utilities";

function drawCartInCheckout(){

    const idProductQuantity = readFromLocalStorage('cart')??{};

    for(const id in idProductQuantity){
        drawSimplyCart(id, 'container-products-checkout', idProductQuantity[id]);
    }
}

function showTotalPriceInCheckout(){
    const totalCheckOut = document.getElementById('total-price-checkout');
    let total = 0;

    for(const id in idProductQuantity){
        total+=products.find((p)=>p.id===id).price * idProductQuantity[id];
    }

    
    saveLocalStorage('cart',idProductQuantity);
    totalCheckOut.innerText = `Total:$${total}`;
}

function finishOrder(e){
    e.preventDefault();

    const idProductQuantity = readFromLocalStorage('cart')??{};

    if(Object.keys(idProductQuantity).length===0){
        return;
    }

    const actualDate = new Date();
    const orderReady = {
        orderDate : actualDate,
        order: idProductQuantity
    }

    const historic = readFromLocalStorage('historic') ?? [];
    const historicUpdated = [orderReady, ...historic];

    saveLocalStorage('historic', historicUpdated);
    clearLocalStorage('cart');

    window.location.href = window.location.origin + '/order.html'

}




drawCartInCheckout();
showTotalPriceInCheckout();

document.addEventListener('submit', (e)=> finishOrder(e));