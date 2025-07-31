/*//for loop

for (let count = 1; count <= 10000; count++) {
    console.log("apnaschool");
}
console.log("loop has ended");
console.log("code has ended here move to next")
for (i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log("sum=", sum)


// infinite loop is loop that never ends


//while loop
let i = 1;
while (i <= 8) {
    console.log("i=", i);
    i++
}
let i = 20;
do {
    console.log("apna college");
    i++;
}
while (i <= 10);

do {
    console.log("yeppi");
    i++;
}
while (i <= 20);


// for of loop = strings and arrays
let str = "hi sir";
let size = 0;
for (let val of str) {
    console.log("i=", val);
    size++;
}
console.log("string size=", size);


// for in loop
let student = {
    name: "khushi",
    age: 16,
    cgpa: 8.5,
    isPass: true,
}

for (let key in student) {
    console.log("key=", key, "value=", student[key]);
}



for (let i = 0; i <= 100; i = i + 2) {
    console.log(i);
}

let number = 16;

let user = prompt("Guess the value");
while (user != number) {
    prompt("your ans was wrong retry:");
}
console.log("you win");



//strings
let str = "hi my name is khushi";
console.log(str[8]);


//template literals
let sentence = "this is a template literal";
console.log(typeof sentence);

let obj = {
    item: "pen",
    price: 10,
};

console.log("the cost of", obj.item, "is", obj.price, "rupees");
let output = 'the cost of ${obj.item} is ${obj.price} rupees ${1+2+3}';
console.log(output);

//for next line we use /n 
// for tab space we use /t
let str = "    hi hello sir     ";
let str1 = "apna";
let str2 = "college"
console.log(str.replace("h", "m"));
console.log(str.replaceAll("h", "m"));
console.log(str.charAt(5));

str = prompt("enter ur name");
console.log("@" + str + str.length);

//Switch Statement
let color = "red";
switch (color) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("wait");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("Broken Light")
}
*/
let n = prompt("number");
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ans = arr.slice(0, n);
console.log(ans);


