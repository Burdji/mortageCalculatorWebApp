
let  purchPriceInput = document.getElementById("purchPrice");
let  purchPriceValue = document.getElementById("purchPriceValue");
let  downPayInput = document.getElementById("downPay");
let  downPayValue = document.getElementById("downPayValue");
let  repayTimeInput = document.getElementById("repayTime");
let  repayTimeValue = document.getElementById("repayTimeValue");
let  intRateInput = document.getElementById("intRate");
let  intRateValue = document.getElementById("intRateValue");
purchPriceValue.innerHTML = purchPriceInput.value;
purchPriceInput.oninput = function() {
    purchPriceValue.innerHTML = this.value;
}
downPayValue.innerHTML = downPayInput.value;
downPayInput.oninput = function() {
    downPayValue.innerHTML = this.value;
}
repayTimeValue.innerHTML=repayTimeInput.value;
repayTimeInput.oninput = function() {
    repayTimeValue.innerHTML = this.value;
}
intRateValue.innerHTML=intRateInput.value;
intRateInput.oninput = function() {
    intRateValue.innerHTML = this.value;
}
purchPriceInput.style.background ='linear-gradient(90deg, rgb(255,188,3)'+purchPriceInput.value/10000+'%, rgb(255,255,255)'+purchPriceInput.value/10000+'%)';
purchPriceInput.addEventListener("input", function(){
    purchPriceInput.style.background = 'linear-gradient(90deg, rgb(255,188,3)'+purchPriceInput.value/10000+'%, rgb(255,255,255)'+purchPriceInput.value/10000+'%)';
})
downPayInput.style.background ='linear-gradient(90deg, rgb(255,188,3)'+downPayInput.value/10000+'%, rgb(255,255,255)'+downPayInput.value/10000+'%)';
downPayInput.addEventListener("input", function(){
    downPayInput.style.background = 'linear-gradient(90deg, rgb(255,188,3)'+downPayInput.value/10000+'%, rgb(255,255,255)'+downPayInput.value/10000+'%)';
})
repayTimeInput.style.background = 'linear-gradient(90deg, rgb(255,188,3)'+repayTimeInput.value*3.33+'%, rgb(255,255,255)'+repayTimeInput.value*3.33+'%)';
repayTimeInput.addEventListener("input", function(){
    repayTimeInput.style.background = 'linear-gradient(90deg, rgb(255,188,3)'+repayTimeInput.value*3.33+'%, rgb(255,255,255)'+repayTimeInput.value*3.33+'%)';
})
intRateInput.style.background = 'linear-gradient(90deg, rgb(255,188,3)'+intRateInput.value*10+'%, rgb(255,255,255)'+intRateInput.value*10+'%)';
intRateInput.addEventListener("input", function(){
    intRateInput.style.background = 'linear-gradient(90deg, rgb(255,188,3)'+intRateInput.value*10+'%, rgb(255,255,255)'+intRateInput.value*10+'%)';
})