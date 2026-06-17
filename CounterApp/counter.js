let count = 0;

const counterDisplay = document.querySelector("#count");
const btnIncrement = document.querySelector("#increment");
const btnDecrement = document.querySelector("#decrement");
const btnReset = document.querySelector("#reset");

const updateCount = () =>  {
    counterDisplay.textContent = count;

    counterDisplay.classList.remove("text-blue-500","text-red-700","text-black-900");

    if(count > 0){
        counterDisplay.classList.add("text-blue-500");
    }
    else if(count < 0){
        counterDisplay.classList.add("text-red-700");
    }else{
        counterDisplay.classList.add("text-black-900");
    }
}

btnIncrement.addEventListener("click", () => {
    count++;
    updateCount();
});

btnDecrement.addEventListener("click", () => {
    count--;
    updateCount();
})

btnReset.addEventListener("click", () => {
    count = 0;
    updateCount();
})