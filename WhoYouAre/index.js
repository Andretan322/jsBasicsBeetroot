'use strict';

let age = prompt("How old are you?");

function ageCategory (age) {
    if (parseInt(age) == 0) {
        alert("Oh my, you're a little baby)")
    }   else if (parseInt(age) && age != "") {
            if (age < 0 || age > 120) {
                alert("It's impossible");
            }   else if (age <=12) {
                    alert("You're child");
            }   else if (age > 12 && age <= 18) {
                    alert("You're teenager");
            }   else if (age > 18 && age <= 60) {
                    alert("You're adult");
            }   else if (age > 60 && age <= 120) {
                    alert("You're pensioner");
            }
    }   else {
            alert("Plese, type the age by number!");
    }
}

ageCategory(age);