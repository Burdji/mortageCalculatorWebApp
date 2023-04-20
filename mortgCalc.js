
let  purchPriceValue = document.getElementById("Purchase price value");
let  downPayValue = document.getElementById("Down payment value");
let  repayTimeValue = document.getElementById("Repayment time value");
let  intRateValue = document.getElementById("Interest rate value");
let  purchPriceInput = document.getElementById("Purchase price");
let  downPayInput = document.getElementById("Down payment");
let  repayTimeInput = document.getElementById("Repayment time");
let  intRateInput = document.getElementById("Interest rate");
purchPriceValue.innerHTML = purchPriceInput.value;
purchPriceInput.oninput = function() {
    purchPriceInput.innerHTML = this.value;
}