let selectedBtn = null;

const billAmount = document.querySelector("#billAmount");
const billError = document.querySelector("#billError");

const tipBtns = document.querySelectorAll(".tipBtn");
const tipError = document.querySelector("#tipError");

const peopleNumber = document.querySelector("#peopleNumber");
const peopleError = document.querySelector("#peopleError");

const calcBtn = document.querySelector("#calcBtn");
const resetBtn = document.querySelector("#resetBtn");

const resultDiv = document.querySelector("#resultDiv");
const tipAmount = document.querySelector("#tipAmount");
const totalBill = document.querySelector("#totalBill");
const tipPerPerson = document.querySelector("#billPerPerson");

tipBtns.forEach((btns) => {
    btns.addEventListener("click",() =>{
      
        tipBtns.forEach((b) => {
            b.classList.remove("bg-blue-600","text-white");
        });


        btns.classList.add("bg-blue-600","text-white");

        selectedBtn = Number(btns.dataset.tip);

        tipError.classList.add("hidden");
    });
});

const validateInput = () => {
    let isInputValid = true;

    const bill= Number(billAmount.value);
    const people = Number(peopleNumber.value);

    if(!billAmount.value || bill < 0 || isNaN(bill)){
        billError.classList.remove("hidden");
        isInputValid = false;
    }else{
        billError.classList.add("hidden");
    }

    if(!peopleNumber.value || people <= 0 || isNaN(people)){
        peopleError.classList.remove("hidden");
        isInputValid = false;
    }else{
        peopleError.classList.add("hidden");
    }

    if(selectedBtn == null){
        tipError.classList.remove("hidden");
        isInputValid = false;
    }else{
        tipError.classList.add("hidden");
    }

    return isInputValid;
}

calcBtn.addEventListener("click", () => {
    if(!validateInput()) return;

    const bill = Number(billAmount.value);
    const people = Number(peopleNumber.value);

    const amountOfTip = bill * (selectedBtn / 100);
    const billValue = amountOfTip + bill;
    const perPersonAmount = amountOfTip / people;

    tipAmount.textContent = `${amountOfTip}`;
    totalBill.textContent = `${billValue}`;
    tipPerPerson.textContent = `${perPersonAmount}`;

    resultDiv.classList.remove("hidden");
    resultDiv.classList.add("flex");
});

resetBtn.addEventListener("click", () => {
    selectedBtn = null;
    billAmount.value = "";
    peopleNumber.value = "";

    tipBtns.forEach((btn) => {
        btn.classList.remove('bg-blue-600','text-white');
    });

    billError.classList.add("hidden");
    tipError.classList.add("hidden");
    peopleError.classList.add("hidden");

    resultDiv.classList.add("hidden");
    resultDiv.classList.remove("flex");

    tipAmount.value = "Rs. 0";
    totalBill.value = "Rs. 0";
    tipPerPerson.value = "Rs. 0";
});