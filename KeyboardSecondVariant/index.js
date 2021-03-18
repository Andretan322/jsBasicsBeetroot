'use strict';

const arr = [')', '!', '@', '#', '$', '%', '^', '&', '*', '('];
const button = prompt("What is Number");
function buttonIs(button) {
    for (let key in arr) {
        if (button == key) {
            alert(arr[button]);
        } else {
            alert("I don't know what you want");
        }
    }
}

buttonIs(button);
