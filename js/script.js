"use strict"
console.log("35" + - "22");
console.log("35" * "22");
console.log("558" > 22 + 1);
let userCounter = 0;
let users = userCounter++;
console.log(users);
users = userCounter;
console.log(users);
console.log(!false && 11 || 18 && !"");
let nameUser = 0;
console.log(nameUser ?? "Без имени");
if (1 === "1") {
    console.log("истина");
} else {
    console.log("лож");
}
if (5 == "5") {
    console.log("истина");
} else {
    console.log("лож");
}
let message = (92 > "11" && 50 < 100) ? "истина на на" : "ложь";
console.log(message);
if (0) {
    console.log("ложь");
} else if (" ") {
    console.log("истина");
}
let num = 1;
while (num <= 5) {
    console.log(num);
    num++;
}
let num2 = 8;
while (num2) console.log(num2--);
num = 0;
while (num < 3) console.log(`число ${num++}`);
First:
for (let numb = 0; numb < 2; numb++) {
    for (let size = 0; size < 3; size++) {
        console.log(size);
        if (size == 1) {
            break First;
        }
    }
}
let numOne = 1.005;
numOne = numOne + Number.EPSILON;
numOne = Math.round(numOne * 100) / 100;
console.log(numOne);
let numTwo = 1.005 + Number.EPSILON;;
numTwo = numTwo.toFixed(2);
console.log(+numTwo)



let someSize = "135.58dd";
someSize = parseFloat(someSize);
console.log(someSize);

let value = 58 * "hello";
value = isNaN(value);
if (value) {
    console.log("результат выражения НаН");
}

let maxNum = Math.max(10, 58, -150, 0);
console.log(maxNum);
let numLast = 58.858;
numLast = Math.floor(58.858);
console.log(numLast);

let fls = "фрилансер";
let text = `привет я ${fls}`;
console.log(text);
let flsLetter = fls.indexOf('н');
flsLetter = fls[flsLetter];
console.log(flsLetter);
console.log(fls[5]);
num = 123 + "456";
console.log(num);
let flsUpper = fls.toUpperCase();
console.log(flsUpper);
let cutWord = fls.slice(3, 6);
console.log(cutWord);
let souresWord = "Фрилансер";
souresWord = souresWord.toLowerCase();
let searchWord = "лан";
let letterNumber = [];
if (souresWord.includes(searchWord)) {
    for (let i = 0; i < searchWord.length; i++) {
        letterNumber[i] = souresWord.indexOf(searchWord[i]);
    }
} else {
    console.log("такого слова нет в заданном");
}
let g = 0;
let sliceWord = "";
while (g < letterNumber.length) {
    sliceWord += souresWord[letterNumber[g]];
    souresWord = souresWord.replace(souresWord[letterNumber[g]], "_");
    ++g;

}
console.log(sliceWord);
console.log(souresWord);
console.log(fls.includes("лан", 4));
