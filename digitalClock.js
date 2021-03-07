console.log("JavaScript - Digital Clock Homework");

let seconds = 0;
const secondsParagraphs = document.querySelectorAll(".seconds span");

let minutes = 0;
const minutesParagraphs = document.querySelectorAll(".minutes span");

let hours = 0;
const hoursParagraphs = document.querySelectorAll(".hours span");

let timer;


function stopwatchTimer () {
  renderDigits(seconds, secondsParagraphs);
  renderDigits(minutes, minutesParagraphs);
  renderDigits(hours, hoursParagraphs);

  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  if (hours === 24) {
    hours = 0;
  }
};


function renderDigits(nr, pList) {
  const stringDigits = nr + "";
  const digitList = stringDigits.split("");

  if (digitList.length === 2) {
    pList[0].innerText = digitList[0];
    pList[1].innerText = digitList[1];
  } else {
    pList[0].innerText = 0;
    pList[1].innerText = digitList[0];
  }
}

// starting the timer
document.getElementById("button-start").addEventListener("click", startTime);
function startTime(){
  timer = setInterval(stopwatchTimer,100);
}

//stopping the timer
document.getElementById("button-stop").addEventListener("click", stopTime);
function stopTime(){
  clearInterval(timer);
}

//resetting timer
document.getElementById("button-reset").addEventListener("click", resetTime);
  function resetTime(){
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    stopwatchTimer();
    list.innerHTML= " "; 
  }

// saving current time
document.getElementById("button-save").addEventListener("click", splitTime);
  function splitTime(){
    let split = document.getElementById('list');
    split.innerHTML += "<li>" + " " + hrs.innerHTML +  min.innerHTML +  sec.innerHTML + "</li>";
  }