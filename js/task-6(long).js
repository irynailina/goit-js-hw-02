'use strict'


let input;
let numbers = [];
let total = 0;

while (total > -1) {
    
    numbers=[]; 
    total = 0;


do  { 

    input = prompt('Please, enter a number'); 

    if (Number.isNaN(Number(input)) || input === '') {
        alert('its not a number! Please, try again.');
    }

    if (input !== null && Number(input)) {
        numbers.push(Number(input));
    }
}
    
     while (input !== null);

        for (const number of numbers) {

            total += Number(number);
        }

        if (numbers.length > 0) {
            alert(`Общая сумма чисeл равна ${total}`);
        } else { 
        alert('Enter a number!');}

}

    

    