
console.log("js async-programing");

document.addEventListener("click", onClick);

let counter = 0;
function onClick() {
    console.log("just a click in the app");
    counter++;
    console.log("counter:", counter);
}
console.log("counter:", counter);

//the function is a anonymous function
setTimeout(function(){
    console.log("this is a code ran after 2sec   1");
}, 2000);
console.log("2");

//this is similar to 
setTimeout(setTimeoutFunction, 2000);

function setTimeoutFunction(){
    console.log("this is a code ran after 2 seconds", "setTimeoutFunction",  "3");
}

console.log("First");
setTimeout(function() {
    console.log("second");
}, 0);
setTimeout(function() {
    console.log("third");
}, 0);
setTimeout(function() {
    console.log("forth ");
}, 0);
setTimeout(function() {
    console.log("fifth");
}, 1);





setInterval(function() {
    console.log("ping");
}, 1000);