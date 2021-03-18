'use strict';

let number = prompt("Type the number");

function numberDigits(number) {
    if (isFinite(number) && number.length <= 3) {
        (number[0] == number[1] || number[1] == number[2] ||
            number[0] == number[2]) ? alert("true") : alert("false");
    }   else {
            alert("Please, type the correct number");
    }
}

numberDigits(number);