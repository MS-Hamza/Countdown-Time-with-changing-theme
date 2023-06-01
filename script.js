const body = document.body;
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const timer = document.querySelector("p");

var intervalId;
var time = +prompt("Enter time in seconds: ");
start.addEventListener("click",()=>{
    intervalId = setInterval(()=>{
        // random color generator 
        const red = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const blue = Math.floor(Math.random()*256);
        const randomColor = `rgb(${red}, ${green}, ${blue})`;
        body.style.backgroundColor = randomColor;

        // countdown Timer
        let sec = time%60;
        let min = Math.floor(time/60)%60;
        let hrs = Math.floor(time/3600);
        if(sec == 0){
            clearInterval(intervalId);
        }
        if(sec < 10){
            sec = `0${sec}`
        }
        if(min<10){
            min = `0${min}`;
        }
        if(hrs<10){
            hrs = `0${hrs}`;
        }
        timer.innerText = `${hrs} : ${min} : ${sec}`
        time--;
    },1000);
})

stop.addEventListener("click",()=>{
    clearInterval(intervalId);
})