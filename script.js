// 1 meter = 3.218 feet
// 1 liter = 0.264 gallons
// 1 kilogram = 2.204 pounds


const btn = document.getElementById("convert-btn");
let inputEl = document.getElementById("input-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const weightEl = document.getElementById("weight-el");
const resetBtn = document.getElementById("reset-btn");


resetBtn.addEventListener("click", function(){
    inputEl.value = " ";
    lengthEl.textContent = " ";
    volumeEl.textContent = " ";
    weightEl.textContent = " ";
});

btn.addEventListener("click", function(){
    let input = inputEl.value.trim();
    if (input === " " || isNaN(input)){
        popup.style.display = "flex";
        return;
    }
    //  conversion code...
    let inputValue = Number(inputEl.value);
    if (!isNaN(inputValue)){
        let meterResult = (inputEl.value * 3.218).toFixed(3);
        let feetResult = (inputEl.value / 3.218).toFixed(3);
        lengthEl.textContent = `${inputValue} meters = ${meterResult} feet | ${inputValue} feets = ${feetResult} meters`;
        let literResult = (inputEl.value * 0.264).toFixed(3);
        let gallonResult = (inputEl.value / 0.264).toFixed(3);
        volumeEl.textContent = `${inputValue} liters = ${literResult} gallons | ${inputValue} gallons = ${gallonResult} liters`;
        let kiloResult = (inputEl.value * 2.204).toFixed(3);
        let poundResult = (inputEl.value / 2.204).toFixed(3);
        weightEl.textContent = `${inputValue} kilos = ${kiloResult} pounds | ${inputValue} pounds = ${poundResult} kilos`;
    }
});


const popup = document.getElementById("popup");
const continueBtn = document.getElementById("continue-btn");


continueBtn.addEventListener("click", function(){
    popup.style.display = "none";
    inputEl.value = " ";
    inputEl.focus();
});