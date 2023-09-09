//======================= purchase template on cart added products =======================
export function openCart(){
    const cart = document.querySelector('.cart');
    const cartPurchase = document.querySelector('.cart__purchased');
    const closeBtn = document.getElementById('close-button');
    
    
    cart.addEventListener('click', () => {
        if (cartPurchase.style.right == '-100%') {
            cartPurchase.style.right = '0';
        } else {
            cartPurchase.style.right = '-100%';
        }
    });
    
    closeBtn.addEventListener('click', () => {
        cartPurchase.style.right = '-100%';
    });
}


