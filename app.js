function getInput(product, isAdd, price) {
  const text = document.getElementById(product + "-number");
  let value = parseInt(text.value);
  if (isAdd == true) {
    value = value + 1;
  } else if (value > 0) {
    value = value - 1;
  }
  text.value = value;
  const caseTotal = document.getElementById(product + "-total");
  caseTotal.innerText = value * price;

  calculate();
}

function price(product) {
  const phoneNumber = document.getElementById(product + "-number");
  const phoneValue = parseInt(phoneNumber.value);
  return phoneValue;
}

function calculate() {
  const phoneTotal = price("phone") * 1219;
  const caseTotal = price("case") * 59;

  const Total = phoneTotal + caseTotal;
  const taxTotal = Total / 10;
  const totalAmount = Total + taxTotal;

  const totalText = document.getElementById("total-amount");
  totalText.innerText = Total;

  const totalTaxText = document.getElementById("total-tax");
  totalTaxText.innerText = taxTotal;

  const totalAmountText = document.getElementById("total-price");
  totalAmountText.innerText = totalAmount;
}

document.getElementById("case-increase").addEventListener("click", function () {
  getInput("case", true, 59);
});

document.getElementById("case-decrease").addEventListener("click", function () {
  getInput("case", false, 59);
});

document
  .getElementById("phone-increase")
  .addEventListener("click", function () {
    getInput("phone", true, 1219);
  });

document
  .getElementById("phone-decrease")
  .addEventListener("click", function () {
    getInput("phone", false, 1219);
  });
