const btn1 = document.querySelector("#myBtn1");
const msg1 = document.querySelector("#message1");

let timeoutID;
const delayInSeconds = 5;
const delayInMs = delayInSeconds*1000;

let clickCounter = 0;

btn1.addEventListener("click",(event) =>{
    console.log("event started");

    if(clickCounter === 0){
        timerStart();
    }

    clickCounter++;
});

function timerStart(){
    timeoutID = setTimeout(() => {
        if(clickCounter >= 10){
            msg1.innerHTML = `You win ! You clicked 10 times within ${delayInMs} ms`;
            clearTimeout(timeoutID);
        }else{
            msg1.innerHTML = "Game over, you did not click 10 times within 5s!";
        }

    }, delayInMs);
}

