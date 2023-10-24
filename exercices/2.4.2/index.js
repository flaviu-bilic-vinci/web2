const redLight = document.querySelector(".red");
const orangeLight = document.querySelector(".orange");
const greenLight = document.querySelector(".green");

const intervalInMs = 2000;

redLight.style.backgroundColor = "red";

let etape = 1;

setInterval(() => {
    if (etape === 1) {
        turnOrange();
        etape = 2;
    } else if (etape === 2) {
        turnGreen();
        etape = 3;
    } else if (etape === 3) {
        turnRed();
        etape = 1;
    }
}, intervalInMs)


function turnRed() {
    greenLight.style.backgroundColor = "white"
    redLight.style.backgroundColor = "red";
}

function turnOrange() {
    redLight.style.backgroundColor = "white";
    orangeLight.style.backgroundColor = "orange";
}

function turnGreen() {
    orangeLight.style.backgroundColor = "white";
    greenLight.style.backgroundColor = "green";
}