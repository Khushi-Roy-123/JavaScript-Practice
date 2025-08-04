/*//setTimeout Function
console.log("Hi There!");

setTimeout(() => {
    console.log("Khushi");
}, 4000);

console.log("Welcome to");

//setInterval
let id = setInterval(() => {
    console.log("Apna College");
}, 4000);

console.log(id);

let id2 = setInterval(() => {
    console.log("Hello");
}, 3000);

console.log(id2);

//Functions - scope of this =calling object
//Arrow - lexical scope of this =parent cell scope */

const student = {
    name: "aman",
    marks: 95,
    age: 24,
    prop: this,          //global scope
    getName: function () {
        return this.name;
    },
    getMarks
};
getMarks:() => {
    console.log(this); //parents scope->window
    return this.marks;
},
getInformation : () {
    setTimeout(() =>{
    console.log("Apna College")
},2000);
}