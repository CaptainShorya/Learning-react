const firstBasket = document.querySelector('.basket-1 span');
const secondBasket = document.querySelector('.basket-2 span');
const rightBtn = document.querySelector('.right-btn');
const leftBtn = document.querySelector('.left-btn');

const totalApples = 10; 
let secondBasketAppleCount = 0; //This keeps on changing,so use of let
let firstBasketAppleCount = totalApples - secondBasketAppleCount;

firstBasket.innerText = firstBasketAppleCount;
secondBasket.innerText = secondBasketAppleCount;

rightBtn.addEventListener("click", () => {
    if(firstBasketAppleCount > 0){
        //On increasing or decreasing variable, no change is seen in the DOM 
        firstBasketAppleCount--; 
        secondBasketAppleCount++;

        //We need to assign again
        firstBasket.innerText = firstBasketAppleCount;  //DOM Updation explicitely
        secondBasket.innerText = secondBasketAppleCount;
    }
})

leftBtn.addEventListener("click", () => {
    if(secondBasketAppleCount > 0){
        secondBasketAppleCount--;
        firstBasketAppleCount++;

        firstBasket.innerText = firstBasketAppleCount;
        secondBasket.innerText = secondBasketAppleCount;
    }
})


