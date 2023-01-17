const inputQuantity= document.querySelector(".input-quantity");
const btnIncrement = document.querySelector("#increment");
const btnDecrement = document.querySelector("#decrement");

let valueByDefault = parseInt(inputQuantity.value);


btnIncrement.addEventListener("click", () => {
    valueByDefault += 1;
    inputQuantity.value = valueByDefault;
});

btnDecrement.addEventListener("click", () => {
    if(valueByDefault === 1){
        return
    }
    valueByDefault -= 1;
    inputQuantity.value = valueByDefault;
});


const toggleDescription = document.querySelector(".title-description");
const toggleAditional = document.querySelector(".title-aditional");
const toggleReviews = document.querySelector(".title-reviews");


const contentDescription = document.querySelector(".text-description");
const contentAditional = document.querySelector(".text-additional");
const contentReviews = document.querySelector(".text-reviews");

toggleDescription.addEventListener ("click" , () =>{
    contentDescription.classList.toggle("hidden");
});
toggleAditional.addEventListener ("click" , () =>{
    contentAditional.classList.toggle("hidden");
});
toggleReviews.addEventListener ("click" , () =>{
    contentReviews.classList.toggle("hidden");
});