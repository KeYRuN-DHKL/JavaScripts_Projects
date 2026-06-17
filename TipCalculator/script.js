let selectedTip = null;

const billInput = document.querySelector("#billAmount");
const peopleInput = document.querySelector("#peopleNumber");

const billError = document.querySelector("#billError");
const tipError = document.querySelector("#tipError");
const peopleError = document.querySelector("#peopleError");

const selectedPercentage = document.querySelectorAll(".tipBtn");

const calculateBtn = document.querySelector("#calcBtn");
const resetBtn = document.querySelector("#resetBtn");

const resultDiv = document.querySelector("#resultDiv");
const tipAmount = document.querySelector("#tipAmount");
const totalBill = document.querySelector("#totalBill");
const tipPerPerson = document.querySelector("#billPerPerson");

selectedPercentage.forEach((btn) => {
  btn.addEventListener("click", () => {

    selectedPercentage.forEach((b) => {
      b.classList.remove("bg-blue-600", "text-white");
    });

    btn.classList.add("bg-blue-600", "text-white");

    selectedTip = Number(btn.dataset.tip);

    tipError.classList.add("hidden");
  });
});

const validateInput = () => {
  let isInputValid = true;

  const billValue = Number(billInput.value);
  const peopleValue = Number(peopleInput.value);

  if (billValue <= 0 || isNaN(billValue)) {
    billError.classList.remove("hidden");
    isInputValid = false;
  } else {
    billError.classList.add("hidden");
  }

  if (peopleValue <= 0 || isNaN(peopleValue)) {
    peopleError.classList.remove("hidden");
    isInputValid = false;
  } else {
    peopleError.classList.add("hidden");
  }

  if (selectedTip == null) {
    tipError.classList.remove("hidden");
    isInputValid = false;
  } else {
    tipError.classList.add("hidden");
  }

  return isInputValid;
};

calculateBtn.addEventListener("click", () => {
  if (!validateInput()) return;

  const billValue = Number(billInput.value);
  const peopleValue = Number(peopleInput.value);

  const tipValue = billValue * (selectedTip / 100);
  const totalValue = tipValue + billValue;
  const perPersonValue = tipValue / peopleValue;

  tipAmount.textContent = `Rs. ${tipValue.toFixed(2)}`;
  totalBill.textContent = `Rs. ${totalValue.toFixed(2)}`;
  tipPerPerson.textContent = `Rs. ${perPersonValue.toFixed(2)}`;

  resultDiv.classList.remove("hidden");
  resultDiv.classList.add("flex");
});

resetBtn.addEventListener("click", () => {
    billInput.value = "";
    peopleInput.value = "";
    selectedTip = null;

   selectedPercentage.forEach(btn => {
    btn.classList.remove("bg-blue-600","text-white");
   });

   billError.classList.add("hidden");
   peopleError.classList.add("hidden");
   tipError.classList.add("hidden");

   resultDiv.classList.add("hidden");
   resultDiv.classList.remove("flex");
   tipAmount.textContent= "Rs. 0";
   totalBill.textContent= "Rs. 0";
   tipPerPerson.textContent = "Rs. 0";
});