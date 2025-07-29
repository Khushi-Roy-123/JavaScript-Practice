// ARRAYS ARE MUTABLE (changable)
// STRINGS ARE IMMUTABLE (unchangelable)

let mark = [97, 98, 99];
console.log(mark);
console.log(mark.length);

let name = ["abc", "bdc", "yesj"];
for (let idx = 0; idx < name.length; idx++) {
    console.log(name[idx]);
}

let names = ["abc", "bdc", "ye"];
for (let name of names) {
    console.log(name);
}

let marks = [85, 97, 44, 37, 60];
let sum = 0;
for (let val of marks) {
    sum += val;
}

let avg = sum / marks.length;
console.log('avg marks of class are $(avg)');


let item = [250, 645, 300, 900, 50];

let x = 0;
for (let val of item) {
    console.log(val);
    let offer = val / 10;
    item[x] = item[x] - offer;
    console.log(item[x]);
    x++;
}

let items = [250, 645, 300, 900, 50];
let i = 0;
for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);

let veggies = ['potato', 'cabbage', 'onion']
console.log(veggies);
console.log(veggies.toString());
let hero = ['khushi', 'antman', 'shaktiman', 'batman', 'heroman', 'newman'];

let fruit = ['banana', 'lichi'];
let heronew = veggies.concat(hero, fruit);
console.log(heronew);
//slice method
console.log(hero.slice(0, 2));
// push add in end
// unshift add in start
// pop method end se delete kar dega
//shift method start se delete kar dega
//splice method(add, remove , replace) used for replacing
//hero.splice(2,2,101,102);
//hero.splice(4,0,'new name');
hero.splice(2);

console.log(hero)


//practice ques 
let arr = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];
//arr.splice(0,1);
arr.splice(2, 1, 'Ola');
arr.push('Amazon');
console.log(arr)

//method chain 
let msg = "    Hello    ";
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);