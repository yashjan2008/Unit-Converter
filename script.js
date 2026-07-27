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
});

btn.addEventListener("click", function(){
    if (inputEl = Number(inputEl.value)){
        let lengthResult = inputEl * 3.218;
        lengthEl.textContent = lengthResult;
        let volumeResult = inputEl * 0.264;
        volumeEl.textContent = volumeResult;
        let weightResult = inputEl * 2.204;
        weightEl.textContent = weightResult;
    }else{
        alert("Please enter a numeric value!");
        inputEl.value = " ";
        /*lengthEl.textContent = "sorry!! Please enter numeric value";
        volumeEl.textContent = "sorry!! Please enter numeric value";
        weightEl.textContent = "sorry!! Please enter numeric value";
        console.log("Sorry!!")*/
    };
    
});
