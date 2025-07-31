//ques1
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i, 1);
    }
}
console.log(arr);

//ques2
let number = 287152;
let count = 0;
while (number > 0) {
    count++;
    number = Math.floor(number / 10);
}
console.log(count);

//ques3
let money = 287152;
let sum = 0;

while (money > 0) {
    digit = money % 10;
    sum = sum + digit;
    money = Math.floor(money / 10)
}
console.log(sum);

//ques4
let n = prompt("Enter a number");
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log("factorial of", n, "is", factorial);

//ques5
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let large = 0;
for (let i = 0; i <= array.length; i++) {
    if (large < array[i]) {
        large = array[i];
    }
}
console.log(large);