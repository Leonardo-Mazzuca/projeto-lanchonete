export function slideMenu(){
    const iLeft = document.getElementById('icon-left');
    const iRight = document.getElementById('icon-right');
    const cards = document.getElementById('cards');
    
    
    iLeft.addEventListener('click', () => {
        cards.scrollLeft -= 175;
    });
    iRight.addEventListener('click', () => {
        cards.scrollLeft += 175;
    });
}