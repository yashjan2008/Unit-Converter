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
    let inputValue = Number(inputEl.value);
    if (!isNaN(inputValue)){
        let meterResult = (inputEl.value * 3.218).toFixed(2);
        let feetResult = (inputEl.value / 3.218).toFixed(2);
        lengthEl.textContent = `${inputValue} meters = ${meterResult} feet | ${inputValue} feets = ${feetResult}`;
        let literResult = (inputEl.value * 0.264).toFixed(2);
        let gallonResult = (inputEl.value / 0.264).toFixed(2);
        volumeEl.textContent = `${inputValue} liters = ${literResult} gallons | ${inputValue} gallons = ${gallonResult}`;
        let weightResult = (inputEl.value * 2.204).toFixed(2);
        weightEl.textContent = `${inputValue} kilograms = ${weightResult} pounds`;
    }else{
        alert("Please enter a numeric value!");
        inputEl.value = " ";
        /*
        console.log("Sorry!!")*/
    };
    
});
