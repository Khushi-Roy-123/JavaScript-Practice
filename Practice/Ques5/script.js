/*//Ques1
let nums = [1, 2, 3, 4, 5];
const square = nums.map((num) => num * num);
console.log(square);

let sum = square.reduce((acc, cur) => acc + cur, 0);
let avg = sum / nums.length;
console.log(avg);

//Ques2
let arr = [1, 2, 3, 4, 5, 6];
const value = arr.map((el) => el + 5);

//Ques3
let string = ["adam", "bob", "khushi", "harsh", "yash"];
console.log(strings.map((string) => string.toUpperCase()));
*/
//Ques4
const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((v) => v * 2),
];

doubleAndReturnArgs([1, 2, 3], 4, 4);

//Ques5
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });