//Ques1
let button = document.createElement("button");
letinput = document.createElement("input");

button.innerText = "Clickme";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

//Ques2
button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

//Ques3
let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

//Ques4
let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").append(h1);

//Ques5
let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);