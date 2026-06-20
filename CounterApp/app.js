let count = 0;

const countDisplay = document.querySelector("#count");
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
const resetBtn = document.querySelector("#reset");

const updateCount = () => {
    countDisplay.textContent = count;

    countDisplay.classList.remove("text-blue-600","text-black-600","text-red-600");

   if(count > 0)
    countDisplay.classList.add("text-blue-600");
   else if(count < 0)
    countDisplay.classList.add("text-red-600");
   else
    countDisplay.classList.add("text-black-600");

}

incrementBtn.addEventListener("click", () => {
    count ++;
    updateCount();
});

decrementBtn.addEventListener("click", () => {
    count --;
    updateCount();
})

resetBtn.addEventListener("click", () => {
    count = 0;
    updateCount();
})