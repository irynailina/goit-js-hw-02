'use strict'

let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Please, enter a number!');

    if (input !== null) {
        numbers.push(Number(input));
    }
} while (input !== null);

for (const number of numbers) {
    total += number;

    console.log(number);
}

alert(`Total summ of numbers ${total}`);