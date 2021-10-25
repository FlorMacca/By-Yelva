const items = document.querySelectorAll('img');
const nbSlide = items.length;
const next = document.querySelector('.right');
const prev = document.querySelector('.left');
let count = 0;

function slideNext(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
    console.log(count);
    
}
next.addEventListener('click', slideNext)


function slidePrev(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
    // console.log(count);
    
}
prev.addEventListener('click', slidePrev)

function keyPress(e){
    console.log(e);
    
    if(e.keyCode === 37){
        slidePrev();
    } else if(e.keyCode === 39){
        slideNext();
    }
}
document.addEventListener('keydown', keyPress)