import { drawSimplyCart, readFromLocalStorage } from "./src/utilities";

function createHistoric(orderWithDate){

    const orderElement = `
    <p class="fs-1 fw-bold my-4">${new Date(orderWithDate.orderDate).toLocaleDateString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
    })}</p>
    <section class="bg bg-light p-3 rounded-1" id="order-container-${orderWithDate.orderDate}"></section>
    `;

    const main = document.getElementsByTagName('main')[0];
    main.innerHTML += orderElement;

    for(const id in orderWithDate.order){
        drawSimplyCart(id,
             `order-container-${orderWithDate.orderDate}`,
              orderWithDate.order[id]);
    }

}

function renderizeHistoric(){
    const historic = readFromLocalStorage('historic');

    for(const order of historic){
        createHistoric(order);
    }


}

renderizeHistoric();