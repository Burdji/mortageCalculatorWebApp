
let purchPrice = document.querySelector('#purchPrice');
let purchPriceValue = document.querySelector('#purchPriceValue');
let downPay = document.querySelector('#downPay');
let downPayValue = document.querySelector('#downPayValue');
let repayTime = document.querySelector('#repayTime');
let repayTimeValue = document.querySelector('#repayTimeValue');
let intRate = document.querySelector('#intRate');
let intRateValue = document.querySelector('#intRateValue');
let sliders= document.querySelector('.box');
let loan = document.getElementById('loan');
let montlyPay = document.getElementById('montlyPay');
const update = () => {
    intRateValue.innerHTML = intRate.value;
    intRate.style.background = 'linear-gradient(90deg, rgb(255,188,3)'+intRate.value*10+'%, rgb(255,255,255)'+intRate.value*10+'%)';
    repayTimeValue.innerHTML = repayTime.value;
    repayTime.style.background = 'linear-gradient(90deg, rgb(255,188,3)'+repayTime.value*3.33+'%, rgb(255,255,255)'+repayTime.value*3.33+'%)';
    purchPriceValue.innerHTML = numberWithCommas(purchPrice.value);
    purchPrice.style.background ='linear-gradient(90deg, rgb(255,188,3)'+purchPrice.value/10000+'%, rgb(255,255,255)'+purchPrice.value/10000+'%)';
    downPay.max = purchPrice.value;
    downPayValue.innerHTML = numberWithCommas(downPay.value);
    let pro = purchPrice.value/100;
    downPay.style.background ='linear-gradient(90deg, rgb(255,188,3)'+downPay.value/pro+'%, rgb(255,255,255)'+downPay.value/10000+'%)';
    let a = purchPrice.value-downPay.value;
    loan.innerHTML = numberWithCommas(a);
    montlyPay.innerHTML = numberWithCommas(Math.round((a + (a*repayTime.value * intRate.value)/100)/(repayTime.value * 12)));
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
sliders.addEventListener('input',update)
update()