let form = document.getElementsByTagName("form")[0];
let cardNumber = document.getElementById("cardNumber");
let ccv2 = document.getElementById("ccv2");
let expirationMonth = document.getElementById("expirationMonth");
let expirationYear = document.getElementById("expirationYear");
let cardNumberText = document.getElementsByClassName("cardNumberText");
let ccv2Text = document.getElementsByClassName("ccv2Text");
let expirationMonthText = document.getElementsByClassName("expirationMonthText");
let succes = document.getElementsByClassName("succes")[0];
let expirationYearText = document.getElementsByClassName("expirationYearText");
console.log(form);
cardNumber.addEventListener("input", (e) => {
  for (let element of cardNumberText) {
    element.innerText = e.target.value;
  }
});
ccv2.addEventListener("input", (e) => {
  for (let element of ccv2Text) {
    element.innerText = e.target.value;
  }
});
expirationMonth.addEventListener("input", (e) => {
  for (let element of expirationMonthText) {
    element.innerText = e.target.value;
  }
});
expirationYear.addEventListener("input", (e) => {
  for (let element of expirationYearText) {
    element.innerText = e.target.value;
  }
});
form.addEventListener("submit", (e) => {
  succes.innerText = "send succesfuly!";
  setInterval(() => {
    succes.remove();
  }, 2000);
  e.preventDefault();
});
