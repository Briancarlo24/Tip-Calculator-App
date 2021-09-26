const tipAmount = document.querySelector(".tip");
const total = document.querySelector(".total");

const btn5 = document.querySelector(".btn--5");
const btn10 = document.querySelector(".btn--10");
const btn15 = document.querySelector(".btn--15");
const btn25 = document.querySelector(".btn--25");
const btn50 = document.querySelector(".btn--50");
const customAmount = document.querySelector(".btn--custom");
const btnReset = document.querySelector(".btn--reset");

//Get Multiple Elements
const btnsTip = document.querySelectorAll(".btn--tip");
const People = document.querySelector(".numOfPeople-input");

let customerTip = 0;
let tip = 0;
let amountPerPerson = 0;
let currentTip = 0;

// INPUT VALUES

// **************** CALL FUNCTION *****************
init();

// **************** FUNCTIONS *****************
function init() {
  // set amounts to 0
  tipAmount.innerHTML = "$0.00";
  total.innerHTML = "$0.00";

  // Enable button and remove active class
  btnReset.disabled = true;
  btnReset.classList.remove("button-active");

  //set the bill and number of people value to null
  document.getElementsByName("bill")[0].value = "";
  document.getElementsByName("numOfPeople")[0].value = "";

  //Remove Error Message
  document.querySelector(".numOfPeople").classList.remove("message");
  document.querySelector(".btn--custom").value = "";
}

function calculateTip(percentage, bill) {
  tip = bill * percentage;
  return tip.toFixed(2);
}

function perPerson(currentTip) {
  const numberOfPeople = document.querySelector(".numOfPeople-input").value;

  if (numberOfPeople < 1) {
    document.querySelector(".numOfPeople").classList.add("message");
    return `0.00`;
  } else if (isNaN(numberOfPeople)) {
    document.querySelector(".numOfPeople").classList.add("message");
  } else {
    document.querySelector(".numOfPeople").classList.remove("message");
    amountPerPerson = currentTip / numberOfPeople;
    return amountPerPerson.toFixed(2);
  }
}

function display(finaltip, bill) {
  if (
    document
      .querySelector(".bill-input")
      .classList.contains("bill-input-border")
  ) {
    document.querySelector(".bill-input").classList.remove("bill-input-border");
  }
  btnReset.disabled = false;
  btnReset.classList.add("button-active");
  currentTip = calculateTip(finaltip, bill);

  tipAmount.innerHTML = `$${currentTip}`;
  total.innerHTML = `$${perPerson(currentTip)}`;
}

function activeTipButton(event) {
  event.classList.add("button-active");
}

function removeActive() {
  btnsTip[0].classList.remove("button-active");
  btnsTip[1].classList.remove("button-active");
  btnsTip[2].classList.remove("button-active");
  btnsTip[3].classList.remove("button-active");
  btnsTip[4].classList.remove("button-active");
}

//********Disable button and custom input if Bill is empty**********//

// **************** EVENT FUNCTION *****************
btnsTip.forEach((btnTip) => {
  btnTip.addEventListener("click", function (e) {
    const bill = document.querySelector(".bill-input").value;
    if (
      document.querySelector(".bill-input").value <= 0 ||
      isNaN(document.querySelector(".bill-input").value)
    ) {
      document.querySelector(".bill-input").classList.add("bill-input-border");
    } else {
      removeActive();
      activeTipButton(e.target);

      document.querySelector(".btn--custom").value = "";

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
    }
  });
});

btnReset.addEventListener("click", function () {
  document.querySelector(".bill-input").value = "";
  document.querySelector(".numOfPeople-input").value = "";
  document.querySelector(".btn--custom").value = "";
  removeActive();
  init();
});

customAmount.addEventListener("change", function () {
  const customPercentage = document.querySelector(".btn--custom").value;
  const bill = document.querySelector(".bill-input").value;
  if (bill <= 0 || isNaN(bill)) {
    document.querySelector(".bill-input").classList.add("bill-input-border");
  } else {
    if (isNaN(customPercentage)) {
      alert("Enter a valid number");
      document.querySelector(".btn--custom").value = "";
    } else {
      display(customPercentage / 100, bill);
    }
  }
  removeActive();
});
People.addEventListener("change", function () {
  document.querySelector(".btn--custom").value = "";
});

document.querySelector(".bill-input").addEventListener("change", function () {
  document.querySelector(".btn--custom").value = "";
  removeActive();
});
