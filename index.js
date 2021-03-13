console.log("JavaScript - ES6");
// var a will be declared first;
console.log(a);

a = 7;
console.log(a);

// console.log(b);
let b;
// console.log(b);
b = 7;
// console.log(b);


var a = 6;
console.log(a);

let c = "a sentence";
console.log(c);
if (true) {
    let c = "a word";
    console.log(c);
}
console.log(c);

var x = "a sentence";
console.log(x);
if (true) {
    var x = "a word";
    console.log(x);
}
console.log(x);



var y = 1;
increment();
// named function
function increment() {
    var y = 2;
    y++;
    console.log(y);
}
console.log(y)

// function variations

// named function
function namedFunction(a,b) {
    // ... instructions
    return;
}

// anonymous function <=> expression functions
let anonymous = function() {
    console.log('this is anonymous');
}

anonymous();

// es6 arrow functions is an anonymous function
// no parameters
const noParams = () => {
    console.log("this is arrow no parameters");
    return;
}
noParams();

//with parameters
const withParameters = (a,b) => {
    return a < b;
}
const resultWithParameters = withParameters(3,4);
console.log(resultWithParameters);

// no curly braces
const noCurly = () => 1 + 1;
const resultCurly = noCurly();
console.log(resultCurly);

// no parenthesis when you have a single parameter
const noParenthesis = a => a + 1;
const resultNoParenthesis = noParenthesis(5);
console.log(resultNoParenthesis);


const array = [2,6,3,1,9,6];
const arrayEven = array.filter(element => element % 2 ? false  : true );
console.log(arrayEven);

// es5 stile for the same problem
const arrayEvenES5 = array.filter(function(element) {
    return element % 2 ? false  : true;
} );
console.log(arrayEvenES5);


const arrayUneven = array.filter(element => element % 2 );
console.log(arrayUneven);



function ourFilter(originalArray, filterFunction) {
    const filteredArray = [];
    for (const element of originalArray) {
        if (filterFunction(element)) {
            console.log('element passed condition', element);
            filteredArray.push(element);
        }
    }

    return filteredArray;
}

function isUneven(element) {
    console.log(element % 2);
    return element % 2;
}

const resultOurUnevenArray = ourFilter(array, isUneven);
console.log(resultOurUnevenArray);

