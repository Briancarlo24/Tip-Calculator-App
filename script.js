const tipAmount = document.querySelector(".tip");
const total = document.querySelector(".total");

const btn5 = document.querySelector(".btn--5");
const btn10 = document.querySelector(".btn--10");
const btn15 = document.querySelector(".btn--15");
const btn25 = document.querySelector(".btn--25");
const btn50 = document.querySelector(".btn--50");
const customAmount = document.querySelector(".btn--custom");
const btnsTip = document.querySelectorAll(".btn--tip");
const btnReset = document.querySelector(".btn--reset");

let customerTip = 0;
let tip = 0;
let amountPerPerson = 0;
let currentTip = 0;
let activeButton = "";

function init() {
  tipAmount.innerHTML = "$0.00";
  total.innerHTML = "$0.00";
}

function calculateTip(percentage, bill) {
  tip = bill * percentage;
  return tip.toFixed(2);
}

function perPerson(currentTip) {
  const numberOfPeople = document.querySelector(".numOfPeople-input").value;
  if (numberOfPeople <= 0) {
    document.querySelector(".numOfPeople").classList.add("message");
    return null;
  } else {
    amountPerPerson = currentTip / numberOfPeople;
    return amountPerPerson.toFixed(2);
  }
}

function display(finaltip, bill) {
  currentTip = calculateTip(finaltip, bill);
  tipAmount.innerHTML = `$${currentTip}`;
  total.innerHTML = `$${perPerson(currentTip)}`;
}

function activeTipButton(event) {
  event.classList.add("button-active");
}

function resetButton(event) {
  init();
}

// **************** CALL FUNCTION *****************
init();

// **************** EVENT FUNCTION *****************

btnsTip.forEach((btnTip, index) => {
  btnTip.addEventListener("click", function (e) {
    const bill = document.querySelector(".bill-input").value;
    activeTipButton(e.target);

    while (!e.target) {
      btnTip.classList.remove("button-active");
    }

    switch (e.target) {
      case btn5:
        customerTip = 0.05;
        display(customerTip, bill);

        break;
      case btn10:
        customerTip = 0.1;
        display(customerTip, bill);
        break;
      case btn15:
        customerTip = 0.15;
        display(customerTip, bill);
        break;
      case btn25:
        customerTip = 0.25;
        display(customerTip, bill);
        break;
      case btn50:
        customerTip = 0.5;
        display(customerTip, bill);
        break;
    }
    activeButton = e.target;
  });
});
