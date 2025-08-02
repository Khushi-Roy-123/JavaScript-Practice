/*// redundancy = repeat ..... funtions are used to minimise the repetition of a code

function useFunction(x) {// parameter -> input
    console.log(x);
}
useFunction("hi this is a way to print the msg");// argument

function sum(a, b) {
    // here a,b are local variables ->scope
    s = a + b;
    console.log("before");
    console.log(a);
    return s;
    console.log("after"); // never be executed  
}

let val = sum(5, 9);
console.log(a);
console.log(val);

// function parameters are like local variables of function and they have block scope 
//ARROW FUNCTIONS part of modern js
function mul(a, b) {
    return a * b;
}
const arrowMul = (a, b) => {
    return (a * b);
}
let sum = (a, b) => {
    console.log(a + b);
}
const printGreet = () => {
    console.log("Hello");
}

function countVowles(str) {
    let count = 0;
    for (const char of str) {
        if (char === 'a' ||
            char === 'e' ||
            char === 'i' ||
            char === 'o' ||
            char === 'u') {
            count++;
        }
    }
    console.log(count);
}
// arrow funtion for the same function

const vowels = (str) => {
    let count = 0
    for (const char of str) {
        if (char === 'a' ||
            char === 'e' ||
            char === 'i' ||
            char === 'o' ||
            char === 'u') {
            count++;
        }
    }
    return count;
}


function diceRoll() {
    let number = Math.floor(Math.random() * 6) + 1;
    console.log(number);
}
diceRoll();

//Arguments
function printStudent(name, age) {
    console.log(name, "s age is", age)
}
printStudent("Khushi", 17);

function getSum(n) {
    let sum = 0;
    for (i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

//Canacatigate the string
let str = ["hi", "hello", "bye", "!"];
function concat(str) {
    let me = "";
    for (i = 0; i < str.length; i++) {
        me += str[i];
    }
    return me;
}

//Function Scope is more specific than global scope
//Block scope only works inside the blocks
//Lexical scope is like a nested function

//Function Expression
const summation = function (a, b) {
    return a + b;
}
*function multipleGreet(func, count) {
    for (let i = 1; i <= count; i++);
    func();
}
let greet = function () {
    console.log("hi");
}
multipleGreet(greet, 50);

//Higher Order Function
function oddEvenTest(request){
    if (request == "odd"){
        return function (n){
            console.log(!(n % 2 == 0));
        }
        return odd;
    }
    else if (request == "even"){
        return function (n){
            console.log(n % 2 == 0);
        }
        return even;
    }
    else{
        console.log("wrong request");
    }
}
let request = "odd";
*/
//Methods

const calculator = {
    num: 55,
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    }

};
