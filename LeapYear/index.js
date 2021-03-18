'use strict';

let year = +prompt("What is the year?");

function leapYear(year) {
    if (isFinite(year)) {
        (year % 400 && ((year % 4) && (year % 100)))
            ? alert("Not leap year") : alert("Leap year");
    }
}

sd