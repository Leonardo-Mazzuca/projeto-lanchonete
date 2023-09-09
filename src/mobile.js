import { idProductQuantity } from "./cart";
import { saveLocalStorage } from "./utilities";

export function responsiveNavBarEdit(){

    const mainContent = document.querySelector('.l-main__content');
    const navBar = document.querySelector('.navbar-toggler');
    const hamburgerMenu = document.getElementById('hamburger-menu');


    navBar.addEventListener('click', ()=>{
        if(!mainContent.classList.contains('mt-5')){
            hideTotalQuantityInMobile();
            mainContent.classList.add('mt-5')
        } else {
            showTotalQuantityInMobile();
            mainContent.classList.remove('mt-5')
        }

        hamburgerMenu.classList.toggle('text-dark');

    });



}

export function showTotalQuantityInMobile(){
    if(Object.keys(idProductQuantity).length>0){
        turnMobileCounterVisible()
        updateTotalQuantityInMobile();
        
    } else {
        removeCartCountInMobile();
    }
}

function turnMobileCounterVisible(){
    const quantityMobile = document.getElementById('quantity-mobile');
    if(Object.keys(idProductQuantity).length>0){
        quantityMobile.classList.add('opacity-100');
        
    }
}



function hideTotalQuantityInMobile(){
    const quantityMobile = document.getElementById('quantity-mobile');
    quantityMobile.classList.remove('opacity-100');
}

export function updateTotalQuantityInMobile() {
    let totalQuantity = 0;
    for (const id in idProductQuantity) {
        totalQuantity += idProductQuantity[id];
    }
    

    const cartCount = document.getElementById('quantity-mobile');
    if (cartCount) {
        cartCount.innerText = totalQuantity.toString();
    }
}

function removeCartCountInMobile(){
    if(Object.keys(idProductQuantity).length<1){
        hideTotalQuantityInMobile();
    }
}